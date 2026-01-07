// to write in html : data-i18n="popup_right"

const LANG = {
  fr: {
    attirant:
        "Attirant",
    repoussant:
        "Repoussant",
    oui:
        "oui",
    non:
        "non",
    dist_int:
        "Distance d'intérêt",
    map_loader:
        "Charger la map",
    map_zoom:
        "Reset le zoom",
    titre_left:
        "Sélection des paramètres",
    titre_right:
        "Importance des caractéristiques",
    titre_lac:
        "Lac :",
    titre_foret:
        "Forêt :",
    titre_etang:
        "Etang :",
    titre_village:
        "Grand village à < 2km :",
    titre_ville:
        "Ville à < 2km :",
    titre_gare:
        "Gare à <1km :",
    titre_prim:
        "Ecole Primaire/co à < 1km :",
    titre_uni:
        "Collège/Université à < 1km :",
    titre_nature:
        "Nature",
    titre_social:
        "Social",
    titre_exclusion:
        "Exclusion et Dangers",
    titre_dangers:
        `Ajouter les dangers naturels "moyens" et "faible" 
        comme caractéristique repulsive`,
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
        `Importance des dangers naturels "moyens" et "faibles"`,
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
        "Innapropriées à la construction",
    ctn_frib:
        "Contour du canton de Fribourg",
    btn_danger:
        "Afficher les Zones non appropriée à la construction",
    btn_limites_fr:
        "Afficher les limites du canton de Fribourg",
    popup_left_nature:
        `NATURE Dans la sélection des paramètres ci-contre`,
    popup_left_social:
        `SOCIAL Dans la sélection des paramètres ci-contre,
        village (>2'000 habitants) à moins de 2km est:`,
    popup_left_danger:
        `DANGERS Dans la sélection des paramètres ci-contre,`,
    popup_right: `
      La valeur d'importance est la valeur que vous attribuez à la présence
      d'une certaine caractéristique.<br><br>

      Par exemple, si le désagrément sonore créé par une gare à proximité est
      une caractéristique capitale dans la sélection de votre logement,
      vous pouvez lui assigner la valeur maximale
      (après avoir choisi "repoussant").<br><br>

      Au contraire, si cela n'a aucune importance pour vous,
      vous pouvez lui assigner la valeur minimale.<br><br>

      La valeur minimale est à gauche et la valeur maximale à droite de la barre.
    `
  },

  de: {
    attirant:
        "Attirant DE",
    repoussant:
        "Repoussant DE",
    oui:
        "ja",
    non:
        "nein",
    dist_int:
        "Distance d'intérêt DE",
    map_loader:
        "Charger la map DE",
    map_zoom:
        "Reset le zoom DE",
    titre_left:
        "Sélection des paramètres DE",
    titre_right:
        "Importance des caractéristiques DE",
    titre_lac:
        "Lac :DE",
    titre_foret:
        "Forêt :DE",
    titre_etang:
        "Etang :DE",
    titre_village:
        "Grand village à < 2km : DE",
    titre_ville:
        "Ville à < 2km : DE",
    titre_gare:
        "Gare à <1km : DE",
    titre_prim:
        "Ecole Primaire/co à < 1km : DE",
    titre_uni:
        "Collège/Université à < 1km : DE",
    titre_nature:
        "Nature DE",
    titre_social:
        "Social DE",
    titre_exclusion:
        "Exclusion et Dangers DE",
    titre_dangers:
        `Ajouter les dangers naturels "moyens" et "faible" 
        comme caractéristique repulsive DE`, 
    imp_lac:
        "Importance du lac DE",
    imp_foret:
        "Importance de la forêt DE",
    imp_etang:
        "Importance de l'étang DE",
    imp_village:
        "Importance du village DE",
    imp_ville:
        "Importance du ville DE",
    imp_ecoleprim:
        "Importance des écoles primaires et secondaires DE",
    imp_ecoleuni:
        "Importance des collèges et universités DE",
    imp_gare:
        "Importance des gares DE",
    imp_danger:
        `Importance des dangers naturels "moyens" et "faibles" DE`,
    titre_legend:
        "Légende DE",
    compat_horr:
        "Mauvaise compatibilité DE",
    compat_t_nul:
        "Très faible compatibilité DE",
    compat_nul:
        "Faible compatibilité DE",
    compat_mid:
        "Moyenne compatibilité DE",
    compat_bien:
        "Bonne compatibilité DE",
    compat_t_bien:
        "Très bonne compatibilité DE",
    compat_top:
        "Excellente compatibilité DE",
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