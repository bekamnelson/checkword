// ==========================================
// VARIABLES GLOBALES
// ==========================================
let players = [];
let masterIndex = 0;         // Celui qui choisit le mot
let currentPlayerIndex = 1;  // Celui qui doit deviner
let secretWord = "";
let lettersFoundCount = 0;
const MAX_LIVES = 5;

// Elements DOM
const setupScreen = document.getElementById("setup-screen");
const wordScreen = document.getElementById("word-screen");
const gameScreen = document.getElementById("game-screen");

// ==========================================
// PHASE 1 : FORMULAIRES DE SETUP
// ==========================================
function showNameInputs() {
    const nb = parseInt(document.getElementById("nbPlayersInput").value);
    if (nb < 2 || isNaN(nb)) return alert("Il faut au moins 2 joueurs !");

    document.getElementById("step-1").classList.add("cache");
    const container = document.getElementById("names-container");
    container.innerHTML = "";

    for (let i = 0; i < nb; i++) {
        container.innerHTML += `<input type="text" id="playerName${i}" class="input-gold" placeholder="Nom du joueur ${i + 1}" required>`;
    }
    document.getElementById("step-2").classList.remove("cache");
}

function validerJoueurs() {
    const nb = parseInt(document.getElementById("nbPlayersInput").value);
    players = [];

    for (let i = 0; i < nb; i++) {
        let name = document.getElementById(`playerName${i}`).value.trim();
        if (name === "") name = `Joueur ${i + 1}`;
        players.push({
            id: i,
            name: name,
            lives: MAX_LIVES,
            active: true
        });
    }

    setupScreen.classList.add("cache");
    masterIndex = 0; 
    preparerEcranMaitre();
}

// ==========================================
// PHASE 2 : LE MAÎTRE CHOISIT LE MOT
// ==========================================
function preparerEcranMaitre() {
    // Vérifier s'il y a un gagnant ultime
    const survivants = players.filter(p => p.active);
  
    if (survivants.length === 1) {
        afficherVictoireUltime(survivants[0]);
        return;
    }

    // Réinitialiser les inputs
    document.getElementById("secretWordInput").value = "";
    document.getElementById("hintInput").value = "";
    
    // Forcer l'affichage du bon écran
    document.getElementById("boite-manche").classList.add("cache");
    document.getElementById("game-screen").classList.add("cache");
    document.getElementById("word-screen").classList.remove("cache");

    document.getElementById("master-info").innerHTML = `👑 <b>${players[masterIndex].name}</b>, c'est à toi de choisir le mot secret !<br><small>(Les autres, fermez les yeux !)</small>`;
}

function startRound() {
    let rawWord = document.getElementById("secretWordInput").value;
    const hint = document.getElementById("hintInput").value.trim();

    // 1. Majuscules
    // 2. Enlever les accents (é -> e, à -> a)
    // 3. Retirer tout ce qui n'est pas une lettre de A à Z (espaces, tirets, apostrophes...)
    const word = rawWord.toUpperCase()
                        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                        .replace(/[^A-Z]/g, "");

    if (word.length < 2) {
        return alert("Veuillez entrer un mot valide (au moins 2 lettres, sans compter les espaces ou chiffres).");
    }

    secretWord = word;
    lettersFoundCount = 0;

    wordScreen.classList.add("cache");
    gameScreen.classList.remove("cache");

    generetedescription(hint);
    genererMotInconnu(secretWord);
    generatekeyborad();
    
    currentPlayerIndex = masterIndex;
    passerAuJoueurSuivant(); 
    
    GeneratePlayersUI();
}

// ==========================================
// PHASE 3 : LE JEU (DEVINETTES ET TOURS)
// ==========================================
function passerAuJoueurSuivant() {
    let attempts = 0;
    do {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        attempts++;
    } while ((!players[currentPlayerIndex].active || currentPlayerIndex === masterIndex) && attempts <= players.length);

    GeneratePlayersUI();
    document.getElementById("tour-indicator").innerText = `Tour de : ${players[currentPlayerIndex].name}`;
}

