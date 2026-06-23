 var nombreessaie ;
 /*let player = {
            level:49
        }
        localStorage.setItem('player',JSON.stringify(player));
        game();*/
 const boite = document.getElementById('boite');
  const boite2 = document.getElementById('boite2');
 const cont =document.getElementById('container');


 const GAME_VERSION = "2.0"; 
      if (localStorage.getItem('game_version') !== '2.0') {
    localStorage.removeItem('player'); 
    localStorage.setItem('game_version', '2.0'); 
     let player = {
            level:1
        }
        localStorage.setItem('player',JSON.stringify(player));
}








function game(){
     if (typeof updateTheme === "function") { updateTheme(); }
    if(localStorage.getItem('player')){
            const p = JSON.parse(localStorage.getItem('player'));
            document.getElementById('headerLevel').innerText = 'Niveau ' + p.level;
        }
     nombreessaie = 5;
    boite.style.display = 'none';
    boite2.style.display = 'none';
    cont.classList.remove('cache');
    cont.innerHTML=" <div class='description' id='description'></div> <div class='game' id='game'></div> <div class='lifebar' id='lifebar'></div><div class='keyboard' id='keyboard'></div>";
  const listword = [
  // ==========================================
  // THÈME 1 : MÉDIÉVAL & FANTAISIE (1-50)
  // ==========================================
  { level: 1, word: 'CHATEAU', indice: 'Forteresse de pierre protégeant le seigneur' },
  { level: 2, word: 'DRAGON', indice: 'Cracheur de feu gardant un lourd trésor' },
  { level: 3, word: 'EPEE', indice: 'Lame d’acier adoubant les chevaliers' },
  { level: 4, word: 'COURONNE', indice: 'Cercle d’or pesant lourd sur la tête du roi' },
  { level: 5, word: 'DONJON', indice: 'La tour la plus haute et la plus sûre' },
  { level: 6, word: 'GRIMOIRE', indice: 'Livre ancien renfermant de puissants sortilèges' },
  { level: 7, word: 'ARMURE', indice: 'Seconde peau de métal portée pour le combat' },
  { level: 8, word: 'ARCHER', indice: 'Soldat frappant de loin avec des plumes' },
  { level: 9, word: 'BOUCLIER', indice: 'Rempart de bois ou d’acier porté au bras' },
  { level: 10, word: 'TAVERNE', indice: 'Lieu de repos, de bière et de rumeurs' },
  { level: 11, word: 'SORCIER', indice: 'Maître des arcanes et des éléments' },
  { level: 12, word: 'BANQUET', indice: 'Festin majestueux à la cour du roi' },
  { level: 13, word: 'FORGERON', indice: 'Artisan domptant le feu et le fer' },
  { level: 14, word: 'CARROSSE', indice: 'Véhicule royal tiré par des chevaux' },
  { level: 15, word: 'TRESOR', indice: 'Richesse enfouie dans un coffre' },
  { level: 16, word: 'REMPART', indice: 'Muraille épaisse protégeant la cité' },
  { level: 17, word: 'FANTOME', indice: 'Âme errante hantant les vieux couloirs' },
  { level: 18, word: 'POTION', indice: 'Liquide magique bouillonnant dans un chaudron' },
  { level: 19, word: 'FLAMBEAU', indice: 'Torche éclairant les froides nuits de garde' },
  { level: 20, word: 'PARCHEMIN', indice: 'Peau animale servant de papier aux scribes' },
  { level: 21, word: 'GUILDE', indice: 'Confrérie secrète d’artisans ou de voleurs' },
  { level: 22, word: 'BASTION', indice: 'Ouvrage de défense impénétrable' },
  { level: 23, word: 'ALLIANCE', indice: 'Traité de paix signé entre deux royaumes' },
  { level: 24, word: 'TRAHISON', indice: 'Coup de poignard dans le dos d’un souverain' },
  { level: 25, word: 'ALCHIMIE', indice: 'Art occulte cherchant à créer de l’or' },
  { level: 26, word: 'CHEVALIER', indice: 'Noble combattant au code d’honneur strict' },
  { level: 27, word: 'CROISADE', indice: 'Longue expédition militaire et religieuse' },
  { level: 28, word: 'SEIGNEUR', indice: 'Maître absolu des terres et des paysans' },
  { level: 29, word: 'PAYSAN', indice: 'Travailleur de la terre nourrissant le peuple' },
  { level: 30, word: 'TOURNOI', indice: 'Compétition festive où les lances se brisent' },
  { level: 31, word: 'LEGENDE', indice: 'Histoire épique racontée par les anciens' },
  { level: 32, word: 'BARDE', indice: 'Musicien chantant les exploits des héros' },
  { level: 33, word: 'RUINES', indice: 'Vestiges de pierre d’un empire effondré' },
  { level: 34, word: 'RELIQUE', indice: 'Objet sacré aux pouvoirs mystiques' },
  { level: 35, word: 'GOBLIN', indice: 'Petite créature malicieuse des grottes' },
  { level: 36, word: 'ORACLE', indice: 'Voyant lisant l’avenir du royaume' },
  { level: 37, word: 'PONT', indice: 'Passage de pierre abaissé au-dessus des douves' },
  { level: 38, word: 'DOUVES', indice: 'Fossé rempli d’eau entourant le château' },
  { level: 39, word: 'POTENCE', indice: 'Structure de bois pour la justice finale' },
  { level: 40, word: 'BOURREAU', indice: 'Homme masqué appliquant la sentence royale' },
  { level: 41, word: 'MONASTERE', indice: 'Lieu de prière isolé dans les montagnes' },
  { level: 42, word: 'MOINE', indice: 'Religieux copiant les livres à la main' },
  { level: 43, word: 'FLECHE', indice: 'Projectile mortel guidé par des plumes' },
  { level: 44, word: 'HEAUME', indice: 'Casque de fer lourd cachant le visage' },
  { level: 45, word: 'TRIBUNAL', indice: 'Lieu sévère où le roi rend sa justice' },
  { level: 46, word: 'BATAILLE', indice: 'Choc violent et bruyant entre deux armées' },
  { level: 47, word: 'EMPIRE', indice: 'Vaste territoire sous une seule couronne' },
  { level: 48, word: 'EXCALIBUR', indice: 'Lame mythique figée dans la roche' },
  { level: 49, word: 'MYTHE', indice: 'Récit fabuleux traversant les âges' },
  { level: 50, word: 'EPOPEE', indice: 'Longue aventure héroïque digne d’un poème' },

  // ==========================================
  // THÈME 2 : JAPON & SAKURA (51-100)
  // ==========================================
  { level: 51, word: 'SAKURA', indice: 'Fleur rose annonçant le printemps japonais' },
  { level: 52, word: 'SAMOURAI', indice: 'Guerrier dévoué jusqu’à la mort' },
  { level: 53, word: 'KATANA', indice: 'Lame courbe au tranchant légendaire' },
  { level: 54, word: 'TEMPLE', indice: 'Sanctuaire de bois, de paix et de prière' },
  { level: 55, word: 'KABUKI', indice: 'Théâtre traditionnel aux visages peints' },
  { level: 56, word: 'KIMONO', indice: 'Vêtement de soie aux motifs délicats' },
  { level: 57, word: 'SHOGUN', indice: 'Chef militaire suprême de l’ancien Japon' },
  { level: 58, word: 'NINJA', indice: 'Ombre furtive experte en espionnage' },
  { level: 59, word: 'GEISHA', indice: 'Artiste maîtrisant les arts du raffinement' },
  { level: 60, word: 'BONSAI', indice: 'Arbre miniature cultivé avec une grande patience' },
  { level: 61, word: 'ORIGAMI', indice: 'Art poétique et minutieux du pliage de papier' },
  { level: 62, word: 'MATCHA', indice: 'Poudre de thé vert fouettée avec soin' },
  { level: 63, word: 'ZEN', indice: 'État d’esprit cherchant le vide et la paix' },
  { level: 64, word: 'YOKAI', indice: 'Esprit ou démon malicieux du folklore' },
  { level: 65, word: 'KITSUNE', indice: 'Renard mythique possédant plusieurs queues' },
  { level: 66, word: 'RYU', indice: 'Dragon aquatique des légendes asiatiques' },
  { level: 67, word: 'TORII', indice: 'Portail rouge marquant l’entrée du sacré' },
  { level: 68, word: 'FUJI', indice: 'Montagne sacrée au sommet souvent enneigé' },
  { level: 69, word: 'HAIKU', indice: 'Poème minimaliste en seulement trois lignes' },
  { level: 70, word: 'BAMBOU', indice: 'Plante verte qui plie sous le vent mais ne rompt pas' },
  { level: 71, word: 'SUSHI', indice: 'Mets délicat d’algue, de riz et de poisson cru' },
  { level: 72, word: 'SAKE', indice: 'Alcool de riz servi chaud ou glacé' },
  { level: 73, word: 'MATSURI', indice: 'Festival de rue joyeux illuminé de lampions' },
  { level: 74, word: 'LANTERNE', indice: 'Boule de papier rouge éclairant la nuit' },
  { level: 75, word: 'EMPEREUR', indice: 'Symbole céleste régnant sur l’archipel' },
  { level: 76, word: 'RONIN', indice: 'Guerrier sans maître errant sur les routes' },
  { level: 77, word: 'SHURIKEN', indice: 'Étoile d’acier mortelle lancée par les ombres' },
  { level: 78, word: 'KAMI', indice: 'Divinité omniprésente de la nature' },
  { level: 79, word: 'TATAMI', indice: 'Tapis de paille tressée recouvrant le sol' },
  { level: 80, word: 'FUTON', indice: 'Matelas traditionnel que l’on roule le matin' },
  { level: 81, word: 'JUDO', indice: 'La voie de la souplesse en art martial' },
  { level: 82, word: 'KARATE', indice: 'Combat à la main vide né sur l’île d’Okinawa' },
  { level: 83, word: 'YAKUZA', indice: 'Membre du crime organisé souvent tatoué' },
  { level: 84, word: 'MANGA', indice: 'Bande dessinée populaire lue de droite à gauche' },
  { level: 85, word: 'TSUNAMI', indice: 'Vague immense née de la terre qui tremble' },
  { level: 86, word: 'KANJI', indice: 'Idéogramme complexe tracé au pinceau' },
  { level: 87, word: 'GENKAN', indice: 'Vestibule intérieur où l’on quitte ses chaussures' },
  { level: 88, word: 'CHO', indice: 'Papillon en japonais, symbole de l’âme' },
  { level: 89, word: 'CERISIER', indice: 'L’arbre vénéré par tout un pays au printemps' },
  { level: 90, word: 'LOTUS', indice: 'Fleur pure et belle s’élevant de la vase' },
  { level: 91, word: 'OMBRE', indice: 'Ce que l’assassin utilise pour se dissimuler' },
  { level: 92, word: 'HONNEUR', indice: 'Code moral bien plus précieux que la vie elle-même' },
  { level: 93, word: 'HARAKIRI', indice: 'Acte ultime et douloureux pour laver une faute' },
  { level: 94, word: 'SOLEIL', indice: 'Astre rouge trônant sur le drapeau du pays' },
  { level: 95, word: 'MACAQUE', indice: 'Singe connu pour se baigner dans les sources d’eau chaude' },
  { level: 96, word: 'ONSEN', indice: 'Source thermale volcanique relaxante' },
  { level: 97, word: 'TAIKO', indice: 'Tambour géant dont le son résonne dans la poitrine' },
  { level: 98, word: 'YEN', indice: 'Monnaie circulant dans l’empire du soleil levant' },
  { level: 99, word: 'NENUPHAR', indice: 'Plante flottante des étangs tranquilles' },
  { level: 100, word: 'HARMONIE', indice: 'Équilibre parfait cherché entre l’homme et la nature' },

  // ==========================================
  // THÈME 3 : CYBERPUNK & LABO SCI-FI (101-150)
  // ==========================================
  { level: 101, word: 'NEON', indice: 'Gaz illuminant violemment les villes de la nuit' },
  { level: 102, word: 'CYBORG', indice: 'Humain amélioré par des pièces mécaniques' },
  { level: 103, word: 'HACKER', indice: 'Pirate invisible naviguant dans le code' },
  { level: 104, word: 'MATRICE', indice: 'Monde virtuel qui remplace la réalité' },
  { level: 105, word: 'HOLOGRAMME', indice: 'Image de lumière flottant dans l’air' },
  { level: 106, word: 'ANDROIDE', indice: 'Machine à l’apparence parfaitement humaine' },
  { level: 107, word: 'RESEAU', indice: 'Toile mondiale connectant chaque esprit' },
  { level: 108, word: 'VIRUS', indice: 'Programme malveillant détruisant les données' },
  { level: 109, word: 'DRONE', indice: 'Œil mécanique volant au-dessus des rues' },
  { level: 110, word: 'DYSTOPIE', indice: 'Société future où l’espoir a disparu' },
  { level: 111, word: 'SYNTHETIQUE', indice: 'Ce qui n’est plus naturel, fabriqué de toutes pièces' },
  { level: 112, word: 'NEURONE', indice: 'Cellule du cerveau souvent connectée aux puces' },
  { level: 113, word: 'PIXEL', indice: 'Le plus petit point lumineux d’un écran' },
  { level: 114, word: 'LASER', indice: 'Faisceau de lumière concentré et brûlant' },
  { level: 115, word: 'PLASMA', indice: 'État de la matière alimentant les armes du futur' },
  { level: 116, word: 'GALAXIE', indice: 'Immense spirale contenant des milliards d’étoiles' },
  { level: 117, word: 'ORBITE', indice: 'Chemin tracé par un satellite dans le vide' },
  { level: 118, word: 'CLONE', indice: 'Copie génétique exacte d’un individu' },
  { level: 119, word: 'PORTAIL', indice: 'Déchirure ouvrant sur une autre dimension' },
  { level: 120, word: 'METROPOLE', indice: 'Cité gigantesque de verre, de métal et de câbles' },
  { level: 121, word: 'SILICIUM', indice: 'Élément chimique à la base des puces informatiques' },
  { level: 122, word: 'ALGORITHME', indice: 'Suite de règles logiques dictant la machine' },
  { level: 123, word: 'CRYPTAGE', indice: 'Code secret rendant les données illisibles' },
  { level: 124, word: 'INTERFACE', indice: 'Pont de communication entre l’homme et l’écran' },
  { level: 125, word: 'AVATAR', indice: 'Apparence choisie pour exister dans le monde virtuel' },
  { level: 126, word: 'SATELLITE', indice: 'Objet tournant silencieusement autour de la terre' },
  { level: 127, word: 'IA', indice: 'Cerveau artificiel qui apprend par lui-même' },
  { level: 128, word: 'OXYGENE', indice: 'Gaz devenu précieux et achetable dans les villes polluées' },
  { level: 129, word: 'MUTATION', indice: 'Altération de l’ADN créant un nouvel être' },
  { level: 130, word: 'VORTEX', indice: 'Tourbillon temporel absorbant tout sur son passage' },
  { level: 131, word: 'NEBULEUSE', indice: 'Nuage spatial de gaz et de poussière stellaire' },
  { level: 132, word: 'QUANTIQUE', indice: 'Physique de l’infiniment petit et des probabilités' },
  { level: 133, word: 'CODE', indice: 'Langage invisible bâtissant les logiciels' },
  { level: 134, word: 'ARCHIVE', indice: 'Mémoire numérique contenant le passé de l’humanité' },
  { level: 135, word: 'PAREFEU', indice: 'Muraille numérique repoussant les intrus' },
  { level: 136, word: 'CHROME', indice: 'Métal brillant remplaçant souvent la chair faible' },
  { level: 137, word: 'IMPLANT', indice: 'Technologie insérée chirurgicalement sous la peau' },
  { level: 138, word: 'SYSTEME', indice: 'L’organisation informatique globale qui contrôle tout' },
  { level: 139, word: 'COUPURE', indice: 'Déconnexion brutale de la matrice' },
  { level: 140, word: 'REBOOT', indice: 'Redémarrage forcé quand la machine ne répond plus' },
  { level: 141, word: 'ENSEIGNE', indice: 'Panneau publicitaire lumineux attirant le chaland' },
  { level: 142, word: 'BIONIQUE', indice: 'Alliance parfaite de la biologie et de l’ingénierie' },
  { level: 143, word: 'NANOTECH', indice: 'Machine microscopique de la taille d’une molécule' },
  { level: 144, word: 'MECHA', indice: 'Robot de combat géant piloté de l’intérieur' },
  { level: 145, word: 'SERVEUR', indice: 'Armoire centrale stockant nos vies numériques' },
  { level: 146, word: 'BUG', indice: 'Faille ou insecte bloquant le programme' },
  { level: 147, word: 'UTOPIE', indice: 'Rêve inaccessible d’un monde parfait et technologique' },
  { level: 148, word: 'GRAVITE', indice: 'Force annulée et manipulée par les vaisseaux spatiaux' },
  { level: 149, word: 'HORIZON', indice: 'La ligne où la mégalopole rencontre le ciel noir' },
  { level: 150, word: 'FUTUR', indice: 'Le temps qui reste à écrire dans le code' },

  // ==========================================
  // THÈME 4 : MONDE DES BONBONS (151-200)
  // ==========================================
  { level: 151, word: 'BONBON', indice: 'Douceur colorée qui fond lentement sous la langue' },
  { level: 152, word: 'CHOCOLAT', indice: 'Or brun fondu utilisé pour le grand réconfort' },
  { level: 153, word: 'CARAMEL', indice: 'Sucre cuit à la poêle jusqu’à la couleur dorée' },
  { level: 154, word: 'SUCETTE', indice: 'Boule sucrée et brillante perchée sur un bâton' },
  { level: 155, word: 'NOUGAT', indice: 'Confiserie blanche collante aux éclats d’amandes' },
  { level: 156, word: 'GLACE', indice: 'Dessert gelé et onctueux qui coule au soleil' },
  { level: 157, word: 'GUIMAUVE', indice: 'Nuage moelleux rose ou blanc à faire fondre au feu' },
  { level: 158, word: 'REGLISSE', indice: 'Lacet noir au goût très fort et divisant' },
  { level: 159, word: 'FRAISE', indice: 'Fruit rouge star des confiseries artificielles' },
  { level: 160, word: 'SUCRE', indice: 'Poudre cristalline blanche et très addictive' },
  { level: 161, word: 'MACARON', indice: 'Petit biscuit rond, lisse et coloré à la française' },
  { level: 162, word: 'MIEL', indice: 'Nectar épais et doré volé au travail des abeilles' },
  { level: 163, word: 'VANILLE', indice: 'Gousse noire parfumant délicatement les gâteaux' },
  { level: 164, word: 'BISCUIT', indice: 'Pâte cuite et croquante, idéale à tremper' },
  { level: 165, word: 'GATEAU', indice: 'Pâtisserie festive recouverte de bougies' },
  { level: 166, word: 'SIROP', indice: 'Liquide épais et très concentré en fruits et sucre' },
  { level: 167, word: 'CREPE', indice: 'Disque de pâte très fin et doré à la poêle' },
  { level: 168, word: 'CHURROS', indice: 'Beignet allongé et strié roulé dans le sucre' },
  { level: 169, word: 'PRALINE', indice: 'Amande croquante enrobée de sucre caramélisé rose' },
  { level: 170, word: 'TRUFFE', indice: 'Petite boule fondante roulée dans le cacao amer' },
  { level: 171, word: 'CONFITURE', indice: 'Fruits longuement cuits à tartiner le matin' },
  { level: 172, word: 'GAUFRE', indice: 'Pâte cuite entre deux fers laissant un motif quadrillé' },
  { level: 173, word: 'DRAGEE', indice: 'Bonbon lisse et pastel souvent offert aux mariages' },
  { level: 174, word: 'SORBET', indice: 'Glace sans lait, rafraîchissante et riche en fruits' },
  { level: 175, word: 'FONDANT', indice: 'Gâteau au cœur coulant, chaud et chocolaté' },
  { level: 176, word: 'BRIOCHE', indice: 'Pain très moelleux, gonflé et enrichi de beurre' },
  { level: 177, word: 'PATISSIER', indice: 'L’artisan créateur de toutes ces délices sucrées' },
  { level: 178, word: 'CANNELLE', indice: 'Épice brune en poudre ou en écorce roulée' },
  { level: 179, word: 'POMME', indice: 'Fruit rond souvent trempé dans du caramel rouge' },
  { level: 180, word: 'REVE', indice: 'Ce que l’on fait après un repas beaucoup trop sucré' },
  { level: 181, word: 'MAGIE', indice: 'L’ingrédient secret de tous les contes de fées' },
  { level: 182, word: 'FEE', indice: 'Petite créature volante, brillante et bienveillante' },
  { level: 183, word: 'LICORNE', indice: 'Cheval mythique portant une corne étoilée au front' },
  { level: 184, word: 'ARCENCIEL', indice: 'Pont très coloré apparaissant après une pluie d’été' },
  { level: 185, word: 'NUAGE', indice: 'Forme cotonneuse dans le ciel rappelant la barbe à papa' },
  { level: 186, word: 'PRINCESSE', indice: 'Héroïne royale vêtue de rose dans les histoires douces' },
  { level: 187, word: 'PALAIS', indice: 'Grande demeure majestueuse parfois faite de pain d’épices' },
  { level: 188, word: 'CACAO', indice: 'Fève amère broyée devenue le roi des desserts' },
  { level: 189, word: 'BEURRE', indice: 'Carré jaune gras et doux indispensable au pâtissier' },
  { level: 190, word: 'LAIT', indice: 'Boisson blanche adoucissant la force du chocolat' },
  { level: 191, word: 'MERINGUE', indice: 'Blanc d’œuf battu avec du sucre devenu croquant' },
  { level: 192, word: 'CERISE', indice: 'Petit fruit rouge posé en trophée en haut du gâteau' },
  { level: 193, word: 'MENTHE', indice: 'Feuille très fraîche souvent mariée au cacao' },
  { level: 194, word: 'AMANDE', indice: 'Fruit à coque ovale et au goût légèrement laiteux' },
  { level: 195, word: 'PARFUM', indice: 'Odeur enivrante sortant du four encore chaud' },
  { level: 196, word: 'CHAUDRON', indice: 'Grosse cuve où bouillent les potions sucrées' },
  { level: 197, word: 'DESSERT', indice: 'La meilleure partie de n’importe quel repas' },
  { level: 198, word: 'GOURMAND', indice: 'Celui qui ne peut s’arrêter de manger du sucre' },
  { level: 199, word: 'FETE', indice: 'Événement bruyant où les bonbons pleuvent du ciel' },
  { level: 200, word: 'SOURIRE', indice: 'Le résultat final après une très bonne bouchée' },

  // ==========================================
  // THÈME 5 : OCÉAN & ABYSSES (201-250)
  // ==========================================
  { level: 201, word: 'OCEAN', indice: 'Étendue d’eau bleue, salée et presque infinie' },
  { level: 202, word: 'ABYSSES', indice: 'Profondeurs noires, glaciales et inexplorées' },
  { level: 203, word: 'REQUIN', indice: 'Prédateur antique à l’aileron redouté par les nageurs' },
  { level: 204, word: 'BALEINE', indice: 'Le plus grand mammifère chantant sous l’eau' },
  { level: 205, word: 'DAUPHIN', indice: 'Sauteur marin très intelligent et joueur' },
  { level: 206, word: 'CORAIL', indice: 'Récif dur et coloré abritant la vie sous-marine' },
  { level: 207, word: 'ALGUE', indice: 'Plante verte ou brune ondulant au gré des courants' },
  { level: 208, word: 'MEDUSE', indice: 'Parapluie gélatineux, transparent et souvent piquant' },
  { level: 209, word: 'POULPE', indice: 'Créature très intelligente possédant huit bras' },
  { level: 210, word: 'CRABE', indice: 'Marcheur latéral carapacé muni de fortes pinces' },
  { level: 211, word: 'COQUILLAGE', indice: 'Maison de nacre vide ramassée sur le sable' },
  { level: 212, word: 'SABLE', indice: 'Poussière de roche dorée qui glisse sous les pieds' },
  { level: 213, word: 'VAGUE', indice: 'Onde d’écume s’écrasant bruyamment sur la côte' },
  { level: 214, word: 'MAREE', indice: 'Mouvement de va-et-vient, la respiration de l’océan' },
  { level: 215, word: 'COURANT', indice: 'Rivière puissante et invisible sous la surface' },
  { level: 216, word: 'TENTACULE', indice: 'Bras souple armé de multiples ventouses' },
  { level: 217, word: 'SIRENE', indice: 'Créature mythique mi-femme mi-poisson au chant mortel' },
  { level: 218, word: 'PIRATE', indice: 'Voleur des mers naviguant sous pavillon noir' },
  { level: 219, word: 'NAVIRE', indice: 'Bâtiment de bois ou d’acier bravant les flots' },
  { level: 220, word: 'TRESOR', indice: 'Coffre rouillé rempli d’or et englouti au fond' },
  { level: 221, word: 'ANCRE', indice: 'Lourd poids de fer jeté pour fixer le bateau' },
  { level: 222, word: 'BOUSSOLE', indice: 'Aiguille aimantée cherchant toujours le nord' },
  { level: 223, word: 'GOUVERNAIL', indice: 'Roue en bois dirigeant le destin du navire' },
  { level: 224, word: 'PHARE', indice: 'Tour de lumière guidant les marins dans la nuit' },
  { level: 225, word: 'ILE', indice: 'Terre solitaire cernée par les eaux de toutes parts' },
  { level: 226, word: 'PLONGEUR', indice: 'Explorateur humain respirant grâce à une bouteille' },
  { level: 227, word: 'SOUSMARIN', indice: 'Navire de fer voyageant sous la surface' },
  { level: 228, word: 'ATLANTIDE', indice: 'Cité légendaire prétendument engloutie par les flots' },
  { level: 229, word: 'PERLE', indice: 'Trésor blanc et rond caché dans une huître' },
  { level: 230, word: 'HUITRE', indice: 'Mollusque rugueux, gardien rocailleux de la perle' },
  { level: 231, word: 'HARPON', indice: 'Lance barbelée utilisée pour la grande pêche' },
  { level: 232, word: 'FILET', indice: 'Piège tressé ramassant les bancs de poissons' },
  { level: 233, word: 'BANQUISE', indice: 'Croûte de glace flottante sur l’océan polaire' },
  { level: 234, word: 'ICEBERG', indice: 'Montagne de glace cachant son véritable volume' },
  { level: 235, word: 'SEL', indice: 'Ce qui pique les yeux et parfume l’air de la mer' },
  { level: 236, word: 'ECUME', indice: 'Mousse blanche et légère sur la crête des vagues' },
  { level: 237, word: 'TEMPETE', indice: 'Colère du ciel déchaînant l’eau et le vent' },
  { level: 238, word: 'NAUFRAGE', indice: 'Triste fin d’un navire brisé contre les récifs' },
  { level: 239, word: 'EPAVE', indice: 'Squelette de bateau reposant pour toujours au fond' },
  { level: 240, word: 'ETOILE', indice: 'Animal marin immobile à cinq branches posé sur le fond' },
  { level: 241, word: 'MORSURE', indice: 'Le danger tranchant d’un requin trop curieux' },
  { level: 242, word: 'OXYGENE', indice: 'Le souffle vital qui manque cruellement dans les abysses' },
  { level: 243, word: 'BULLE', indice: 'Sphère d’air remontant lentement vers la surface' },
  { level: 244, word: 'NAGEOIRE', indice: 'Aile aquatique propulsant le poisson en avant' },
  { level: 245, word: 'ECAILLE', indice: 'Petite plaque formant l’armure brillante des poissons' },
  { level: 246, word: 'MURENE', indice: 'Serpent marin agressif caché dans les rochers' },
  { level: 247, word: 'HIPPOCAMPE', indice: 'Petit cheval miniature nageant debout' },
  { level: 248, word: 'CHARYBDE', indice: 'Gouffre mythologique réputé pour aspirer la mer' },
  { level: 249, word: 'MYSTERE', indice: 'Ce que cachent encore les grandes profondeurs' },
  { level: 250, word: 'HORIZON', indice: 'Ligne lointaine et droite où l’eau touche le ciel' },

  // ==========================================
  // THÈME 6 : RUE CRÉPUSCULE & BÉTON (251-300)
  // ==========================================
  { level: 251, word: 'RUE', indice: 'Voie goudronnée serpentant entre les habitations' },
  { level: 252, word: 'CREPUSCULE', indice: 'L’instant magique où le soleil embrase le ciel' },
  { level: 253, word: 'ASPHALTE', indice: 'Béton sombre encore tiède de la chaleur du jour' },
  { level: 254, word: 'REFLET', indice: 'Image inversée et tremblante dans une flaque d’eau' },
  { level: 255, word: 'FLAQUE', indice: 'Petit lac urbain éphémère laissé après la pluie' },
  { level: 256, word: 'PANNEAU', indice: 'Plaque métallique perchée indiquant les règles' },
  { level: 257, word: 'POUBELLE', indice: 'Réceptacle vert, bleu ou rouge dédié au tri sélectif' },
  { level: 258, word: 'MACHINE', indice: 'Appareil illuminé vendant des boissons fraîches' },
  { level: 259, word: 'POTEAU', indice: 'Pilier de béton gris portant les câbles électriques' },
  { level: 260, word: 'CABLE', indice: 'Fil noir traversant et rayant le ciel du soir' },
  { level: 261, word: 'VELO', indice: 'Deux-roues garé sagement et sans chaîne près d’un mur' },
  { level: 262, word: 'MUR', indice: 'Séparation verticale de pierre, de parpaing ou de lierre' },
  { level: 263, word: 'AFFICHE', indice: 'Papier municipal collé informant le quartier' },
  { level: 264, word: 'QUARTIER', indice: 'Petit microcosme de voisinage où tout le monde se croise' },
  { level: 265, word: 'CHAT', indice: 'Félin errant et silencieux sautant sur les toits' },
  { level: 266, word: 'TOIT', indice: 'Couverture des maisons parfois ornée de tuiles' },
  { level: 267, word: 'FENETRE', indice: 'Carré de lumière orange s’allumant dans la pénombre' },
  { level: 268, word: 'RIDEAU', indice: 'Tissu tiré cachant la vie intérieure des habitants' },
  { level: 269, word: 'OMBRE', indice: 'Silhouette sombre s’allongeant avec la chute du soleil' },
  { level: 270, word: 'LAMPADAIRE', indice: 'Veilleuse géante et électrique de la rue' },
  { level: 271, word: 'LUMIERE', indice: 'Ce qui s’allume automatiquement pour chasser les ténèbres' },
  { level: 272, word: 'NEON', indice: 'Lettre lumineuse d’enseigne grésillant doucement' },
  { level: 273, word: 'GARE', indice: 'Bâtiment lointain d’où partent les trains du soir' },
  { level: 274, word: 'TRAIN', indice: 'Serpent d’acier ramenant les travailleurs épuisés' },
  { level: 275, word: 'PASSAGE', indice: 'Lieu de traversée à niveau sonnant l’arrivée du convoi' },
  { level: 276, word: 'TROTTOIR', indice: 'Voie surélevée et sécurisée dédiée aux piétons' },
  { level: 277, word: 'PIETON', indice: 'Celui qui rentre chez lui à pied, le pas lourd' },
  { level: 278, word: 'RENTREE', indice: 'Le trajet du retour après l’école ou le travail' },
  { level: 279, word: 'SILENCE', indice: 'Bruit de fond paisible de la ville qui s’endort' },
  { level: 280, word: 'CIGALE', indice: 'Insecte dont le chant intense rythme les soirs d’été' },
  { level: 281, word: 'ETOILE', indice: 'Le tout premier point brillant perçant le ciel noir' },
  { level: 282, word: 'LUNE', indice: 'Astre pâle prenant le relais du soleil fatigué' },
  { level: 283, word: 'ROUILLE', indice: 'Traces orange laissées par le temps sur le métal' },
  { level: 284, word: 'PAPIER', indice: 'Petit déchet léger volant au gré du vent du soir' },
  { level: 285, word: 'BRUME', indice: 'Brouillard léger et froid tombant avec la nuit' },
  { level: 286, word: 'PARAPLUIE', indice: 'Toit portatif transparent ouvert en cas d’averse' },
  { level: 287, word: 'PLUIE', indice: 'Gouttes du ciel lavant la rue et créant les flaques' },
  { level: 288, word: 'BOUTIQUE', indice: 'Petit commerce de quartier aux rideaux baissés' },
  { level: 289, word: 'KONBINI', indice: 'Supérette éclairée et ouverte toute la nuit' },
  { level: 290, word: 'SOUVENIR', indice: 'Pensée lointaine provoquée par la beauté d’un coucher de soleil' },
  { level: 291, word: 'HORLOGE', indice: 'Cadran de rue rappelant aux passants qu’il se fait tard' },
  { level: 292, word: 'BOISSON', indice: 'Canette de thé chaud achetée au coin de la rue' },
  { level: 293, word: 'PORTAIL', indice: 'Petite barrière ou grille fermant l’accès d’une cour' },
  { level: 294, word: 'BALCON', indice: 'Espace suspendu aux fenêtres où sèche le linge' },
  { level: 295, word: 'LINGE', indice: 'Vêtements fraîchement lavés battant au vent du soir' },
  { level: 296, word: 'SOUPIR', indice: 'Respiration de soulagement poussée en fin de journée' },
  { level: 297, word: 'NOSTALGIE', indice: 'Sentiment doux et triste du temps qui file sans retour' },
  { level: 298, word: 'PAIX', indice: 'Calme apaisant ressenti dans une ruelle déserte' },
  { level: 299, word: 'DEMAIN', indice: 'Ce que promet silencieusement la fin du jour' },
  { level: 300, word: 'NUIT', indice: 'Le grand manteau noir et étoilé qui recouvre enfin la ville' },

  // ==========================================
  // THÈME 7 : MYTHOLOGIE & ANTIQUITÉ (301-350)
  // ==========================================
  { level: 301, word: 'OLYMPE', indice: 'Montagne sacrée où résident les anciens dieux' },
  { level: 302, word: 'ZEUS', indice: 'Maître suprême régnant par la foudre' },
  { level: 303, word: 'ATHENA', indice: 'Déesse de la stratégie guerrière et de la sagesse' },
  { level: 304, word: 'SPHINX', indice: 'Créature de pierre posant des énigmes mortelles' },
  { level: 305, word: 'PYRAMIDE', indice: 'Gigantesque tombeau triangulaire des pharaons' },
  { level: 306, word: 'PHARAON', indice: 'Roi-dieu régnant sur les terres d’Égypte' },
  { level: 307, word: 'MOMIE', indice: 'Corps d’un roi embaumé dans des bandelettes' },
  { level: 308, word: 'LABYRINTHE', indice: 'Dédale de couloirs impossible à fuir' },
  { level: 309, word: 'MINOTAURE', indice: 'Monstre effrayant à tête de taureau' },
  { level: 310, word: 'PEGASE', indice: 'Cheval ailé d’un blanc immaculé' },
  { level: 311, word: 'MEDUSE', indice: 'Femme dont le regard transforme en statue de pierre' },
  { level: 312, word: 'CENTAURE', indice: 'Créature hybride, mi-homme et mi-cheval' },
  { level: 313, word: 'CYCLOPE', indice: 'Géant brutal ne possédant qu’un seul œil' },
  { level: 314, word: 'ODYSSEE', indice: 'Voyage épique de dix ans sur les mers courroucées' },
  { level: 315, word: 'TEMPLE', indice: 'Lieu de culte soutenu par de lourdes colonnes' },
  { level: 316, word: 'HERCULE', indice: 'Héros à la force colossale ayant accompli douze travaux' },
  { level: 317, word: 'ENFER', indice: 'Le royaume souterrain des morts' },
  { level: 318, word: 'HADES', indice: 'Dieu sombre régnant sur le monde des enfers' },
  { level: 319, word: 'CERBERE', indice: 'Chien terrifiant à trois têtes gardant les morts' },
  { level: 320, word: 'STYX', indice: 'Le fleuve ténébreux qu’il faut traverser après la mort' },
  { level: 321, word: 'TRIDENT', indice: 'L’arme à trois pointes brandie par Poséidon' },
  { level: 322, word: 'NECTAR', indice: 'Boisson sucrée et dorée des divinités' },
  { level: 323, word: 'AMBROISIE', indice: 'Nourriture céleste rendant immortel' },
  { level: 324, word: 'ORACLE', indice: 'Prêtresse capable de lire l’avenir' },
  { level: 325, word: 'PANTHEON', indice: 'Temple grandiose dédié à tous les dieux' },
  { level: 326, word: 'GLADIATEUR', indice: 'Combattant armé sacrifiant sa vie pour la foule' },
  { level: 327, word: 'ARENE', indice: 'Cercle de sable où coulait le sang des combats' },
  { level: 328, word: 'CHAR', indice: 'Véhicule antique à deux roues tiré par des chevaux' },
  { level: 329, word: 'COLISEE', indice: 'Le plus grand amphithéâtre de l’empire romain' },
  { level: 330, word: 'EMPIRE', indice: 'Vaste territoire conquis par une seule nation' },
  { level: 331, word: 'LEGION', indice: 'Corps d’armée romain très discipliné' },
  { level: 332, word: 'SPARTIATE', indice: 'Guerrier grec élevé uniquement pour le combat' },
  { level: 333, word: 'TITAN', indice: 'Géant primordial régnant avant l’ère des dieux' },
  { level: 334, word: 'CHAOS', indice: 'Le grand vide obscur existant avant la création' },
  { level: 335, word: 'CHIMERE', indice: 'Monstre hybride crachant des flammes' },
  { level: 336, word: 'HYDRE', indice: 'Serpent dont les têtes repoussent lorsqu’on les coupe' },
  { level: 337, word: 'GRIFFON', indice: 'Créature royale mi-aigle et mi-lion' },
  { level: 338, word: 'HARPIE', indice: 'Femme-oiseau cruelle et voleuse de nourriture' },
  { level: 339, word: 'SIRENE', indice: 'Créature marine attirant les marins par son chant' },
  { level: 340, word: 'ODIN', indice: 'Le dieu borgne, père de la mythologie nordique' },
  { level: 341, word: 'THOR', indice: 'Dieu de la foudre armé d’un marteau lourd' },
  { level: 342, word: 'LOKI', indice: 'Dieu métamorphe de la ruse et de la malice' },
  { level: 343, word: 'VALKYRIE', indice: 'Guerrière ailée choisissant ceux qui meurent au combat' },
  { level: 344, word: 'VALHALLA', indice: 'Le paradis festif des guerriers nordiques tombés' },
  { level: 345, word: 'RUNES', indice: 'Anciennes lettres magiques gravées dans la pierre' },
  { level: 346, word: 'VIKING', indice: 'Explorateur et redoutable pillard venu du nord' },
  { level: 347, word: 'DRAKKAR', indice: 'Navire rapide à fond plat orné d’une tête de dragon' },
  { level: 348, word: 'MYTHOLOGIE', indice: 'L’ensemble de toutes ces croyances antiques' },
  { level: 349, word: 'CROYANCE', indice: 'La foi accordée à ces divinités d’un autre temps' },
  { level: 350, word: 'ANTIQUITE', indice: 'Période très lointaine de notre histoire humaine' },

  // ==========================================
  // THÈME 8 : ESPACE & UNIVERS (351-400)
  // ==========================================
  { level: 351, word: 'ASTEROIDE', indice: 'Gigantesque rocher errant dans le vide spatial' },
  { level: 352, word: 'COMETE', indice: 'Astre glacé filant à travers la nuit avec sa queue lumineuse' },
  { level: 353, word: 'METEORE', indice: 'Pierre céleste brûlant en entrant dans l’atmosphère' },
  { level: 354, word: 'PLANETE', indice: 'Gros corps céleste rond tournant autour d’une étoile' },
  { level: 355, word: 'SOLEIL', indice: 'La boule de feu vitale qui chauffe notre monde' },
  { level: 356, word: 'ETOILE', indice: 'Point de lumière scintillant au loin dans la galaxie' },
  { level: 357, word: 'CONSTELLATION', indice: 'Dessin imaginaire formé en reliant des étoiles' },
  { level: 358, word: 'GALAXIE', indice: 'Immense spirale regroupant des milliards de soleils' },
  { level: 359, word: 'UNIVERS', indice: 'L’ensemble absolument total de tout ce qui existe' },
  { level: 360, word: 'INFINI', indice: 'Ce qui n’a ni bord, ni fin, ni limite mesurable' },
  { level: 361, word: 'TROUNOIR', indice: 'Gouffre invisible avalant même la lumière' },
  { level: 362, word: 'NEBULEUSE', indice: 'Nuage spatial majestueux de gaz et de couleurs' },
  { level: 363, word: 'ORBITE', indice: 'Chemin circulaire invisible tracé autour d’un astre' },
  { level: 364, word: 'SATELLITE', indice: 'Objet ou machine tournant autour d’une planète' },
  { level: 365, word: 'LUNE', indice: 'Notre compagne de roche qui éclaire les nuits' },
  { level: 366, word: 'ECLIPSE', indice: 'Moment magique où l’ombre cache la lumière' },
  { level: 367, word: 'ASTRONAUTE', indice: 'Explorateur humain flottant dans sa combinaison' },
  { level: 368, word: 'FUSEE', indice: 'Grand cylindre crachant du feu pour quitter la gravité' },
  { level: 369, word: 'VAISSEAU', indice: 'Navire métallique conçu pour traverser le vide' },
  { level: 370, word: 'SOUCOUPE', indice: 'Forme classique attribuée aux véhicules extraterrestres' },
  { level: 371, word: 'EXTRATERRESTRE', indice: 'Toute forme de vie née loin de notre Terre' },
  { level: 372, word: 'ALIEN', indice: 'L’étranger inconnu venu d’une autre planète' },
  { level: 373, word: 'TELESCOPE', indice: 'Long tube à lentilles pour observer très loin' },
  { level: 374, word: 'OBSERVATOIRE', indice: 'Grand dôme terrestre ouvert pour scruter le ciel' },
  { level: 375, word: 'RADAR', indice: 'Outil envoyant des ondes pour repérer les objets' },
  { level: 376, word: 'GRAVITE', indice: 'La force invisible qui nous retient au sol' },
  { level: 377, word: 'APESANTEUR', indice: 'L’état libérateur où le corps flotte dans l’air' },
  { level: 378, word: 'VIDE', indice: 'L’absence totale d’air, de son et de matière' },
  { level: 379, word: 'OXYGENE', indice: 'Le gaz respirable stocké dans les bonbonnes' },
  { level: 380, word: 'COMBINAISON', indice: 'Tenue épaisse protégeant le corps du froid spatial' },
  { level: 381, word: 'CASQUE', indice: 'Bulle de verre protégeant la tête de l’astronaute' },
  { level: 382, word: 'PROPULSEUR', indice: 'Moteur surpuissant poussant le vaisseau' },
  { level: 383, word: 'ROVER', indice: 'Petit robot à six roues roulant sur Mars' },
  { level: 384, word: 'CRATERE', indice: 'Grand trou en forme de bol laissé par un impact' },
  { level: 385, word: 'POUSSIERE', indice: 'La couche fine et grise qui recouvre la surface lunaire' },
  { level: 386, word: 'RAYONNEMENT', indice: 'Énergie invisible, parfois dangereuse, émise par les étoiles' },
  { level: 387, word: 'ANNEAUX', indice: 'Cercles de roche et de glace entourant Saturne' },
  { level: 388, word: 'PLUTON', indice: 'La lointaine planète naine récemment déclassée' },
  { level: 389, word: 'MARS', indice: 'La planète rouge, notre plus proche voisine' },
  { level: 390, word: 'JUPITER', indice: 'La géante gazeuse barrée d’une grande tache rouge' },
  { level: 391, word: 'VENUS', indice: 'La planète brillante mais à la surface infernale' },
  { level: 392, word: 'TERRE', indice: 'Notre fragile point bleu pâle perdu dans la nuit' },
  { level: 393, word: 'SYSTEME', indice: 'Notre voisinage cosmique autour du soleil' },
  { level: 394, word: 'VOIE', indice: 'Le chemin lacté traversant notre ciel de nuit' },
  { level: 395, word: 'VOYAGE', indice: 'L’exploration courageuse au-delà de notre monde' },
  { level: 396, word: 'DISTANCE', indice: 'L’espace incommensurable mesuré en années-lumière' },
  { level: 397, word: 'TEMPS', indice: 'La dimension qui s’écoule différemment dans l’espace' },
  { level: 398, word: 'DIMENSION', indice: 'Une mesure de notre réalité, ou un univers parallèle' },
  { level: 399, word: 'COSMOS', indice: 'L’univers vu comme un système ordonné' },
  { level: 400, word: 'ETERNITE', indice: 'Une durée n’ayant absolument aucune fin' },

  // ==========================================
  // THÈME 9 : PIRATERIE & CARAÏBES (401-450)
  // ==========================================
  { level: 401, word: 'PIRATE', indice: 'Écumeur des mers sans foi, ni loi, ni patrie' },
  { level: 402, word: 'CORSAIRE', indice: 'Pillard engagé et protégé par les lettres d’un roi' },
  { level: 403, word: 'CAPITAINE', indice: 'Le seul maître à bord du navire après Dieu' },
  { level: 404, word: 'EQUIPAGE', indice: 'L’ensemble des hommes naviguant sur le bateau' },
  { level: 405, word: 'MATELOT', indice: 'Marin de base exécutant les ordres sur le pont' },
  { level: 406, word: 'MOUSSE', indice: 'Le plus jeune garçon à bord, souvent aux corvées' },
  { level: 407, word: 'NAVIRE', indice: 'Gros bateau de bois bravant les tempêtes' },
  { level: 408, word: 'GALEON', indice: 'Grand voilier espagnol souvent lourdement chargé d’or' },
  { level: 409, word: 'VOILE', indice: 'Immense toile blanche captant la force du vent' },
  { level: 410, word: 'MAT', indice: 'Le grand poteau vertical soutenant le gréement' },
  { level: 411, word: 'GOUVERNAIL', indice: 'Grande roue de bois dirigeant le destin du bateau' },
  { level: 412, word: 'BARRE', indice: 'L’autre nom donné au volant du navire' },
  { level: 413, word: 'ANCRE', indice: 'Lourd bloc de fer jeté à l’eau pour stopper la course' },
  { level: 414, word: 'CANON', indice: 'Lourd tube de bronze crachant du feu et du fer' },
  { level: 415, word: 'BOULET', indice: 'Sphère de fer pleine fracassant les coques' },
  { level: 416, word: 'POUDRE', indice: 'Poussière noire stockée en barils et très explosive' },
  { level: 417, word: 'SABRE', indice: 'Lame courbée et courte utilisée dans les mêlées' },
  { level: 418, word: 'PISTOLET', indice: 'Arme à feu courte tirant un seul coup avant la charge' },
  { level: 419, word: 'TRESOR', indice: 'Coffre rempli à ras bord de pièces et de bijoux' },
  { level: 420, word: 'DOUBLON', indice: 'Pièce d’or très convoitée par les flibustiers' },
  { level: 421, word: 'CARTE', indice: 'Vieux parchemin indiquant la position de l’île' },
  { level: 422, word: 'CROIX', indice: 'La fameuse marque rouge indiquant où il faut creuser' },
  { level: 423, word: 'ILE', indice: 'Terre isolée idéale pour y enterrer son butin' },
  { level: 424, word: 'PLAGE', indice: 'Bande de sable fin bordant l’eau claire' },
  { level: 425, word: 'PALMIER', indice: 'Arbre tropical courbé par le vent donnant des noix' },
  { level: 426, word: 'COCO', indice: 'Grosse noix velue remplie d’eau rafraîchissante' },
  { level: 427, word: 'PERROQUET', indice: 'Oiseau très coloré perché sur l’épaule du capitaine' },
  { level: 428, word: 'SINGE', indice: 'Petit animal agile et très chapardeur' },
  { level: 429, word: 'BOUSSOLE', indice: 'Instrument dans la paume indiquant toujours le nord' },
  { level: 430, word: 'LONGUEVUE', indice: 'Tube de laiton dépliant pour voir les voiles au loin' },
  { level: 431, word: 'PAVILLON', indice: 'Drapeau noir hissé pour semer la terreur' },
  { level: 432, word: 'CRANE', indice: 'L’os blanc dessiné au milieu du drapeau pirate' },
  { level: 433, word: 'TIBIA', indice: 'Les deux os croisés sous la tête de mort' },
  { level: 434, word: 'ABORDAGE', indice: 'L’action de sauter avec violence sur le navire ennemi' },
  { level: 435, word: 'BUTIN', indice: 'Les richesses amassées après une attaque réussie' },
  { level: 436, word: 'PARTAGE', indice: 'La division équitable de l’or sur le pont' },
  { level: 437, word: 'RHUM', indice: 'Alcool fort de canne à sucre bu dans les cales' },
  { level: 438, word: 'TAVERNE', indice: 'Auberge portuaire sombre et souvent très bruyante' },
  { level: 439, word: 'BAGARRE', indice: 'Affrontement à coups de poing éclatant au bar' },
  { level: 440, word: 'MUTINERIE', indice: 'Révolte violente de l’équipage contre son chef' },
  { level: 441, word: 'PLANCHE', indice: 'Bout de bois tendu au-dessus de l’eau pour les traîtres' },
  { level: 442, word: 'REQUIN', indice: 'La menace à aileron qui attend sous la planche' },
  { level: 443, word: 'KRAKEN', indice: 'Monstre mythique géant broyant les navires' },
  { level: 444, word: 'TEMPETE', indice: 'Ouragan dévastateur déchirant les voiles' },
  { level: 445, word: 'NAUFRAGE', indice: 'La destruction finale du bateau avalé par les flots' },
  { level: 446, word: 'RADEAU', indice: 'Bouts de bois ficelés à la hâte pour survivre' },
  { level: 447, word: 'SURVIVANT', indice: 'Le seul marin ayant échappé à la colère de la mer' },
  { level: 448, word: 'MER', indice: 'La grande étendue bleue où se jouent ces vies' },
  { level: 449, word: 'CARAIBES', indice: 'La mer d’eau chaude où se cachent les pilleurs' },
  { level: 450, word: 'LIBERTE', indice: 'La seule véritable loi qui compte pour un pirate' },

  // ==========================================
  // THÈME 10 : MAGIE NOIRE & HALLOWEEN (451-500)
  // ==========================================
  { level: 451, word: 'HALLOWEEN', indice: 'La nuit du 31 octobre où les morts s’invitent' },
  { level: 452, word: 'SORCIERE', indice: 'Vieille femme volant devant la lune avec son chat' },
  { level: 453, word: 'BALAI', indice: 'Outil de ménage en paille détourné pour voler' },
  { level: 454, word: 'CHATNOIR', indice: 'Le félin accusé à tort de porter malheur' },
  { level: 455, word: 'CHAUDRON', indice: 'Grosse marmite de fonte pour préparer les potions' },
  { level: 456, word: 'POTION', indice: 'Élixir magique de couleur étrange fumant doucement' },
  { level: 457, word: 'SORTILEGE', indice: 'Formule verbale jetant un charme puissant' },
  { level: 458, word: 'MALEDICTION', indice: 'Un sort très sombre qui condamne sur plusieurs années' },
  { level: 459, word: 'VAMPIRE', indice: 'Créature nocturne immortelle se nourrissant de sang' },
  { level: 460, word: 'SANG', indice: 'Le liquide vital rouge dont se repaissent les monstres' },
  { level: 461, word: 'CHAUVESOURIS', indice: 'L’animal volant la nuit qui dort la tête en bas' },
  { level: 462, word: 'CERCUEIL', indice: 'Boîte en bois capitonnée où dort le buveur de sang' },
  { level: 463, word: 'CROIX', indice: 'Le symbole sacré qui brûle les forces du mal' },
  { level: 464, word: 'AIL', indice: 'Gousse à l’odeur forte accrochée pour se protéger' },
  { level: 465, word: 'LOUPGAROU', indice: 'Homme maudit se transformant à la pleine lune' },
  { level: 466, word: 'LUNE', indice: 'L’astre blanc qui réveille la bête enfouie' },
  { level: 467, word: 'MORSURE', indice: 'La blessure fatale qui transmet la malédiction' },
  { level: 468, word: 'ZOMBIE', indice: 'Le mort-vivant qui marche lentement en gémissant' },
  { level: 469, word: 'CERVEAU', indice: 'L’organe de réflexion dont raffolent les zombies' },
  { level: 470, word: 'FANTOME', indice: 'Drap blanc volant ou esprit transparent traversant les murs' },
  { level: 471, word: 'ESPRIT', indice: 'L’âme invisible d’une personne qui refuse de partir' },
  { level: 472, word: 'POLTERGEIST', indice: 'Entité agressive qui fait trembler la vaisselle' },
  { level: 473, word: 'CIMETIERE', indice: 'Le jardin silencieux où reposent ceux qui sont partis' },
  { level: 474, word: 'TOMBE', indice: 'La lourde dalle de pierre marquant un nom' },
  { level: 475, word: 'SQUELETTE', indice: 'L’armature d’os nus qui claque des dents' },
  { level: 476, word: 'CRANE', indice: 'La tête osseuse aux orbites désespérément vides' },
  { level: 477, word: 'OS', indice: 'La matière dure et blanche qui reste à la fin' },
  { level: 478, word: 'ARAIGNEE', indice: 'Petite bête noire à huit pattes tissant des pièges' },
  { level: 479, word: 'TOILE', indice: 'Le réseau de fil de soie collant tendu dans les coins' },
  { level: 480, word: 'VENIN', indice: 'Le liquide empoisonné injecté par les crocs' },
  { level: 481, word: 'MONSTRE', indice: 'Toute créature anormale, difforme et terrifiante' },
  { level: 482, word: 'DEMON', indice: 'Une créature diabolique remontée des flammes' },
  { level: 483, word: 'ENFER', indice: 'Le royaume souterrain fait de lave et de souffrance' },
  { level: 484, word: 'CITROUILLE', indice: 'La grosse courge orange que l’on vide et sculpte' },
  { level: 485, word: 'BOUGIE', indice: 'Petite chandelle de cire éclairant le légume d’Halloween' },
  { level: 486, word: 'LANTERNE', indice: 'Petit éclairage de métal tremblotant dans la forêt' },
  { level: 487, word: 'MANOIR', indice: 'Immense et très vieille maison souvent isolée' },
  { level: 488, word: 'HANTE', indice: 'Se dit d’un bâtiment occupé par des esprits' },
  { level: 489, word: 'PORTE', indice: 'Celle qui s’ouvre toute seule avec un bruit sinistre' },
  { level: 490, word: 'PARQUET', indice: 'Le vieux sol en bois qui craque sous chaque pas' },
  { level: 491, word: 'HURLEMENT', indice: 'Le cri long et glaçant déchirant le silence de la nuit' },
  { level: 492, word: 'TENEBRES', indice: 'L’obscurité totale où se cachent toutes nos craintes' },
  { level: 493, word: 'PEUR', indice: 'L’émotion glaciale qui accélère brutalement le cœur' },
  { level: 494, word: 'CAUCHEMAR', indice: 'Un rêve atroce dont on se réveille en sueur' },
  { level: 495, word: 'OMBRE', indice: 'La forme sombre au mur qui semble se détacher' },
  { level: 496, word: 'MYSTERE', indice: 'Un phénomène sombre qui n’a aucune explication' },
  { level: 497, word: 'MAGIE', indice: 'Le pouvoir occulte capable de plier la réalité' },
  { level: 498, word: 'GRIMOIRE', indice: 'Un très vieux livre maudit relié en cuir' },
  { level: 499, word: 'RITUEL', indice: 'Une sombre cérémonie pour invoquer l’interdit' },
  { level: 500, word: 'MINUIT', indice: 'L’heure fatidique, au cœur de la nuit, où tout bascule' }
];

     
    if(localStorage.getItem('player')){
        let i;
          player = JSON.parse(localStorage.getItem('player'));
         
              generetelife(5);    
          checkword = listword[player.level-1].word;
    

          for(i=0;i<=checkword.length-1;i++){
            //genereteletter(checkword[i],i);
            genereteletter(' ',i);
          }
        generetedescription(listword[player.level-1].indice);
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
            jouerSonTouche() ;
            console.log(check);
            const test = verifieletter(check,word);
             if(nombreessaie == 0){
                       boite.style.display = 'block';
                       cont.classList.add('cache');
                }
            if(test){
                  if(endgame(word)){


                        boite2.querySelector('.modal-text').innerHTML = `Félicitations, vous avez trouvé le mot caché !<br><br><span style="color: #f0c060; font-size: 1.5em; letter-spacing: 5px; font-family: 'Cinzel', serif; text-shadow: 0 0 10px rgba(240,192,96,0.5);">${word}</span>`;
genererSonVictoire();
                     boite2.style.display = 'block';
                       cont.classList.add('cache');

                  };
            }else{
                 if(nombreessaie-1 == 0){

                    genererSonDefaite();
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



// 1. On crée l'objet audio en indiquant le nom de ton fichier
const musiqueAmbiance = new Audio('./../sound/sound1.mp3');



musiqueAmbiance.loop = true;
musiqueAmbiance.volume = 0.2;

// On écoute le TOUT PREMIER clic sur la page de jeu
document.body.addEventListener('click', function() {
    
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
function genererSonDefaite(){
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