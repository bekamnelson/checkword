var nombreessaie;
const boite = document.getElementById('boite');
const boite2 = document.getElementById('boite2');
const cont = document.getElementById('container');
const GAME_VERSION = "2.0";
const CLE_SAUVEGARDE = "niveauxTermines";
/*
let player = {
        level: 500,
        selectedTheme: 1
    };

      localStorage.setItem('player', JSON.stringify(player));*/
if (localStorage.getItem('game_version') !== '2.0') {
    localStorage.removeItem('player');
    localStorage.setItem('game_version', '2.0');
    let level = 1;
    if(localStorage.getItem('player') != undefined){
         const  level = JSON.parse(localStorage.getItem('player')).level;

    }
   
    
    let player = {
        level: 1,
        selectedTheme: 1
    };
   
        player.level = level;
        localStorage.setItem('player', JSON.stringify(player));
    
  
}

async function chargerMots() {
    const reponse = await fetch('../JSON/liste_mot.json');
    const data = await reponse.json();
    return data; 
}

function checklevel(level){
  
    let sauvegarde = localStorage.getItem("niveauxJoues");
    let niveauxJoues = sauvegarde ? JSON.parse(sauvegarde) : [];

    // 2. On vérifie si l'entier 'n' est dans le tableau
    if(level>=5293){
       return verifierNiveau(0); 
    }
    if (niveauxJoues.includes(level)) {
        return verifierNiveau(level+ 1); 
    } else {
        return level;     
    }



}

async function game() {
     const listword = await chargerMots();

    if (typeof updateTheme === "function") { updateTheme(); }
    if (localStorage.getItem('player')) {
        const p = JSON.parse(localStorage.getItem('player'));
        document.getElementById('headerLevel').innerText = 'Niveau ' + p.level;
    }
    nombreessaie = 5;
    boite.style.display = 'none';
    boite2.style.display = 'none';
    cont.classList.remove('cache');
    cont.innerHTML = " <div class='description' id='description'></div> <div class='game' id='game'></div> <div class='lifebar' id='lifebar'></div><div class='keyboard' id='keyboard'></div>";
    
    
      


    if (localStorage.getItem('player')) {
        let i;
        player = JSON.parse(localStorage.getItem('player'));
        
        generetelife(5);
        indice =Math.floor(Math.random() * listword.length);
        indice = checklevel(indice);
          checkword   = listword[indice].word;
        


        for (i = 0; i <= checkword.length - 1; i++) {
         
            genereteletter(' ', i);
        }
        generetedescription(listword[indice].indice);
        generatekeyborad(checkword);

    } else {
        let player = {
            level: 1
        }
        localStorage.setItem('player', JSON.stringify(player));
        game();
    }
}

function generatekeyborad(word) {
    let i;
    let content = document.getElementById('keyboard');
    const keyboard = document.createElement('div');
    const letters = [
    'A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
    'W', 'X', 'C', 'V', 'B', 'N'
    ];
    for (i = 0; i <= 25; i++) {
        const div = document.createElement('div');
        const check = letters[i];
        div.addEventListener('click', function () {
            jouerSonTouche();
            console.log(check);
            const test = verifieletter(check, word);
            if (nombreessaie == 0) {
                boite.style.display = 'block';
                cont.classList.add('cache');
            }
            if (test) {
                if (endgame(word)) {
                    boite2.querySelector('.modal-text').innerHTML = `Félicitations, vous avez trouvé le mot caché !<br><br><span style="color: #f0c060; font-size: 1.5em; letter-spacing: 5px; font-family: 'Cinzel', serif; text-shadow: 0 0 10px rgba(240,192,96,0.5);">${word}</span>`;
                    genererSonVictoire();
                    saveLevel(indice);
                    boite2.style.display = 'block';
                    cont.classList.add('cache');
                };
            } else {
                if (nombreessaie - 1 == 0) {

                    genererSonDefaite();
                    boite.style.display = 'block';
                    cont.classList.add('cache');
                } else {
                    nombreessaie--;
                    generetelife(nombreessaie);
                }
            }
        }
        );
        div.innerText = letters[i];
        div.classList = 'letter';
        keyboard.appendChild(div);
    }
    keyboard.classList = "keyboard2";
    content.appendChild(keyboard);

};

