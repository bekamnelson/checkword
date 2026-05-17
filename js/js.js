 var nombreessaie ;
 const boite = document.getElementById('boite');
  const boite2 = document.getElementById('boite2');
 const cont =document.getElementById('container');
function game(){
     nombreessaie = 5;
    boite.style.display = 'none';
    boite2.style.display = 'none';
    cont.classList.remove('cache');
    cont.innerHTML=" <div class='description' id='description'></div> <div class='game' id='game'></div> <div class='lifebar' id='lifebar'></div><div class='keyboard' id='keyboard'></div>";
  const listword = [
  // --- NATURE & ANIMAUX (1-20) ---
  { level: 1, word: 'SOLEIL', indice: 'Étoile qui nous éclaire la journée' },
  { level: 2, word: 'FORET', indice: 'Grand espace rempli d’arbres' },
  { level: 3, word: 'OCEAN', indice: 'Immense étendue d’eau salée' },
  { level: 4, word: 'CHEVAL', indice: 'Animal que l’on monte pour galoper' },
  { level: 5, word: 'JARDIN', indice: 'Petit coin de verdure devant une maison' },
  { level: 6, word: 'VOLCAN', indice: 'Montagne qui rejette de la lave' },
  { level: 7, word: 'OISEAU', indice: 'Animal qui possède des plumes et vole' },
  { level: 8, word: 'RIVIERE', indice: 'Cours d’eau qui se jette dans un fleuve' },
  { level: 9, word: 'DESERT', indice: 'Endroit très sec couvert de sable' },
  { level: 10, word: 'FLEUR', indice: 'Plante colorée souvent parfumée' },
  { level: 11, word: 'MONTAGNE', indice: 'Sommet très haut souvent enneigé' },
  { level: 12, word: 'POISSON', indice: 'Animal vivant sous l’eau avec des ouïes' },
  { level: 13, word: 'TIGRE', indice: 'Félin à rayures vivant dans la jungle' },
  { level: 14, word: 'NUAGE', indice: 'Amas d’eau suspendu dans le ciel' },
  { level: 15, word: 'SINGE', indice: 'Animal agile qui grimpe aux arbres' },
  { level: 16, word: 'LUNE', indice: 'Astre qui brille la nuit' },
  { level: 17, word: 'CHIEN', indice: 'Meilleur ami de l’homme' },
  { level: 18, word: 'CHAT', indice: 'Petit félin domestique qui ronronne' },
  { level: 19, word: 'PAPILLON', indice: 'Insecte aux ailes colorées' },
  { level: 20, word: 'ORAGE', indice: 'Phénomène météo avec foudre et tonnerre' },

  // --- MAISON & OBJETS (21-40) ---
  { level: 21, word: 'FENETRE', indice: 'Ouverture pour voir à travers les murs' },
  { level: 22, word: 'CHAISE', indice: 'Meuble utilisé pour s’asseoir' },
  { level: 23, word: 'TABLE', indice: 'Meuble pour manger ou travailler' },
  { level: 24, word: 'LAMPE', indice: 'Objet qui produit de la lumière' },
  { level: 25, word: 'MIROIR', indice: 'Surface qui reflète votre image' },
  { level: 26, word: 'CUISEUR', indice: 'Appareil pour préparer les aliments' },
  { level: 27, word: 'VALISE', indice: 'Sac rigide pour transporter ses vêtements' },
  { level: 28, word: 'LUNETTES', indice: 'Accessoire pour mieux voir' },
  { level: 29, word: 'MONTRE', indice: 'Petit objet pour lire l’heure au poignet' },
  { level: 30, word: 'BOUGIE', indice: 'Cire qui brûle pour éclairer' },
  { level: 31, word: 'REVEIL', indice: 'Horloge qui sonne le matin' },
  { level: 32, word: 'CANAPE', indice: 'Siège confortable pour plusieurs personnes' },
  { level: 33, word: 'CADEAU', indice: 'Objet offert pour faire plaisir' },
  { level: 34, word: 'BALAI', indice: 'Outil pour nettoyer le sol' },
  { level: 35, word: 'SAVON', indice: 'Produit utilisé pour se laver' },
  { level: 36, word: 'LIT', indice: 'Meuble sur lequel on dort' },
  { level: 37, word: 'CLEF', indice: 'Petit métal pour ouvrir une serrure' },
  { level: 38, word: 'LIVRE', indice: 'Ensemble de pages qui racontent une histoire' },
  { level: 39, word: 'TELEPHONE', indice: 'Appareil pour appeler ses proches' },
  { level: 40, word: 'ORDINATEUR', indice: 'Machine pour naviguer sur internet' },

  // --- NOURRITURE (41-60) ---
  { level: 41, word: 'POMME', indice: 'Fruit rouge ou vert très croquant' },
  { level: 42, word: 'PAIN', indice: 'Aliment de base fait avec de la farine' },
  { level: 43, word: 'CHOCOLAT', indice: 'Douceur sucrée à base de cacao' },
  { level: 44, word: 'FROMAGE', indice: 'Produit laitier souvent mangé avec du pain' },
  { level: 45, word: 'BANANE', indice: 'Fruit jaune courbé' },
  { level: 46, word: 'GATEAU', indice: 'Dessert préparé pour un anniversaire' },
  { level: 47, word: 'PIZZA', indice: 'Spécialité italienne avec de la tomate' },
  { level: 48, word: 'ORANGE', indice: 'Fruit riche en vitamine C' },
  { level: 49, word: 'RIZ', indice: 'Graine blanche très consommée en Asie' },
  { level: 50, word: 'VIANDE', indice: 'Aliment provenant des animaux' },
  { level: 51, word: 'POULET', indice: 'Volaille très commune en cuisine' },
  { level: 52, word: 'SALADE', indice: 'Plat de feuilles vertes croquantes' },
  { level: 53, word: 'FRITES', indice: 'Bâtonnets de pomme de terre frits' },
  { level: 54, word: 'SOUPE', indice: 'Plat liquide à base de légumes' },
  { level: 55, word: 'LAIT', indice: 'Boisson blanche produite par la vache' },
  { level: 56, word: 'MIEL', indice: 'Substance sucrée faite par les abeilles' },
  { level: 57, word: 'SUCRE', indice: 'Poudre blanche qui donne un goût doux' },
  { level: 58, word: 'FARINE', indice: 'Poudre issue du blé pour faire des gâteaux' },
  { level: 59, word: 'CAFE', indice: 'Boisson noire pour se réveiller' },
  { level: 60, word: 'THE', indice: 'Infusion de feuilles dans de l’eau chaude' },

  // --- TRANSPORTS & VILLE (61-80) ---
  { level: 61, word: 'AVION', indice: 'Moyen de transport pour voyager dans les airs' },
  { level: 62, word: 'VOITURE', indice: 'Véhicule à quatre roues pour la route' },
  { level: 63, word: 'VELO', indice: 'Véhicule à deux roues sans moteur' },
  { level: 64, word: 'BATEAU', indice: 'Moyen de transport pour naviguer' },
  { level: 65, word: 'TRAIN', indice: 'Véhicule qui roule sur des rails' },
  { level: 66, word: 'CAMION', indice: 'Gros véhicule pour transporter des marchandises' },
  { level: 67, word: 'METRO', indice: 'Train souterrain dans les grandes villes' },
  { level: 68, word: 'ECOLE', indice: 'Lieu où les enfants apprennent' },
  { level: 69, word: 'HOPITAL', indice: 'Lieu où l’on soigne les malades' },
  { level: 70, word: 'MARCHE', indice: 'Lieu public pour acheter des fruits et légumes' },
  { level: 71, word: 'BANQUE', indice: 'Endroit où l’on garde son argent' },
  { level: 72, word: 'PARC', indice: 'Espace vert public pour se promener' },
  { level: 73, word: 'STADE', indice: 'Lieu pour regarder des matchs de sport' },
  { level: 74, word: 'MUSEE', indice: 'Lieu où l’on expose des œuvres d’art' },
  { level: 75, word: 'ROUTE', indice: 'Voie goudronnée pour les voitures' },
  { level: 76, word: 'PONT', indice: 'Construction pour traverser une rivière' },
  { level: 77, word: 'CINEMA', indice: 'Lieu pour regarder des films sur grand écran' },
  { level: 78, word: 'MAIRIE', indice: 'Bâtiment administratif d’une ville' },
  { level: 79, word: 'EGLISE', indice: 'Lieu de culte pour les chrétiens' },
  { level: 80, word: 'PLAGE', indice: 'Bord de mer couvert de sable' },

  // --- DIVERS & ABSTRAIT (81-100) ---
  { level: 81, word: 'MUSIQUE', indice: 'Suite de sons mélodieux' },
  { level: 82, word: 'AMITIE', indice: 'Sentiment fort entre deux amis' },
  { level: 83, word: 'BONHEUR', indice: 'État de satisfaction et de joie' },
  { level: 84, word: 'TRAVAIL', indice: 'Activité faite pour gagner sa vie' },
  { level: 85, word: 'FAMILLE', indice: 'Ensemble des parents et enfants' },
  { level: 86, word: 'VOYAGE', indice: 'Action de partir loin de chez soi' },
  { level: 87, word: 'SANTE', indice: 'État de bon fonctionnement du corps' },
  { level: 88, word: 'SOURIRE', indice: 'Expression de joie sur le visage' },
  { level: 89, word: 'HISTOIRE', indice: 'Récit de faits passés' },
  { level: 90, word: 'LIBERTE', indice: 'Pouvoir agir sans contraintes' },
  { level: 91, word: 'ARGENT', indice: 'Moyen utilisé pour acheter des choses' },
  { level: 92, word: 'SPORT', indice: 'Activité physique pratiquée par plaisir' },
  { level: 93, word: 'SOMMEIL', indice: 'État de repos quand on dort' },
  { level: 94, word: 'LUMIERE', indice: 'Ce qui permet de voir les objets' },
  { level: 95, word: 'SILENCE', indice: 'Absence totale de bruit' },
  { level: 96, word: 'TEMPS', indice: 'Ce qui passe et ne revient jamais' },
  { level: 97, word: 'MONDE', indice: 'La Terre et tous ses habitants' },
  { level: 98, word: 'CADEAU', indice: 'Quelque chose que l’on offre' },
  { level: 99, word: 'PENSEE', indice: 'Activité de l’esprit' },
  { level: 100, word: 'VICTOIRE', indice: 'Fait de gagner une compétition' }
];

     
    if(localStorage.getItem('player')){
        let i;
          player = JSON.parse(localStorage.getItem('player'));
         
              generetelife(5);    
          checkword = listword[player.level].word;
     console.log(checkword[0]);

          for(i=0;i<=checkword.length-1;i++){
            //genereteletter(checkword[i],i);
            genereteletter(' ',i);
          }
        generetedescription(listword[player.level].indice);
        generatekeyborad(checkword);

    }else{
        let player = {
            level:1
        }
        localStorage.setItem('player',JSON.stringify(player));
        game();
    }







}

