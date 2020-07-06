<img src="images/readme/header-small.jpg" >

# B. Imbrication & props <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [B.1. VideoThumbnail](#b1-videothumbnail)
- [B.2. PropTypes](#b2-proptypes)
- [Étape suivante](#étape-suivante)

***Maintenant que votre environnement de développement est prêt, que votre serveur http tourne, nous allons modifier notre application pour mettre en oeuvre le principe d'imbrication et la technique des props.***

## B.1. VideoThumbnail

Actuellement notre VideoList contient tout le JSX associé aux vignettes ce qui alourdi inutilement le composant (dans l'absolu, le boulot de la VideoList c'est de rendre une liste de vignette, peu importe ce que les vignettes contiennent, ce n'est pas vraiment son affaire).

On va donc externaliser ce code dans un autre composant : `VideoThumbnail`.

1. **Créez un composant `VideoThumbnail` dans un module `src/VideoThumbnail.js`.**

2. **Externalisez dans `VideoThumbnail` le JSX de chaque vignette de vidéo** (tout le `<a href>...</a>`)

3. **Transformez si ce n'est pas déjà le cas, le composant `VideoThumbnail` en *"function component"*.**


## B.2. PropTypes
**Comme vu en cours** (*pensez à récupérer le pdf si ce n'est pas déjà fait !*) **les proptypes permettent aux composants React de vérifier si ce que leur parent leur fourni comme props est bien conforme à leurs attentes.**

Ce système de vérification s'exécute au runtime, mais les éditeurs de code peuvent aussi les utiliser pour faire de l'assistance à la saisie, ou du lint.

1. **A l'aide de la [documentation des PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) vérifiez que le `VideoThumbnail` reçoit bien une video au format attendu**

2. **Pour vous assurer que le système est bien opérationnel, essayez d'instancier un `VideoThumbnail` de manière incorrecte :**
	- avec seulement une partie des infos nécessaires (par exemple sans le `title` ou sans le `file`)
	- avec toutes les infos mais les mauvais types (par exemple un nombre au lieu d'une chaîne dans le titre)
	Vérifiez à chaque fois qu'un warning s'affiche bien dans la console

	<a href="images/screen/screen-01.png"><img src="images/readme/screen-01.png" ></a>


## Étape suivante
Une fois cette partie terminée, voyons comment utiliser conjointement React et l'API DOM : [C. React & l'API DOM](C-api-dom.md).