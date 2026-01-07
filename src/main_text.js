// to write in html : data-i18n="popup_right"

const LANG = {
  fr: {
    titre:
        "Sélection des paramètres",
    titre_lac:
        "Lac",
    attirant:
        "Attirant",
    repoussant:
        "Repoussant",
    s_titre_nature:
        "Nature",
    popup_left_nature:
        "NATURE Dans la sélection des paramètres ci-contre,",
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
    titre:
        "Sélection des paramètres DE",
    titre_lac:
        "Lac DE",
    attirant:
        "Attirant DE",
    repoussant:
        "Repoussant DE",
    s_titre_nature:
        "Nature DE",
    popup_left_nature:
        "NATURE Dans la sélection des paramètres ci-contre, DE",
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