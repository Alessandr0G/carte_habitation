# La création du projet

## Objectif
Le projet que vous trouvez sur cette page a pour objectif d'aider les personnes qui cherchent à habiter dans le canton de Fribourg dans leur choix d'un lieu optimal. Dans cette optique, ce site veut couvrir un certain nombre de caractéristiques qu'elles soient naturelles ou infrastructurelles. Bien que le nombre de caractéristiques ne dépasse pas la dizaine, les choix sont assez importants pour pouvoir permettre à un bon nombre de personnes de pouvoir situer les régions du canton qui leur sont relativement plus adaptées.

Cette application web devrait permettre à plus ou moins n'importe qui a comme objectif de déménager dans le canton de Fribourg faire des sélections selon certains de ses intérêts.

Les caractéristiques sont adaptables en termes de distance d'intérêt, de type d'intérêt et d'importance dans la prise de décision.

## Utilisation de l'IA
Dans la création de ce projet, l'IA a été utilisé de 2 manières distinctes.

Premièrement, pour trouver le nom des fonctions et autres termes de code pour techniquement possible certaines implémentations. Par exemple, cette page utilise un système de Canvas avec des fichiers Geotiff chargés en raster pour le calcul de la carte de compatibilité. Cette manière de faire a été sélectionnée après de nombreux échanges quant aux autres systèmes, comme l'utilisation de format PNG, Shapefile, ..., ou dans la manière de coder du CSS pour les diverses stylisations de la page. Dans ce cas, ChatGPT a été l'unique IA utilisé.
Deuxièmement, l'assistant copilot dans l'application Visual Studio a pu aider dans l'écriture du direct du code. Dans le cas de fonctions ou de lignes répétitives, des propositions ont été faites à travers l'application pour permettre une écriture plus rapide dans certains cas.

# Tutoriel projet
## Travail de la données
La première étape de ce projet a été la préparation des fichiers Géotiff. Pour cela, l'application QGIS a été utilisée dans l'optique d'utiliser les diverses données de Swisstopo et de les transformer en raster Géotiff avant de pouvoir les réimporter ici.

## Calcul de la compatibilité

La couche de niveau de compatibilité, qui est visible dans la page web, représente la somme pour chaque pixel du bien fait (positif ou négatif) de chaque caractéristique. Cette somme se fait en 3 étapes.

Premièrement, les couches sont toutes chargées par la fonction "loadRaster(URL de la couche)" dans un format de "Array", qui est tout simplement une longue liste de chiffre. Chacun des "Array" est testé pour assuré qu'il possède des données et ensuite retransformé en format booléen. C'est-à-dire qu'il transforme les valeurs inférieures à 0 et les valeurs non-finies en 0 et les autres valeurs en 1.

### Selection des données

Deuxièmement, les valeurs de sélection et de poids sont récupérées à travers des fonctions qui interrogent l'HTML depuis le JS pour savoir ce que la personne a sélectionné. Les valeurs récupérées sont utilisées pour sélectionner une partie des couches qui seront sommées en plus de récupérer les différents indicateurs de poids pour la somme.

### Formule utilisée

Finalement, la somme des couches est effectuée en tenant en compte des poids sélectionnés. De plus, les résultats de la somme sont indexés sur la somme des poids sélectionnés. Ainsi, la compatibilité affichée est une compatibilité relative et non-absolue.

## Visualisation de la carte

Après que la somme soit effectuée, le résultat et re-stocké dans un "Array" et dans un Canvas avec les couleurs approprié en fonction du résultat de la somme pour chaque pixel. Ce Canvas est ensuite ajouté à la carte Leaflet afin d'être visible sur la page, en plus des limites du canton et des zones inappropriées à la construction (si elles sont actives).

## Le bilinguisme

Dans le cadre de ce projet, je me suis intéressé à la manière de changer la langue d'un site. Pour ce projet, les différentes formes textuelles ont été écrites dans un deuxième fichier JS "main_text.js" Pour que cela fonction, un dictionnaire a été utilisé et est interrogé à chaque clic sur un bouton de changement de langue.

## Lancer le projet

Le projet ne peut pas fonctionner sur un serveur local de live server sur visual studio.
Dans le cadre de la création de ce projet, l'alternative node.js a été utilisé. En bref, il faut :
- Installer node.js
- Lancer un serveur local à travers l'invite de commande et la fonction npm run dev, après avoir setup le node dans le fichier où se trouve votre index html.
