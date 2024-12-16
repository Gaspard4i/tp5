<img src="images/readme/header-small.jpg" >

# F. Pour aller plus loin <!-- omit in toc -->

Si vous avez terminé les précédents exercices, bravo ! Voici quelques exercices supplémentaires :

1. Dans le composant `VideoDetail` **la description devient facultative :** la balise `<p>` qui la contient ne doit pas s'afficher si la constante `description` est vide.

	> ⚠️ _Pensez que pour travailler sur `VideoDetail`, c'est mieux si ce composant est affiché à l'écran. Si vous voyez la `VideoList` dans votre navigateur c'est probablement que quelque chose ne va pas..._

2. **Faites en sorte que le composant `VideoDetail` aille chercher ses infos depuis le fichier `data.js`** en prenant les infos de la première cellule.

3. **Utilisez la fonction `Math.random()` pour récupérer une vidéo aléatoire dans `VideoDetail`.**

4. **Dans le composant VideoList**, faites en sorte que lorsque l'on clique sur une vignette, **le fichier mp4 s'ouvre dans une nouvelle fenêtre**.

	Pour cela, utilisez la méthode [`window.open` (_mdn_)](https://developer.mozilla.org/en-US/docs/Web/API/Window/open).

	La popup doit :
	- faire 350 pixels de large et 200 de haut
	- n'avoir ni barre de menu ni barre d'outils
	- être affichée au centre de l'écran

5. **Dans le composant `VideoDetail`, créez un formulaire d'ajout de commentaires.** Le code HTML du formulaire devra être le suivant :
	```html
	<aside class="commentList">
		<form class="commentForm">
			<textarea
				name="content"
				rows="2"
				placeholder="Ajouter un commentaire public"
			/>
			<button type="submit">Envoyer</button>
		</form>
	</aside>
	```
	A la soumission du formulaire, faites en sorte d'afficher une alerte "Ajout de commentaire !"

6. **Toujours dans le composant `VideoDetail`, affichez en dessous du formulaire (à _l'INTÉRIEUR_ de la balise `<aside class="commentList">`) une liste de commentaires, stockés dans un tableau `comments`.**

	Ce tableau `comments` contient des objets littéraux avec des propriétés :
	- id : number
	- created_at : string contenant un datetime au format ISO (ex. `'2024-01-12 13:22:34'`)
	- content : string contenant le texte du commentaire (ex. `'Superbe ! Ce tp est fantastique.'`)

	Le code HTML de chaque commentaire sera le suivant :
	```html
	<article class="commentRenderer">
		<time dateTime="2024-01-12 13:22:34">
			Le 12/01/2024 à 13:22:34
		</time>
		<p>Superbe ! Ce tp est fantastique.</p>
	</article>
	```
	Enfin, ajouter en haut de la balise `<aside class="commentList">` une balise `<h2>X commentaires</h2>` où `X` est le nombre de commentaires.