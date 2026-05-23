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
  { level: 100, word: 'VICTOIRE', indice: 'Fait de gagner une compétition' },
  // --- ÉNIGMES & MYSTÈRES (101-120) ---
  { level: 101, word: 'OMBRE', indice: 'Elle vous suit partout mais s’efface dans le noir' },
  { level: 102, word: 'SECRET', indice: 'Plus on est nombreux à le posséder, moins il existe' },
  { level: 103, word: 'ECHO', indice: 'Il parle toutes les langues sans jamais avoir appris' },
  { level: 104, word: 'FEU', indice: 'Il a toujours faim, mais meurt si on lui donne à boire' },
  { level: 105, word: 'VENT', indice: 'On peut l’entendre et le ressentir, mais jamais le toucher' },
  { level: 106, word: 'FUMEE', indice: 'Elle s’élève sans jambes et disparaît sans laisser de trace' },
  { level: 107, word: 'GLACE', indice: 'Solide sous le froid, elle s’effondre face à la chaleur' },
  { level: 108, word: 'REVE', indice: 'Une aventure vécue les yeux totalement fermés' },
  { level: 109, word: 'BROUILLARD', indice: 'Il cache le paysage sans jamais bouger les objets' },
  { level: 110, word: 'ILLUSION', indice: 'Ce que vos yeux croient voir, mais que l’esprit sait faux' },
  { level: 111, word: 'CHANCE', indice: 'Elle va et vient sans que personne ne puisse la contrôler' },
  { level: 112, word: 'AVENIR', indice: 'Tout le monde s’y dirige, mais personne ne l’a encore vu' },
  { level: 113, word: 'PASSE', indice: 'Un endroit où l’on peut regarder, mais où l’on ne peut plus aller' },
  { level: 114, word: 'DESTIN', indice: 'Une route que l’on trace tout en ayant l’impression de la suivre' },
  { level: 115, word: 'MENSONGE', indice: 'Il grandit à chaque fois qu’on essaie de le cacher' },
  { level: 116, word: 'VERITE', indice: 'Elle peut blesser sur le coup, mais elle libère à la fin' },
  { level: 117, word: 'OUBLI', indice: 'Le grand effaceur du temps qui s’installe dans la mémoire' },
  { level: 118, word: 'SOUVENIR', indice: 'Une image du passé qui refuse de s’effacer' },
  { level: 119, word: 'ECHEC', indice: 'Ce n’est pas la fin, juste une leçon pour la prochaine fois' },
  { level: 120, word: 'COURAGE', indice: 'Ce qui permet d’avancer malgré la présence de la peur' },

  // --- CONCEPTS VAGUES (121-140) ---
  { level: 121, word: 'ESPACE', indice: 'Un vide immense qui sépare tout ce qui existe' },
  { level: 122, word: 'FORCE', indice: 'Une énergie invisible qui pousse, tire ou maintient' },
  { level: 123, word: 'VITESSE', indice: 'Le rapport entre la distance parcourue et les secondes écoulées' },
  { level: 124, word: 'GRAVITE', indice: 'La force invisible qui nous retient les pieds sur terre' },
  { level: 125, word: 'INFINI', indice: 'Un chemin ou un nombre qui n’aura jamais de fin' },
  { level: 126, word: 'EQUILIBRE', indice: 'Le point parfait où rien ne penche ni ne tombe' },
  { level: 127, word: 'SAGESSE', indice: 'L’art de prendre les bonnes décisions avec l’expérience' },
  { level: 128, word: 'PATIENCE', indice: 'La capacité d’attendre sans s’énerver' },
  { level: 129, word: 'COLERE', indice: 'Une tempête intérieure qui obscurcit le jugement' },
  { level: 130, word: 'PEUR', indice: 'Une alerte de l’esprit face à un danger réel ou imaginaire' },
  { level: 131, word: 'JOIE', indice: 'Une sensation de légèreté qui illumine le visage' },
  { level: 132, word: 'TRISTESSE', indice: 'Un poids lourd sur le cœur qui s’exprime parfois en larmes' },
  { level: 133, word: 'ENNUI', indice: 'Le sentiment que le temps s’est figé et que rien ne se passe' },
  { level: 134, word: 'ENERGIE', indice: 'Ce qui permet d’agir, de bouger et de faire fonctionner les choses' },
  { level: 135, word: 'RYTHME', indice: 'Une répétition régulière de sons ou de mouvements dans le temps' },
  { level: 136, word: 'HARMONIE', indice: 'Un mélange parfait d’éléments différents qui s’entendent bien' },
  { level: 137, word: 'CHAOS', indice: 'Un désordre total où plus aucune règle ne s’applique' },
  { level: 138, word: 'ORDRE', indice: 'Chaque chose est à sa place selon un plan précis' },
  { level: 139, word: 'LOGIQUE', indice: 'Le cheminement de l’esprit qui semble le plus évident et correct' },
  { level: 140, word: 'HASARD', indice: 'L’explication que l’on donne quand on ne trouve pas de cause' },

  // --- ÉLÉMENTS INDÉFINIS (141-160) ---
  { level: 141, word: 'ORIGINE', indice: 'Le point exact où tout a commencé' },
  { level: 142, word: 'LIMITE', indice: 'La ligne imaginaire qu’il ne faut pas dépasser' },
  { level: 143, word: 'PROGRES', indice: 'Le fait de s’améliorer ou d’avancer vers le mieux' },
  { level: 144, word: 'CREATION', indice: 'L’action de donner vie à quelque chose qui n’existait pas' },
  { level: 145, word: 'DESTRUCTION', indice: 'L’action de réduire à néant une structure établie' },
  { level: 146, word: 'CHANGEMENT', indice: 'La seule constante de l’univers, rien ne reste identique' },
  { level: 147, word: 'EVOLUTION', indice: 'Une transformation lente au fil des générations' },
  { level: 148, word: 'CYCLE', indice: 'Un mouvement qui revient toujours à son point de départ' },
  { level: 149, word: 'SYSTEME', indice: 'Un ensemble de règles ou d’éléments qui marchent ensemble' },
  { level: 150, word: 'STRUCTURE', indice: 'L’armature ou le squelette qui maintient un ensemble' },
  { level: 151, word: 'MATIERE', indice: 'Tout ce qui a une masse et occupe de l’espace autour de nous' },
  { level: 152, word: 'FORME', indice: 'L’apparence visuelle extérieure d’un objet ou d’une figure' },
  { level: 153, word: 'COULEUR', indice: 'La perception de la lumière par nos yeux sur les surfaces' },
  { level: 154, word: 'TEXTURE', indice: 'La sensation que l’on ressent en touchant une surface' },
  { level: 155, word: 'DIMENSION', indice: 'Une mesure de l’espace (longueur, largeur ou hauteur)' },
  { level: 156, word: 'DISTANCE', indice: 'L’espace qui sépare deux points géographiques' },
  { level: 157, word: 'DIRECTION', indice: 'La ligne imaginaire vers laquelle on choisit de se déplacer' },
  { level: 158, word: 'POSITION', indice: 'L’endroit exact où se trouve un élément à un instant T' },
  { level: 159, word: 'MOUVEMENT', indice: 'Le fait de changer de place, le contraire de l’immobilité' },
  { level: 160, word: 'REPOS', indice: 'L’absence totale de mouvement ou d’effort physique' },

  // --- NATURE CACHÉE & ABSTRAITE (161-180) ---
  { level: 161, word: 'ATOME', indice: 'La brique invisible qui compose absolument tout l’univers' },
  { level: 162, word: 'CELLULE', indice: 'La plus petite unité vivante présente dans notre corps' },
  { level: 163, word: 'ESPRIT', indice: 'La partie invisible en nous qui pense, raisonne et ressent' },
  { level: 164, word: 'CONSCIENCE', indice: 'Le fait de savoir que l’on existe et de ressentir son environnement' },
  { level: 165, word: 'INSTINCT', indice: 'Une réaction automatique de survie dictée par la nature' },
  { level: 166, word: 'RAISON', indice: 'La capacité de réfléchir de manière logique et calme' },
  { level: 167, word: 'INTUITION', indice: 'Une certitude intérieure sans explication logique immédiate' },
  { level: 168, word: 'IMAGINATION', indice: 'La capacité de visualiser des choses qui n’existent pas réellement' },
  { level: 169, word: 'MEMOIRE', indice: 'La bibliothèque intérieure où sont stockés nos souvenirs' },
  { level: 170, word: 'INTELLIGENCE', indice: 'L’art de s’adapter et de résoudre des problèmes complexes' },
  { level: 171, word: 'TALENT', indice: 'Une facilité naturelle pour accomplir une activité précise' },
  { level: 172, word: 'GENIE', indice: 'Une forme d’intelligence ou de créativité hors du commun' },
  { level: 173, word: 'IDEE', indice: 'Une étincelle soudaine dans l’esprit qui déclenche une action' },
  { level: 174, word: 'PENSEE', indice: 'Le flux continu d’images et de mots dans notre tête' },
  { level: 175, word: 'CURIOSITE', indice: 'Le désir profond d’apprendre et de découvrir l’inconnu' },
  { level: 176, word: 'DOULEUR', indice: 'Un signal d’alarme du corps ou de l’esprit qui fait souffrir' },
  { level: 177, word: 'PLAISIR', indice: 'Une agréable sensation de satisfaction immédiate' },
  { level: 178, word: 'DESIR', indice: 'Une envie forte d’obtenir quelque chose que l’on n’a pas' },
  { level: 179, word: 'BESOIN', indice: 'Une nécessité absolue pour survivre ou fonctionner correctement' },
  { level: 180, word: 'VALEUR', indice: 'Une règle morale ou un principe auquel on est très attaché' },

  // --- FINAL MYSTIQUE & ULTIME (181-200) ---
  { level: 181, word: 'SYMBOLE', indice: 'Un dessin ou un signe qui représente une idée plus grande' },
  { level: 182, word: 'SIGNE', indice: 'Un indice ou une marque qui annonce un événement à venir' },
  { level: 183, word: 'MESSAGE', indice: 'Une information transmise d’un esprit à un autre' },
  { level: 184, word: 'LANGAGE', indice: 'L’outil universel inventé par les humains pour se comprendre' },
  { level: 185, word: 'VOIX', indice: 'Le son unique produit par les cordes vocales pour s’exprimer' },
  { level: 186, word: 'REGARD', indice: 'Une connexion silencieuse qui passe uniquement par les yeux' },
  { level: 187, word: 'ACTION', indice: 'Le fait de faire quelque chose, pour ne pas rester passif' },
  { level: 188, word: 'CHOIX', indice: 'La décision de prendre un chemin plutôt qu’un autre' },
  { level: 189, word: 'DANGER', indice: 'Une situation instable qui menace la sécurité' },
  { level: 190, word: 'RISQUE', indice: 'La probabilité de perdre quelque chose en tentant sa chance' },
  { level: 191, word: 'CHEF', indice: 'La personne désignée pour guider et diriger un groupe' },
  { level: 192, word: 'LOI', indice: 'Une règle écrite que tout le monde doit respecter en société' },
  { level: 193, word: 'JUSTICE', indice: 'Le principe moral d’équité et de respect des droits de chacun' },
  { level: 194, word: 'PAIX', indice: 'Un état de calme total où les conflits ont disparu' },
  { level: 195, word: 'GUERRE', indice: 'Un affrontement destructeur entre deux clans ou nations' },
  { level: 196, word: 'ALLIANCE', indice: 'Un pacte d’entraide signé entre deux ou plusieurs personnes' },
  { level: 197, word: 'SECRET', indice: 'Une information précieuse cachée aux yeux du grand public' },
  { level: 198, word: 'ENIGME', indice: 'Une question difficile posée pour tester votre réflexion' },
  { level: 199, word: 'MYSTERE', indice: 'Quelque chose de totalement inexplicable pour l’instant' },
  { level: 200, word: 'FIN', indice: 'Le point ultime de ce tableau, là où tout s’arrête' }
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