function genereteletter(letter, i) {
    const game = document.getElementById('game');
    const contentletter = document.createElement('div');
    const barredeco = document.createElement('div');
    const charletter = document.createElement('div');
    charletter.innerText = letter;
    charletter.id = `letter${i}`;
    barredeco.classList = 'baredeco';
    contentletter.appendChild(charletter);
    contentletter.append(barredeco);
    game.appendChild(contentletter);
}

function verifieletter(letter, word) {
    let i;

    for (i = 0; i <= word.length - 1; i++) {
        console.log(word[i]);
        console.log(letter);
        if (letter == word[i]) {

            const charletter = document.getElementById(`letter${i}`);
            if (charletter.innerText == '') {


                charletter.innerText = letter;
                console.log(charletter);
                return true;
            }
        }
    }
    return false;

}

function generetedescription(description) {
    const descript = document.getElementById('description');
    const div = document.createElement('div');
    div.innerText = description;
    div.classList = "contenuedescription";
    descript.appendChild(div);
}

function endgame(word) {
    let i;

    for (i = 0; i <= word.length - 1; i++) {
        const charletter = document.getElementById(`letter${i}`);

        if (charletter.innerText != word[i]) {
            return false;
        }
    }

    player = JSON.parse(localStorage.getItem('player'));
    player.level += 1;
    localStorage.setItem('player', JSON.stringify(player));
    return true;

}

function generetelife(nomberlife) {
    let i;
    const container = document.getElementById('lifebar');
    container.innerHTML = '';
    for (i = 1; i <= 5; i++) {
        const div = document.createElement('div');
        if (i <= nomberlife) {
            div.classList = 'life red';
        } else {
            div.classList = 'life';
        }
        container.appendChild(div)


    }

}

game();

// 1. On crée l'objet audio en indiquant le nom de ton fichier
const musiqueAmbiance = new Audio('./../sound/sound1.mp3');
musiqueAmbiance.loop = true;
musiqueAmbiance.volume = 0.2;

// On écoute le TOUT PREMIER clic sur la page de jeu
document.body.addEventListener('click', function () {

    // On lance la musique si elle n'est pas déjà en train de jouer
    if (musiqueAmbiance.paused) {
        musiqueAmbiance.play();
    }

}, { once: true }); // "once: true" fait que ce code ne s'exécute qu'au premier clic, pas à chaque fois que le joueur clique pendant la partie


// Fonction qui génère un son de victoire de toutes pièces
function genererSonVictoire() {
    // On initialise le synthétiseur du navigateur
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();

    // Petite fonction interne pour créer une note de musique
    function jouerNote(frequence, tempsDepart, duree) {
        const oscillateur = ctx.createOscillator();
        const volume = ctx.createGain();

        // Type d'onde : 'triangle' donne un côté doux et "jeu vidéo"
        oscillateur.type = 'triangle';
        oscillateur.frequency.value = frequence;

        // On gère le volume pour faire un bel effet d'écho (fondu)
        volume.gain.setValueAtTime(0, ctx.currentTime + tempsDepart);
        volume.gain.linearRampToValueAtTime(0.2, ctx.currentTime + tempsDepart + 0.05); // Monte vite à 20%
        volume.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + tempsDepart + duree); // Baisse doucement

        oscillateur.connect(volume);
        volume.connect(ctx.destination);

        oscillateur.start(ctx.currentTime + tempsDepart);
        oscillateur.stop(ctx.currentTime + tempsDepart + duree);
    }

    // On joue 4 notes rapides vers les aigus pour faire la victoire (Accord de Do Majeur)
    jouerNote(523.25, 0, 0.3);     // Note 1 (Do)
    jouerNote(659.25, 0.1, 0.3);   // Note 2 (Mi)
    jouerNote(783.99, 0.2, 0.3);   // Note 3 (Sol)
    jouerNote(1046.50, 0.3, 0.8);  // Note 4 finale plus longue (Do aigu)
}

