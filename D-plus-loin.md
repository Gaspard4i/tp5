<img src="images/readme/header-small.jpg" >

_**Si vous êtes arrivé•e à cette partie du TP bravo* ! 🎉🥂😎 Vous avez terminé les exercices de base du TP !**_

Dans cette partie bonus, je vous propose quelques exercices supplémentaires pour travailler les hooks `useState` et `useEffect`.

1. Dans `VideoList`, **faites en sorte que pendant la période où aucune vidéo n'est affichée, la classe CSS "is-loading" soit ajoutée à la `<div class="videoList">`.** Cette classe doit être enlevée une fois le timeout terminé.

	Si vous faites les choses correctement, vous devez voir un petit loader apparaître pendant la phase de "loading" :

	<img src="images/readme/screen-03.png" >

2. Dans `VideoDetail` maintenant (_pensez à adapter `app.tsx`_) réglez le problème constaté en début de TP et faites en sorte que **les informations de la vidéo affichée dans le composant VideoDetail ne changent pas** à chaque fois qu'on ajoute un like ou un dislike.

3. Toujours dans `VideoDetail`, **changez automatiquement la vidéo affichée toutes les 2 secondes** : affichez la vidéo suivante du tableau `data` (_utilisez pour ça la fonction [`setInterval() (mdn)`](https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)_).

