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
    titre_map:
        "Aide au choix de la zone optimale d'habitation dans le canton de Fribourg",
    titre_left:
        "Sélection des paramètres",
    titre_right:
        "Poid des paramètres",
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
        "Collège/Université à :",
    titre_nature:
        "Nature",
    titre_social:
        "Infrastructure",
    titre_exclusion:
        "Exclusion et Dangers",
    titre_dangers:
        `Ajouter les dangers naturels "faibles" et "résiduels" 
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
        "Compatibilité:",
    titre_legend_2:
        "Légende:",
    compat_horr:
        "Mauvaise",
    compat_t_nul:
        "Très faible",
    compat_nul:
        "Faible",
    compat_mid:
        "Moyenne",
    compat_bien:
        "Bonne",
    compat_t_bien:
        "Très bonne",
    compat_top:
        "Excellente",
    non_construction:
        "Pas constructible",
    ctn_frib:
        "Canton FR",
    btn_danger:
        "Affichage les Zones non appropriée à la construction",
    btn_limites_fr:
        "Affichage les limites du canton de Fribourg",
    info_button_out:
        "Aller vers la page",
    info_button_in:
        "Ouvrir la page d'information",
    info_titre:
        "Quelques informations concernant ce site:",
    info_text:
        `Sur cette page, vous trouverez différents paramètres qui peuvent vous aider à choisir 
        un lieu de vie dans le canton de Fribourg.<br><br>

        Pour vous aider dans cette mission, vous disposerez à gauche:
        Des paramètres; naturels, infrastructurels et de dangers (plus d'information 
        <a href="https://www.fr.ch/sites/default/files/contens/sff/_www/files/pdf46/Cartographie_dangers_naturels_instabilites_Rapport_explicatif_2012_FR.pdf" target="_blank" rel="noopener noreferrer">ici</a>).
        Vous pouvez y sélectionner les distances d'intérêt pour informer quant à la distance maximale d'un paramètre pour qu'il ait une influence sur votre choix et sur votre opinion quant à sa présence, quelle soit positive ou négative.<br>
        Et à droite, vous trouverez des plages d'importance qui permettent d'influer sur le poids que vous donnez à certaines caractéristiques.
        Il y a 6 valeurs différentes, qui vont de 0 tout à gauche à 5 tout à droite, pour chacun des curseurs. Par exemple, il est possible de mettre le curseur 
        tout à gauche pour des paramètres auxquels vous êtes indifférents (la présence de ces paramètres n'influera pas sur la compatibilité à un milieu).<br><br>
        
        Quand vous aurez réglé tous les paramètres à votre guise, cliquez sur "Charger la map", attendez 5 à 10 secondes et le résultat apparaîtra sur la carte.`,
    popup_left_nature:
        `Les paramètres naturels s'intéressent au terrain et à ses caractéristiques.
        Dans le cas de ce site, 3 types de milieu naturel sont renseignés:<br><br>

        Les lacs, pour les étendues d'eau de plus de 200'000m<sup>2</sup>.<br>
        Les forêts, pour les étendues d'arbres de plus de 200'000m<sup>2</sup>.<br>
        Les étangs, pour les étendues d'eau de moins de 200'000m<sup>2</sup>.<br><br>
        
        Certains de ces paramètres nécessitent aussi une entrée de la "distance d'intérêt", 
        qui permet de renseigner sur quelle échelle de distance le paramètre vous impacte par sa proximité.`,
    popup_left_social:
        `Les paramètres d'infrastructure s'intéressent au bâti et à sa proximité.<br><br>
        
        Premièrement avec le "niveau" d'urbanisation: <br>
        Avec les "grands villages" qui représentent toutes les communes entre 2'000 et 10'000 habitants.<br>
        Et les "villes" qui représentent toutes les communes de plus de 10'000 habitant (Ici 3, Fribourg, Villars-sur-Glâne et Bulle).<br><br>
        
        En second lieu, à travers l'accessibilité des infrastructures que sont les quais de gare en activité et les écoles "de degrès 1 et 2" 
        (primaire et Cycle d'orientation) en plus des collèges et des universités.<br><br>
        
        Certains de ces paramètres nécessitent aussi une entrée de la "distance d'intérêt" (comme pour les paramètres naturels), 
        qui permet de renseigner sur quelle échelle de distance le paramètre vous impacte par sa proximité.`,
    popup_left_danger:
        `Dans cette dernière catégorie, il est possible de gérer les paramètres liés aux zones de dangers naturels et les limites du canton de Fribourg.<br><br>
        En premier, les zones de danger, qui sont considérés "faibles" ou "résiduels", sont des zones dans lesquelles:
        on trouve "un danger faible pour les personnes" ou "une très faible probabilité d'occurrence".<br><br>
        
        Les zones non appropriées à la construction regroupent les zones de danger catégorisées comme moyen et fort (voir dans la page d'information pour en savoir plus) 
        en plus des lacs pour une meilleure lisibilité des zones où il est possible d'habité de manière générale.<br><br>
        
        (Les limites du canton et les zones non appropriées à la construction sont activées au lancement du site. Cliquez pour les désélectionner.)`,
    popup_right: 
        `La valeur d'importance est la valeur que vous attribuez à la proximité
        d'une certaine caractéristique.<br><br>

        Par exemple, si le désagrément sonore créé par une gare à proximité est
        une caractéristique capitale dans la sélection de votre lieu de vie,
        vous pouvez lui assigner la valeur maximale (tout à droite, après avoir choisi "repoussant" (dans le cas de notre exemple)).<br><br>

        Au contraire, si cela n'a aucune importance pour vous,
        vous pouvez lui assigner la valeur minimale (tout à gauche), cela permettra de ne pas prendre cette caractéristique en compte dans le calcul de compatibilité.<br><br>

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
    titre_map:
        "Hilfe bei der Wahl des optimalen Wohnortes im Kanton Freiburg",
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
        "Bahnhof enfternt < 1km :",
    titre_prim:
        "Grundschule/Orientierungsschule entfernt < 1km :",
    titre_uni:
        "Gymnasium/Universität entfernt :",
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
        "Kompatibilität:",
    titre_legend_2:
        "Bildunterschrift:",
    compat_horr:
        "Schlechte",
    compat_t_nul:
        "Sehr geringe",
    compat_nul:
        "Geringe",
    compat_mid:
        "Mittlere",
    compat_bien:
        "Gute",
    compat_t_bien:
        "Sehr gute",
    compat_top:
        "Hervorragende",
    non_construction:
        "Nicht bebaubar",
    ctn_frib:
        "Kanton FR",
    btn_danger:
        "Nicht bebaubare Gebiete anzeigen",
    btn_limites_fr:
        "Die Grenzen des Kantons Freiburg anzeigen",
    info_button_out:
        "Zur Seite gehen",
    info_button_in:
        "Informationsseite öffnen",
    info_titre:
        "Einige Informationen zu dieser Website:",
    info_text:
        `Auf dieser Seite finden Sie verschiedene Parameter, 
        die Ihnen bei der Wahl eines Wohnortes im Kanton Freiburg helfen können.<br><br>

        Um Ihnen bei dieser Aufgabe zu helfen, stehen Ihnen auf der linken Seite folgende Elemente zur Verfügung:
        Parameter: natürliche Gegebenheiten, Infrastruktur und Gefahren (weitere Informationen 
        <a href="https://www.fr.ch/sites/default/files/contens/sff/_www/files/pdf46/Cartographie_dangers_naturels_instabilites_Rapport_explicatif_2012_FR.pdf" target="_blank" rel="noopener noreferrer">hier (auf Französich)</a>).
        Sie können dort die für Sie relevanten Entfernungen auswählen, um anzugeben, in welcher maximalen Entfernung ein Parameter Ihre Wahl und Ihre Meinung zu dessen Vorhandensein positiv oder negativ beeinflussen würde.<br>
        Auf der rechten Seite finden Sie wichtige Bereiche, mit denen Sie die Gewichtung bestimmter Merkmale beeinflussen können.
        Es gibt 6 verschiedene Werte, die von 0 ganz links bis 5 ganz rechts für jeden der Schieberegler reichen. 
        Beispielsweise können Sie den Schieberegler für Parameter, die Ihnen gleichgültig sind, ganz nach links stellen (das Vorhandensein dieser Parameter hat keinen Einfluss auf die Kompatibilität mit einer Umgebung).<br><br>
        
        Wenn Sie alle Einstellungen nach Ihren Wünschen vorgenommen haben, klicken Sie auf "Karte laden", warten Sie 5 bis 10 Sekunden und das Ergebnis wird auf der Karte angezeigt.`,
    popup_left_nature:
        `Die natürlichen Parameter beziehen sich auf das Gelände und seine Eigenschaften.
        Im Falle dieses Standorts werden drei Arten von natürlichen Lebensräumen angegeben:<br><br>

        Seen, für Gewässer mit einer Fläche von mehr als 200'000m<sup>2</sup>.<br>
        Wälder, für Baumflächen von mehr als 200'000m<sup>2</sup>.<br>
        Teiche, für Gewässer mit einer Fläche von weniger als 200'000m<sup>2</sup>.<br><br>
        
        Einige dieser Parameter erfordern auch die Eingabe der "Entfernung von Interesse”, 
        wodurch angegeben werden kann, auf welcher Entfernungsskala der Parameter Sie durch seine Nähe beeinflusst.`,
    popup_left_social:
        `Die Infrastrukturparameter beziehen sich auf Gebäude und deren Umgebung.<br><br>
        
        Erstens mit dem "Grad" der Urbanisierung: <br>
        Mit den "großen Dörfern", die alle Gemeinden mit 2.000 bis 10.000 Einwohnern umfassen.<br>
        Und den "Städten", die alle Gemeinden mit mehr als 10.000 Einwohnern umfassen (hier 3, Freiburg, Villars-sur-Glâne und Bulle).<br><br>
        
        Zweitens durch die Zugänglichkeit der Infrastruktur, wie die Bahnsteige der in Betrieb befindlichen Bahnhöfe und die Schulen der "Stufen 1 und 2” 
        (Grundschule und Orientierungsstufe) zusätzlich zu den Gymnasien und Universitäten.<br><br>
        
        Einige dieser Parameter erfordern auch die Eingabe der "Relevanzentfernung" (wie bei den natürlichen Parametern), 
        wodurch angegeben werden kann, auf welcher Entfernungsskala der Parameter Sie durch seine Nähe beeinflusst.`,
    popup_left_danger:
        `In dieser letzten Kategorie können die Parameter im Zusammenhang mit Naturgefahrengebieten und den Grenzen des Kantons Freiburg verwaltet werden.<br><br>
        Erstens sind Gefahrengebiete, die als "gering” oder "restlich” eingestuft werden, Gebiete, in denen:
        "eine geringe Gefahr für Personen” oder "eine sehr geringe Eintrittswahrscheinlichkeit” besteht.<br><br>
        
        Zu den für eine Bebauung ungeeigneten Gebieten zählen die als mittel- und hochgefährdet eingestuften Gebiete (weitere Informationen finden Sie auf der Informationsseite) 
        sowie Seen, um die Gebiete, in denen eine Besiedlung generell möglich ist, besser erkennbar zu machen.<br><br>
        
        (Die Kantonsgrenzen und die nicht bebaubaren Gebiete werden beim Start der Website aktiviert. Klicken Sie darauf, um die Auswahl aufzuheben.)`,
    popup_right: 
        `Der Wert der Bedeutung ist der Wert, den Sie der Nähe
        eines bestimmten Merkmals.<br><br>

        Wenn beispielsweise die Lärmbelästigung durch einen nahe gelegenen Bahnhof
        ein entscheidendes Kriterium bei der Wahl Ihres Wohnortes ist,
        können Sie ihm den Höchstwert zuweisen (ganz rechts, nachdem Sie „abstoßend” ausgewählt haben (in unserem Beispiel)).<br><br>

        Wenn es Ihnen hingegen egal ist,
        können Sie den Minimalwert (ganz links) zuweisen, damit dieses Merkmal bei der Berechnung der Kompatibilität nicht berücksichtigt wird.<br><br>

        Der Mindestwert befindet sich links und der Höchstwert rechts vom Balken.`
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