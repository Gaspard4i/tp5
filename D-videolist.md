<img src="images/readme/header-small.jpg" >

# D. VideoList <!-- omit in toc -->

_**Maintenant que l'on est capables d'afficher un composant qui dispose d'un state, voyons si vous êtes à même d'en créer un autre, un peu plus complexe.**_

## Sommaire <!-- omit in toc -->
- [D.1. Création du composant](#d1-création-du-composant)
- [D.2. Ajout du state](#d2-ajout-du-state)

## D.1. Création du composant

1. **Créez un nouveau composant nommé `VideoList` dans un module `src/VideoList.js`.**

	Pour le moment faites en sorte qu'il retourne juste le code suivant :

	```html
		<div class="container">
			<header>
				<h1>Recommandations</h1>
			</header>
			<div class="videoList"></div>
		</div>
	```

2. **Modifiez le `app.js` pour qu'il rende le composant `VideoList` au lieu du `VideoDetail`.**


## D.2. Ajout du state
1. **Commencez par importer la constante `data`** définie dans le module `src/data.js`.
2. **Utilisez la pour remplir le state par défaut de votre composant `VideoList`** : créez une propriété dans le state nommée `videos` et qui contient le tableau `data`.
3. **Adaptez le render** pour retourner à l'intérieur de la `div class="videoList">` autant de balises de ce type que de cellules dans le state `videos` :
	```html
	<a href="uploads/video1.mp4">
		<img src="https://source.unsplash.com/L8KQIPCODV8/600x340" />
		<section class="infos">
			<h4>Le Top 10 des framework JS</h4>
			<p>Vous n'en croirez pas vos yeux</p>
		</section>
	</a>
	```

Le résultat doit être le suivant (_ça ressemble à ce qu'on avait fait au TP1 hein ?_) :

<img src="images/readme/screen-06.png" >


## Étape suivante <!-- omit in toc -->
Une fois cette partie terminée, passons à quelques exercices avancés dans la partie [E. Pour aller plus loin](E-optimisations.md).