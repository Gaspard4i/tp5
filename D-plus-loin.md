<img src="images/readme/header-small.jpg" >

_**Si vous êtes arrivé à cette partie du TP bravo* ! 🎉🥂😎 Vous avez terminé les exercices de base du TP !**_

Dans cette partie bonus du TP, je vous propose quelques exercices supplémentaires pour travailler les hooks `useState` et `useEffect`.

1. **Faites en sorte que pendant la période où aucune vidéo n'est affichée, la classe CSS "is-loading" soit ajoutée à la `<div class="videoList">`.** Cette classe doit être enlevée une fois le timeout terminé.

	Pendant la phase de "loading", vous devez voir un petit loader apparaître :

	<img src="images/readme/screen-03.png" >


2. Réglez le problème constaté en début de TP et faites en sorte que **les informations de la vidéo affichée dans le composant VideoDetail ne changent pas** à chaque fois qu'on ajoute un like ou un dislike.

3. **Toutes les 2 secondes, la vidéo affichée dans le composant `VideoDetail` doit changer pour afficher la vidéo suivante du tableau** (utilisez pour ça la fonction [`setInterval()`](https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval))