// Fonction qui génère un son d'échec / défaite
function genererSonDefaite() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();

    function jouerClochetteZen(frequence, delai) {
        const osc = ctx.createOscillator();
        const volume = ctx.createGain();

        osc.type = 'sine'; // L'onde la plus pure et douce
        osc.frequency.value = frequence;

        // On crée un effet de résonance très long (fade out)
        volume.gain.setValueAtTime(0, ctx.currentTime + delai);
        volume.gain.linearRampToValueAtTime(0.15, ctx.currentTime + delai + 0.1); // Apparition très douce
        volume.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delai + 2.5); // Disparition très lente (2.5 secondes)

        osc.connect(volume);
        volume.connect(ctx.destination);

        osc.start(ctx.currentTime + delai);
        osc.stop(ctx.currentTime + delai + 2.5);
    }

    // Un accord "chill" (Majeur 7) égrené comme une harpe ou un vibraphone
    jouerClochetteZen(523.25, 0);      // Do
    jouerClochetteZen(659.25, 0.08);   // Mi
    jouerClochetteZen(783.99, 0.16);   // Sol
    jouerClochetteZen(987.77, 0.24);   // Si (C'est cette note qui donne le côté moderne/zen)
}

let tapAudioCtx = null;

function jouerSonTouche() {
    // 1. Initialise l'audio au premier appel
    if (!tapAudioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        tapAudioCtx = new AudioContext();
    }

    // 2. Débloque le son si le navigateur l'a mis en pause
    if (tapAudioCtx.state === 'suspended') {
        tapAudioCtx.resume();
    }

    const osc = tapAudioCtx.createOscillator();
    const volume = tapAudioCtx.createGain();

    // --- MODIFICATIONS POUR LE SON "TAQ" ---

    // Un son 'square' (carré) ou 'triangle' donne ce côté "plastique" ou "surface dure"
    osc.type = 'square';

    const duree = 0.025; // Très court, 25 millisecondes
    const maintenant = tapAudioCtx.currentTime;

    // Attaque très percussive : commence haut et s'écrase presque instantanément
    osc.frequency.setValueAtTime(800, maintenant);
    osc.frequency.exponentialRampToValueAtTime(100, maintenant + 0.015);

    // Volume : Frappe forte immédiate, puis le son meurt très vite
    volume.gain.setValueAtTime(0.3, maintenant); // 0.3 suffit, le 'square' est un son fort
    // Attention : exponentialRampToValueAtTime ne supporte pas la valeur 0 exacte
    volume.gain.exponentialRampToValueAtTime(0.001, maintenant + duree);

    // ---------------------------------------

    osc.connect(volume);
    volume.connect(tapAudioCtx.destination);

    osc.start(maintenant);
    osc.stop(maintenant + duree);

    // 4. Vibration Haptique pour mobile
    if (navigator.vibrate) {
        navigator.vibrate(15); // Légèrement augmenté pour correspondre au son "dur"
    }
}

function saveLevel(indiceMot) {
    let sauvegarde = localStorage.getItem(CLE_SAUVEGARDE);
    let motsJoues = [];

    if (sauvegarde) {
        motsJoues = JSON.parse(sauvegarde);
    }

    // On ajoute l'indice seulement s'il n'y est pas déjà
    if (!motsJoues.includes(indiceMot)) {
        motsJoues.push(indiceMot);
        localStorage.setItem(CLE_SAUVEGARDE, JSON.stringify(motsJoues));
        console.log("Mot à l'indice " + indiceMot + " sauvegardé !");
    }
}