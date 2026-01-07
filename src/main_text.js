// to write in html : data-i18n="popup_right"

const LANG = {
  fr: {
    attirant:
        "Attirant",
    repoussant:
        "Repoussant",
    oui:
        "Oui",
    non:
        "Non",
    dist_int:
        "Distance d'intérêt",
    map_loader:
        "Charger la map",
    map_zoom:
        "Réinitialiser le zoom",
    titre_left:
        "Sélection des paramètres",
    titre_right:
        "Importance des paramètres",
    titre_lac:
        "Lac :",
    titre_foret:
        "Forêt :",
    titre_etang:
        "Etang :",
    titre_village:
        "Grand village :",
    titre_ville:
        "Ville :",
    titre_gare:
        "Gare à <1km :",
    titre_prim:
        "Ecole Primaire/Co à < 1km :",
    titre_uni:
        "Collège/Université à < 1km :",
    titre_nature:
        "Nature",
    titre_social:
        "Infrastructure",
    titre_exclusion:
        "Exclusion et Dangers",
    titre_dangers:
        `Ajouter les dangers naturels "faibles" et "résiduelles" 
        comme caractéristique repoussante`,
    imp_lac:
        "Importance du lac",
    imp_foret:
        "Importance de la forêt",
    imp_etang:
        "Importance de l'étang",
    imp_village:
        "Importance du village",
    imp_ville:
        "Importance du ville",
    imp_ecoleprim:
        "Importance des écoles primaires et secondaires",
    imp_ecoleuni:
        "Importance des collèges et universités",
    imp_gare:
        "Importance des gares",
    imp_danger:
        `Importance des dangers naturels "faibles" et "résiduels"`,
    titre_legend:
        "Légende",
    compat_horr:
        "Mauvaise compatibilité",
    compat_t_nul:
        "Très faible compatibilité",
    compat_nul:
        "Faible compatibilité",
    compat_mid:
        "Moyenne compatibilité",
    compat_bien:
        "Bonne compatibilité",
    compat_t_bien:
        "Très bonne compatibilité",
    compat_top:
        "Excellente compatibilité",
    non_construction:
        "Pas constructible",
    ctn_frib:
        "Canton FR",
    btn_danger:
        "Afficher les Zones non appropriée à la construction",
    btn_limites_fr:
        "Afficher les limites du canton de Fribourg",
    popup_left_nature:
        `Les paramètres naturels s'intéressent au terrain et à ces caractéristiques.
        
        Dans le cas de ce site, 3 types "d'écosystèmes" sont renseignés:<br><br>

        Les lacs pour les étendues d'eau de plus de 200'000m<sup>2</sup>.<br>
        
        Les forêt pour les étendues d'arbres de plus de 200'000m<sup>2</sup>.<br>

        Les étangs pour les étendues d'est de moins de 200'000m<sup>2</sup>.<br><br>
        
        Certains de ces paramètres nécessitent aussi une entrée de la "distance d'intérêt", 
        qui permet de renseigner sur quelle échelle de distance le paramètre vous impacte par son existence.`,
    popup_left_social:
        `Les paramètres d'infrastructure s'intéressent au bâtit et à sa proximité.<br><br>
        
        Premièrement avec le "niveau" d'urbanisation: <br>
        Avec les "grands villages" qui représentent toutes les communes entre 2'000 et 10'000 habitants.<br>
        Et les "villes" qui représentent toutes les communes de plus de 10'000 habitant (ici 3 Fribourg, Villars-sur-Glâne et Bulle).<br><br>
        
        En second lieu à travers l'accessibilité des infrastructures que sont les quaies de gare en activité et les école "de dégrès 1 et 2" 
        (Primaire et Cycle d'orientation) en plus des collèges et des universités.<br><br>
        
        Certains de ces paramètres nécessitent aussi une entrée de la "distance d'intérêt" (comme pour les paramètres naturels), 
        qui permet de renseigner sur quelle échelle de distance le paramètre vous impacte par son existence.`,
    popup_left_danger:
        `Dans cette dernière catégorie, il est possible de gérer les paramètres liés aux zones de dangers naturels et les limites du canton de Fribourg.<br><br>
        En premier, les zones de danger, qui sont considérés "faibles" ou "résiduels", sont des zones que le 
        <a href="https://www.fr.ch/sites/default/files/contens/sff/_www/files/pdf46/Cartographie_dangers_naturels_instabilites_Rapport_explicatif_2012_FR.pdf" target="_blank" rel="noopener noreferrer"> 
        canton de Fribourg </a>. considère avec "un danger faible pour les personnes" ou "avec une très faible probabilité d'occurence"<br><br>
        
        Les zones non appropriée à la construction regroupe les zones de danger catégorisées comme moyen et fort en plus des lacs pour une meilleure lisibilité.<br><br>`,
    popup_right: `
        La valeur d'importance est la valeur que vous attribuez à la présence
        d'une certaine caractéristique.<br><br>

        Par exemple, si le désagrément sonore créé par une gare à proximité est
        une caractéristique capitale dans la sélection de votre logement,
        vous pouvez lui assigner la valeur maximale
        (après avoir choisi "repoussant").<br><br>

        Au contraire, si cela n'a aucune importance pour vous,
        vous pouvez lui assigner la valeur minimale.<br><br>

        La valeur minimale est à gauche et la valeur maximale à droite de la barre.`
  },

  de: {
    attirant:
        "Anziehend",
    repoussant:
        "Abstoßend",
    oui:
        "Ja",
    non:
        "Nein",
    dist_int:
        "Entfernung von Interesse",
    map_loader:
        "Karte laden",
    map_zoom:
        "Zoom zurücksetzen",
    titre_left:
        "Auswahl der Parameter",
    titre_right:
        "Wichtigkeit des Parameters",
    titre_lac:
        "See :",
    titre_foret:
        "Wald :",
    titre_etang:
        "Teich :",
    titre_village:
        "Großes Dorf",
    titre_ville:
        "Stadt",
    titre_gare:
        "Gare à <1km : DE",
    titre_prim:
        "Grundschule/Orientierungsschule entfernt < 1km :",
    titre_uni:
        "Gymnasium/Universität entfernt < 1km :",
    titre_nature:
        "Natur",
    titre_social:
        "Infrastruktur",
    titre_exclusion:
        "Ausschluss und Gefahren",
    titre_dangers:
        `"Geringe" und "restliche" Naturgefahren als abschreckendes Merkmal hinzufügen`, 
    imp_lac:
        "Wichtigkeit des Sees",
    imp_foret:
        "Wichtigkeit des Waldes ",
    imp_etang:
        "Wichtigkeit des Teiches",
    imp_village:
        "Wichtigkeit du des Dorfes",
    imp_ville:
        "Wichtigkeit der Stadt",
    imp_ecoleprim:
        "Wichtigkeit der Grundschulen/Orientierungsschule",
    imp_ecoleuni:
        "Wichtigkeit der Gymnasien/Universität",
    imp_gare:
        "Wichtigkeit des Bahnhofs",
    imp_danger:
        `Wichtigkeit von "geringer" und "restlicher" Naturgefahren`,
    titre_legend:
        "Bildunterschrift",
    compat_horr:
        "Schlechte Kompatibilität",
    compat_t_nul:
        "Sehr geringe Kompatibilität",
    compat_nul:
        "Geringe Kompatibilität",
    compat_mid:
        "Mittlere Kompatibilität ",
    compat_bien:
        "Gute Kompatibilität",
    compat_t_bien:
        "Sehr gute Kompatibilität",
    compat_top:
        "Hervorragende Kompatibilität",
    non_construction:
        "Innapropriées à la construction DE",
    ctn_frib:
        "Contour du canton de Fribourg DE",
    btn_danger:
        "Afficher les Zones non appropriée à la construction DE",
    btn_limites_fr:
        "Afficher les limites du canton de Fribourg DE",
    popup_left_nature:
        "NATURE Dans la sélection des paramètres ci-contre, DE",
    popup_left_social:
        `SOCIAL Dans la sélection des paramètres ci-contre,
        village (>2'000 habitants) à moins de 2km est: DE`,
    popup_left_danger:
        `DANGERS Dans la sélection des paramètres ci-contre, DE`,
    popup_right: `
      The importance value represents how much weight you give to the presence
      of a specific feature.<br><br>

      For example, if noise caused by a nearby train station is a critical factor
      in your housing choice, you can assign it the maximum value
      (after selecting "repulsive").<br><br>

      If it does not matter to you, you can assign it the minimum value.<br><br>

      The minimum value is on the left and the maximum value on the right of the slider.
    `
  }
};

function setLanguage(lang="fr") {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerHTML = LANG[lang][el.dataset.i18n];
  });
};


function languageCheck(){
    const lang = document.querySelector('input[id="LanguageChange"]:checked').value;
    console.log(lang);
    setLanguage(lang);
};
setLanguage();