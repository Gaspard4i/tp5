<img src="images/readme/header-small.jpg" >

# D. Perfectionnement <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [D.1. API likes/dislikes](#d1-api-likesdislikes)
- [D.2. Les commentaires](#d2-les-commentaires)


## D.1. API likes/dislikes
Dans ce TP nous allons connecter les boutons like/dislike de la page `VideoDetail` à l'API.

1. **Pour que ce soit plus simple à tester, remettez la page `VideoList` comme page par défaut dans le `Navigator`.**
1. **Dans la page `VideoDetail`, faites en sorte que le clic sur le bouton "like" lance un POST vers https://localhost:8080/api/videos/:id/likes** et que le click sur le bouton "dislike" appelle https://localhost:8080/api/videos/:id/dislikes (ou `:id` est l'id de la vidéo actuellement affichée dans `CideoDetail`)
2. **Une fois le POST terminé, le nombre de likes doit se mettre à jour** (avec les données en bdd, quelques fois qu'un autre utilisateur aurait lui aussi entre temps cliqué sur les boutons ;) ).

## D.2. Les commentaires

**Dans ce dernier exercice, je vous propose de mettre en place un système de commentaires dans la page de détail.**

Plusieurs contraintes :
- le formulaire d'ajout de commentaire doit être un composant contrôlé
- l'API pour les commentaires est déjà fournie :
	- GET http://localhost:8080/api/videos/1/comments retourne les commentaires de la vidéo d'id 1
	- POST http://localhost:8080/api/videos/1/comments ajoute un nouveau commentaire.

		Le body de la requête sera de la forme :
		```json
		{
			"content": "Le message saisi par l'utilisateur"
		}
		```
- Une fois un commentaire ajouté, la liste des commentaires doit se rafraîchir
- le commentaire le plus récent est en haut
- pour chaque commentaire on affiche son contenu et sa date de publication au format `"Le 06/07/2020 à 13:37:42"`
- pendant le chargement l'utilisateur ne doit pas pouvoir saisir de texte ou re-cliquer sur le bouton submit

Voici une proposition de code HTML qui devrait rendre à peu près bien dans la page :
```html
<aside class="commentList">
	<h2>X commentaires</h2>
	<form class="commentForm">
		<textarea
			name="content"
			rows="2"
			placeholder="Ajouter un commentaire public"
		></textarea>
		<button type="submit">Envoyer</button>
	</form>
	<article class="commentRenderer">
		<time datetime="2020-06-08 22:40:41">Le 08/06/2020 à 22:40:41</time>
		<p>Génial ! Vive React</p>
	</article>
</aside>
```