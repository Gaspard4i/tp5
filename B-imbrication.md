<img src="images/readme/header-small.jpg" >

# B. Imbrication & props <!-- omit in toc -->

_**Dans cette partie du TP, nous allons modifier notre application pour mettre en oeuvre le principe d'imbrication et la technique des props.**_


Actuellement notre VideoList contient tout le JSX associé aux vignettes ce qui alourdit inutilement le composant (_dans l'absolu, le boulot de la VideoList c'est de rendre une liste de vignette, peu importe ce que les vignettes contiennent, ce n'est pas vraiment son affaire_).

On va donc **externaliser le code des vignettes dans des sous-composants, qu'on appellera `VideoThumbnail`**.

La `VideoList` contiendra autant d'instances de `VideoThumbnail` qu'il y a de vidéos dans le tableau `data.ts`, ce qui nous donnera la structure suivante :

<img src="images/readme/screen-01.jpg" />

1. **Créez donc un composant `VideoThumbnail`** (_pour l'instant vide_) dans un module `src/VideoThumbnail.tsx`.

2. **Externalisez dans `VideoThumbnail` le JSX de chaque vignette de vidéo** (_tout le `<a href>...</a>`_)

	> 💡 _**Astuce :** pensez à utiliser les React Devtools pour inspecter l'arborescence du Virtual DOM, et détecter les éventuelles anomalies de structure._

	> ⚠️ _Vérifiez bien aussi qu'il n'y a pas d'erreur dans la `"Debug console"` de vscode ni dans le terminal de `tsc`_

3. **Améliorez le code de VideoDetail en sortant tout ce qui concerne les commentaires dans un sous composant `CommentList`** (`src/CommentList.tsx`)

	Ce sous-composant sera lui-même composé :
	- d'un composant `CommentForm` contenant le formulaire d'ajout de commentaires,
	- et de plusieurs composants `CommentRenderer` pour le rendu de chaque commentaire (_une instance de `CommentRenderer` par commentaire dans la liste_).

## Étape suivante <!-- omit in toc -->
Une fois cette partie terminée, voyons comment utiliser conjointement React et l'API DOM : [C. Les refs](C-refs.md).