function verifieletter(letter) {
    // Si la boîte de fin de manche est affichée, on bloque les clics
    if (!document.getElementById("boite-manche").classList.contains("cache")) return;

    let lettreTrouvee = false;

    // Cherche la PREMIÈRE occurrence de la lettre qui n'a pas encore été trouvée
    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letter) {
            const charletter = document.getElementById(`letter${i}`);
            
            // On utilise un marqueur "dataset" infaillible au lieu de vérifier le texte
            if (charletter.dataset.found === "false") {
                charletter.textContent = letter;
                charletter.dataset.found = "true"; // On marque la lettre comme trouvée
                lettersFoundCount++;
                lettreTrouvee = true;
                break; // On s'arrête pour ne révéler qu'UNE SEULE lettre par clic
            }
        }
    }

    if (lettreTrouvee) {
        // Si toutes les lettres sont trouvées
        if (lettersFoundCount === secretWord.length) {
           setTimeout(finDeManche(), 300); 
            
             
        }
    } else {
        // Mauvaise lettre (ou lettre déjà toutes trouvées) : Perte de vie
        players[currentPlayerIndex].lives--;
        
        if (players[currentPlayerIndex].lives <= 0) {
            players[currentPlayerIndex].active = false;
            
            const survivants = players.filter(p => p.active);
            if (survivants.length === 1) {
                  
                afficherVictoireUltime(players[masterIndex]);
                    
               
           
            }
        }
        
        passerAuJoueurSuivant();
    }
}

// ==========================================
// FIN DE MANCHE ET FIN DE JEU
// ==========================================
function finDeManche() {
    genererSonVictoire();
    
    // Celui qui a trouvé la dernière lettre devient le nouveau Maître
    masterIndex = currentPlayerIndex; 
   
    document.getElementById("manche-text").innerHTML = `
        Félicitations ! <b>${players[currentPlayerIndex].name}</b> a terminé le mot :<br>
        <span style="color: var(--gold-light); font-size: 1.5em; letter-spacing: 3px;">${secretWord}</span><br><br>
        Il devient le nouveau Maître du Jeu !
    `;
    
    document.getElementById("boite-manche").classList.remove("cache");
  
}

function preparerNouveauTour() {
    preparerEcranMaitre();
}

function afficherVictoireUltime(gagnant) {
    genererSonVictoire();
    document.getElementById("word-screen").classList.add("cache");
    document.getElementById("game-screen").classList.add("cache");
    document.getElementById("boite-manche").classList.add("cache");
    
    document.getElementById("victoire-text").innerHTML = `
        Tous les autres joueurs ont été éliminés.<br><br>
        👑 <b>${gagnant.name}</b> est le grand gagnant de la partie !
    `;
    
    document.getElementById("boite-victoire").classList.remove("cache");
}

// ==========================================
// INTERFACE UTILISATEUR ET DESSIN
// ==========================================
function GeneratePlayersUI() {
    const containtplayers = document.getElementById("containtplayers");
    containtplayers.innerHTML = '';
    
    players.forEach((player, index) => {
        const div = document.createElement('div');
        div.classList.add("player-box", "players");
        
        if (!player.active) {
            div.classList.add("player-dead"); 
        } else if (index === masterIndex) {
            div.classList.add("player-master"); 
            div.title = "Maître du Jeu";
        } else if (index === currentPlayerIndex) {
            div.classList.add("player-active"); 
        }

        const icone = !player.active ? "💀" : (index === masterIndex ? "👑" : "👤");

        div.innerHTML = `
            <div style="font-size: 2rem;">${icone}</div>
            <div class="nameplayers" style="color: white; margin: 5px 0;">${player.name}</div>
            <div class="lifebar" id="lifebar${index}"></div>
        `;
        
        containtplayers.appendChild(div);
        
        const lifebar = document.getElementById(`lifebar${index}`);
        generetelife(player.lives, lifebar);
    });
}

function generetelife(nomberlife, container) {
    container.innerHTML = '';
    for (let i = 1; i <= MAX_LIVES; i++) {
        const div = document.createElement('div');
        div.classList.add('life');
        if (i <= nomberlife) {
            div.classList.add('red');
        }
        container.appendChild(div);
    }
}