function generatekeyborad(word){
    let i;
    let content = document.getElementById('keyboard');
    const keyboard= document.createElement('div');
    const letters=['A','B','C','D','E',
                    'F','G','H','I','J',
                    'K','L','M','N','O',
                    'P','Q','R','S','T',
                    'U','V','W','X','Y',
                    'Z'];
    for(i=0;i<=25;i++){
    
        const div=  document.createElement('div');
       const  check = letters[i];
        
        div.addEventListener('click' ,function(){
            console.log(check);
            const test = verifieletter(check,word);
             if(nombreessaie == 0){
                       boite.style.display = 'block';
                       cont.classList.add('cache');
                }
            if(test){
                  if(endgame(word)){
                     boite2.style.display = 'block';
                       cont.classList.add('cache');
                  };
            }else{
                 if(nombreessaie-1 == 0){
                       boite.style.display = 'block';
                       cont.classList.add('cache');
                }else{
                    nombreessaie--;
                 generetelife( nombreessaie);

                }

                 
                }
               
            }
        );
        div.innerText=letters[i];
        div.classList = 'letter';
        keyboard.appendChild(div);
    }
    keyboard.classList = "keyboard2";
    content.appendChild(keyboard);

};

function genereteletter(letter,i){
      const game= document.getElementById('game');
      const contentletter = document.createElement('div');
      const barredeco = document.createElement('div');
      const charletter = document.createElement('div');
      charletter.innerText= letter;
      charletter.id = `letter${i}`;
      barredeco.classList ='baredeco';
      contentletter.appendChild(charletter);
      contentletter.append(barredeco);
       game.appendChild(contentletter);
}

