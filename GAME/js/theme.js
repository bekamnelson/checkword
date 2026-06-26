// On récupère le niveau actuel du joueur (par défaut 1 s'il n'a jamais joué)
const player = JSON.parse(localStorage.getItem('player'));
console.log(player);
const currentLevel = player.level;
let selectedTheme = player.selectedTheme;
console.log(player.selectedTheme);
// Afficher le niveau en haut de l'écran
document.getElementById("display-level").innerText = `Niveau : ${currentLevel}`;

// Liste des thèmes et niveaux requis
const themes = [
    { id: 1, name: "fantasy", reqLevel: 1 },
    { id: 2, name: "SAKURA", reqLevel: 50 },
    { id: 3, name: "CYBERPUNK", reqLevel: 100 },
    { id: 4, name: "CANDY", reqLevel: 150 },
    { id: 5, name: "OCÉAN", reqLevel: 200 },
    { id: 6, name: "CRÉPUSCULE", reqLevel: 250 },
    { id: 7, name: "LABO", reqLevel: 300 },
    { id: 8, name: "RUE", reqLevel: 350 }
];

const container = document.getElementById("themes-container");

function renderThemes() {
    container.innerHTML = "";

    themes.forEach(theme => {
        const isUnlocked = currentLevel >= theme.reqLevel;
        const isSelected = selectedTheme === theme.id;

        const card = document.createElement("div");
        card.classList.add("theme-card");
        
        // Image de fond (plan1.png, plan2.png...)
        card.style.backgroundImage = `url('../image/plan${theme.id}.png')`;

        if (!isUnlocked) {
            card.classList.add("locked");
            card.innerHTML = `
                <div class="lock-icon">🔒</div>
                <div class="theme-name">Niv. ${theme.reqLevel}</div>
            `;
            card.onclick = () => alert(`Il faut atteindre le niveau ${theme.reqLevel} pour débloquer ce thème !`);
        } else {
            if (isSelected) card.classList.add("selected");
            
            card.innerHTML = `
                <div class="theme-name">${theme.name}</div>
            `;
            
            card.onclick = () => selectTheme(theme.id);
        }

        container.appendChild(card);
    });
}

function selectTheme(id) {
    // Sauvegarde le choix dans le navigateur
    player.selectedTheme = id;
    localStorage.setItem('player', JSON.stringify(player));
    selectedTheme = id;
    
    // Met à jour le fond d'écran immédiatement
    document.querySelector(".hero-bg").style.backgroundImage = `url('../image/plan${id}.png')`;
    
    // Recharge l'affichage pour mettre la bordure verte sur le bon thème
    renderThemes();
    updateTheme();
}

 function updateTheme() {
        let level = 1;
         let themeNum = 1;
        if (localStorage.getItem('player')) {
            level = JSON.parse(localStorage.getItem('player')).level || 1;
        }
        
        // Calcule le palier (de 1 à 8)
         if (localStorage.getItem('player'). selectedTheme) {
        themeNum = JSON.parse(localStorage.getItem('player')).selectedTheme || 1;
         }
        // Bloque au 8ème thème maximum (pour les niveaux 351 et plus)
        if (themeNum > 8) {
            themeNum = 8; 
        }
        
     
        
        // Modifie le fichier CSS (Si suffix est vide, ça donnera "game.css")
        document.getElementById('theme-css').href = "./../css/game" + themeNum+ ".css";
    }
// Initialisation
renderThemes();
updateTheme();