function genererMotInconnu(word) {
    const game = document.getElementById('game');
    game.innerHTML = ''; 
    for (let i = 0; i < word.length; i++) {
        const contentletter = document.createElement('div');
        const charletter = document.createElement('div');
        const barredeco = document.createElement('div');
        
        charletter.textContent = ''; // Vide au départ
        charletter.dataset.found = "false"; // Marqueur infaillible
        charletter.id = `letter${i}`;
        barredeco.classList.add('baredeco');
        
        contentletter.appendChild(charletter);
        contentletter.appendChild(barredeco);
        game.appendChild(contentletter);
    }
}

function generatekeyborad() {
    const content = document.getElementById('keyboard');
    content.innerHTML = ''; 
    const keyboard = document.createElement('div');
    keyboard.classList.add("keyboard2");
    
    const letters = [
        'A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
        'W', 'X', 'C', 'V', 'B', 'N'
    ];

    letters.forEach(letter => {
        const div = document.createElement('div');
        div.innerText = letter;
        div.classList.add('letter');

        div.addEventListener('click', function () {
            jouerSonTouche();
            verifieletter(letter);
        });
        
        keyboard.appendChild(div);
    });
    content.appendChild(keyboard);
}

function generetedescription(description) {
    const descript = document.getElementById('description');
    descript.innerHTML = '';
    if(description) {
        const div = document.createElement('div');
        div.innerText = description;
        div.classList.add("contenuedescription");
        descript.appendChild(div);
    }
}

// ==========================================
// SYSTÈME AUDIO
// ==========================================
let tapAudioCtx = null;
function jouerSonTouche() {
    try {
        if (!tapAudioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            tapAudioCtx = new AudioContext();
        }
        if (tapAudioCtx.state === 'suspended') tapAudioCtx.resume();

        const osc = tapAudioCtx.createOscillator();
        const volume = tapAudioCtx.createGain();
        osc.type = 'square';
        const duree = 0.025;
        const maintenant = tapAudioCtx.currentTime;

        osc.frequency.setValueAtTime(800, maintenant);
        osc.frequency.exponentialRampToValueAtTime(100, maintenant + 0.015);
        volume.gain.setValueAtTime(0.3, maintenant);
        volume.gain.exponentialRampToValueAtTime(0.001, maintenant + duree);

        osc.connect(volume);
        volume.connect(tapAudioCtx.destination);
        osc.start(maintenant);
        osc.stop(maintenant + duree);

        if (navigator.vibrate) navigator.vibrate(15); 
    } catch (e) { console.log("Audio non supporté"); }
}

function genererSonVictoire() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        function jouerNote(frequence, tempsDepart, duree) {
            const oscillateur = ctx.createOscillator();
            const volume = ctx.createGain();
            oscillateur.type = 'triangle';
            oscillateur.frequency.value = frequence;
            volume.gain.setValueAtTime(0, ctx.currentTime + tempsDepart);
            volume.gain.linearRampToValueAtTime(0.2, ctx.currentTime + tempsDepart + 0.05);
            volume.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + tempsDepart + duree);
            oscillateur.connect(volume);
            volume.connect(ctx.destination);
            oscillateur.start(ctx.currentTime + tempsDepart);
            oscillateur.stop(ctx.currentTime + tempsDepart + duree);
        }
        jouerNote(523.25, 0, 0.3);     
        jouerNote(659.25, 0.1, 0.3);   
        jouerNote(783.99, 0.2, 0.3);   
        jouerNote(1046.50, 0.3, 0.8);  
    } catch (e) { console.log("Audio non supporté"); }
}
const musiqueAmbiance = new Audio('./../sound/sound1.mp3');
musiqueAmbiance.loop = true;
musiqueAmbiance.volume = 0.2;

// On écoute le TOUT PREMIER clic sur la page de jeu
document.body.addEventListener('click', function () {

    // On lance la musique si elle n'est pas déjà en train de jouer
    if (musiqueAmbiance.paused) {
        musiqueAmbiance.play();
    }

}, { once: true });