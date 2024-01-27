<img src="images/readme/header-small.jpg" >

# D. Perfectionnement <!-- omit in toc -->

_**Notre application commence à prendre forme : on est capables de lire et d'écrire dans la base de données, c'est déjà pas mal !**_

_**En revanche il reste un certain nombre de choses qui sont encore en dur dans le code et que l'on doit dynamiser. <br>C'est parti !**_

## Sommaire <!-- omit in toc -->
- [D.1. VideoDetail](#d1-videodetail)
- [D.2. Redirection VideoForm -\> VideoDetail](#d2-redirection-videoform-videodetail)
- [D.3. API likes/dislikes](#d3-api-likesdislikes)
- [D.4. Les commentaires](#d4-les-commentaires)


## D.1. VideoDetail

**En vous inspirant de ce que vous avez fait à la partie [B. AJAX](B-ajax.md) dans la `VideoList`, connectez le composant `VideoDetail` au webservice http://localhost:8080/api/videos/:id** (_où `:id` correspond à l'id de la vidéo à afficher_)

> _**NB :** Pour que ce soit plus simple à tester, je vous conseille de remettre la page `VideoList` comme page par défaut dans le `Navigator`._


## D.2. Redirection VideoForm -> VideoDetail
**Maintenant que le `VideoDetail` est dynamisé, profitons en pour modifier le comportement du `VideoForm`** : une fois l'enregistrement d'une nouvelle vidéo terminé, au lieu de rediriger l'utilisateur vers la page liste, **redirigez le plutôt vers la page détail** de la vidéo qu'il vient d'enregistrer !

> _**Indice :** inspectez bien le corps de la réponse à votre requête POST...)_

## D.3. API likes/dislikes
_**Connectons maintenant les boutons like/dislike de la page `VideoDetail` à l'API.**_

1. **Dans la page `VideoDetail`, faites en sorte que :**
	- le clic sur le bouton **"like"** lance un **POST vers http://localhost:8080/api/videos/:id/likes**
	- et que le click sur le bouton **"dislike"** lance un **POST http://localhost:8080/api/videos/:id/dislikes**

		(_où **`:id`** est l'id de la vidéo actuellement affichée dans `VideoDetail`_)
3. **Une fois le POST terminé, mettez à jour le nombre de likes affichés dans la page** (_à partir des données en bdd, quelques fois qu'un autre utilisateur aurait lui aussi entre temps cliqué sur les boutons_ 😉 ).

## D.4. Les commentaires

_**Dans ce dernier exercice, je vous propose de travailler encore un peu les appels AJAX ainsi que les formulaires contrôlés en dynamisant les commentaires dans la page de détail.**_

L'API pour les commentaires est **déjà fournie** dans api-server :
- **GET http://localhost:8080/api/videos/1/comments** retourne les commentaires de la vidéo d'id "1"
- **POST http://localhost:8080/api/videos/1/comments** ajoute un nouveau commentaire à la vidéo d'id "1"

	Comme indiqué dans la doc du serveur REST (_n'hésitez pas à la consulter sur http://localhost:8080_), le body de la requête POST doit être de la forme :
	```json
	{
		"content": "Le message saisi par l'utilisateur"
	}
	```

Plusieurs contraintes :
- Quand on arrive sur la page de détail d'une vidéo, **la liste des commentaires doit se charger** en fonction de la vidéo affichée

	> _**NB :** une fois les commentaires connectés à l'API, vous pouvez supprimer le fichier `src/data.js` qui n'est plus utile !_
- Le commentaire le plus récent est **en haut**
- Le formulaire d'ajout de commentaire doit être un formulaire **contrôlé**
- Une fois un commentaire ajouté, la **liste des commentaires doit se rafraîchir**
- Comme nous sommes dans un formulaire contrôlé, on peut modifier la valeur tapée par l'utilisateur : **remplacez automatiquement certains mots au fur et à mesure de la frappe** (_par exemple on peut choisir de remplacer "angular" par "react"_ 😁)
- Comme le texte tapé par l'utilisateur est stocké dans un state, il est facile d'adapter le JSX retourné à la valeur saisie : **désactivez donc le bouton submit** tant qu'il n'y a pas plus de 2 caractères saisis
- Pendant le **chargement** de la liste des commentaires et pendant **l'envoi** d'un nouveau commentaire l'utilisateur ne doit pas pouvoir saisir de texte ou re-cliquer sur le bouton submit

	> _si vous le souhaitez, des styles sont présents dans la CSS pour l'état `disabled` du `textarea` et du `button` submit._ \
	> _Le bouton submit supporte par ailleurs la classe "is-loading" pour afficher un petit loader à l'intérieur du bouton._