function verifieletter(letter,word){
    let i ;
    
    for(i=0;i<=word.length-1;i++){
        console.log(word[i]);
        console.log(letter);
        if(letter == word[i]){
            
            const charletter = document.getElementById(`letter${i}`);
            if(charletter.innerText == ''){

           
           charletter.innerText = letter;
            console.log(charletter);
            return true;
             }
        }
    }
    return false ;

}


 function generetedescription(description){
    const descript = document.getElementById('description');
    const div = document.createElement('div');
    div.innerText = description;
    div.classList = "contenuedescription";
    descript.appendChild(div);
 }

function endgame(word){
     let i ;
    
    for(i=0;i<=word.length-1;i++){
         const charletter = document.getElementById(`letter${i}`);
        
        if(charletter.innerText != word[i]){
            
           
            return false;
        }
    }
    
     player = JSON.parse(localStorage.getItem('player'));
     player.level += 1;
     localStorage.setItem('player',JSON.stringify(player));
     return true;

}

function generetelife(nomberlife){
    let i;
    const container = document.getElementById('lifebar');
    container.innerHTML='';
    for(i=1;i<=5;i++){
        const div =document.createElement('div');
        if(i<=nomberlife){
               div.classList ='life red';
        }else{
                  div.classList ='life';
        }
        container.appendChild(div)
      

    }
    
}





game();
