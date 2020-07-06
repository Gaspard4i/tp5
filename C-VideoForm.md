<img src="images/readme/header-small.jpg" >

# C. VideoForm <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [C.1. Création du formulaire](#c1-création-du-formulaire)
- [C.2. Gestion du formulaire](#c2-gestion-du-formulaire)
- [Étape suivante](#étape-suivante)

## C.1. Création du formulaire

1. Crééz un nouveau composant `VideoForm` dont le render retournera le code HTML suivant :
	```html
	<form class="videoForm">
		<label for="title">Titre</label>
		<input
			required
			type="text"
			id="title"
		/>
		<label for="description">Description</label>
		<textarea
			required
			id="description"
			cols="30"
			rows="10"
		></textarea>
		<label for="thumbnail">
			Vignette
			<small>
				&nbsp;id de l'image sur &nbsp;
				<a href="https://unsplash.com" target="_blank">
					https://unsplash.com
				</a>
			</small>
		</label>
		<input
			required
			type="text"
			id="thumbnail"
		/>
		<button type="submit">Envoyer</button>
	</form>
	```
	***NB :** Vous aurez remarqué qu'il n'y a pas de champ pour l'upload du champ `file`. En effet le fichier vidéo sera choisi au hasard par le serveur au moment de l'enregistrement en bdd. Cela nous permet de ne pas nous embêter dans ce TP avec une requête multipart et sa [syntaxe un peu complexe](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Uploading_a_file))*
2. **Ajoutez cet écran dans le `Navigator` avec un identifiant de route associé** (pour `VideoList` on avait `'list'`, pour `VideoDetail` on avait `'detail'`, je vous propose donc pour `VideoForm` de partir sur `'form'`, original non ?)
3. **Affichez `VideoForm` par défaut au chargement de l'appli en modifiant le state par défaut du `Navigator`**

## C.2. Gestion du formulaire
4. **A l'aide de la technique des composants non-contrôlés** (*cf. pdf du cours*) faites en sorte d'afficher dans la console les valeurs saisies par l'utilisateur lorsqu'il soumet le formulaire (touche <kbd>Entrée</kbd> ou click sur le bouton "Envoyer")
5. **Une fois les valeurs récupérées, envoyez une requête POST vers le webservice http://localhost:8080/api/videos** (cf. documentation de fetch avec POST : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch#Corps)

	***NB :** Pour envoyer vos données dans le `body` de votre `fetch`, il faut que ces données soient **encodées sous forme de chaîne de caractères JSON**. Pensez donc à utiliser `JSON.stringify()` autour de l'objet que vous souhaitez envoyer dans le `body`!*
6. **Enfin, quand l'enregistrement en bdd a été effectué par le webservice, et si aucune erreur n'a été remontée, alors redirigez l'utilisateur vers la page de la vidéo qu'il vient d'enregistrer** (indice : inspectez bien le corps de la réponse à votre requête POST...).


## Étape suivante
Une fois cette partie terminée, passez à la partie : [D. Perfectionnement](D-perfectionnement.md).