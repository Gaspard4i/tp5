<img src="images/readme/header-small.jpg" >

# C. JSX : les bases <!-- omit in toc -->

_**Voilà, notre appli est maintenant capable d'embarquer des composants React. Entraînons-nous un peu à manipuler le JSX plus en détail.**_

## Sommaire <!-- omit in toc -->
- [C.1. appContainer](#c1-appcontainer)
- [C.2. Le composant Menu](#c2-le-composant-menu)
- [C.2. Injecter des valeurs en JSX](#c2-injecter-des-valeurs-en-jsx)

## C.1. appContainer

Actuellement notre fichier `index.html` contient ce code :
```html
<section class="appContainer">
	<header>
		<nav>
			<h1 class="logo">Reac<em>Tube</em></h1>
			<ul class="mainMenu">
				<li><a href="#">Vidéos</a></li>
				<li><a href="#">Ajouter</a></li>
			</ul>
		</nav>
	</header>
	<div class="container">
		<header></header>
		<div class="page">
		</div>
	</div>
</section>
```

L'idée est maintenant de faire en sorte que tout le contenu de la `<section class="appContainer">` soit généré avec React pour nous permettre de travailler un peu les syntaxes JSX (_et préparer les prochains TPs_ 😉)

Dans cet exercice on va donc :
- créer un nouveau composant `Menu` pour rendre le `<header><nav>...</nav></header>`
- rendre l'un en dessous de l'autre les composants `Menu` et `VideoDetail` de manière à reproduire le code HTML jusque là en dur

1. **Pour ça commencez par supprimer tout le CONTENU de la balise `<section class="appContainer">`** (_on parle bien du **CONTENU** de la section, pas de la balise en elle-même !_). Vous devriez maintenant avoir dans votre fichier `index.html` une balise vide comme ceci :
	```html
	<section class="appContainer"></section>
	```

2. **Une fois la balise `<div class="container">` supprimée, votre application plante**, dans le navigateur l'erreur suivante apparaît :
	```
	Uncaught Error: createRoot(...): Target container is not a DOM element.
	```

	Effectivement, dans notre `app.tsx`, ce n'est plus dans cette balise qu'il faut qu'on rende notre application, mais directement dans la `<section class="appContainer">`. Modifiez l'appel à `createRoot` comme ceci :

	```js
	const root = createRoot(document.querySelector('.appContainer')!);
	```

	**L'erreur a disparu, mais le Menu aussi !**\
	Recréons-le maintenant en React...

## C.2. Le composant Menu
Maintenant que ces préparatifs sont faits, créons donc notre deuxième composant, `Menu`, qui sera chargé de rendre le header du haut.

1. **Dans un module `src/Menu.tsx`, créez ce nouveau composant nommé `Menu` qui retourne le code html suivant :**
	```html
	<header>
		<nav>
			<h1 class="logo">Reac<em>Tube</em></h1>
			<ul class="mainMenu">
				<li><a href="#">Vidéos</a></li>
				<li><a href="#">Ajouter</a></li>
			</ul>
		</nav>
	</header>
	```
	> 💡 _**Conseil :** vérifiez régulièrement que vous n'avez pas d'erreur ou de warning dans la console, on ne sait jamais..._

2. **Modifiez le fichier `app.tsx` pour rendre à la fois le composant `VideoDetail` et ce nouveau composant `Menu` côte à côte dans la `<section class="appContainer">`, comme ceci :**
	```jsx
	root.render(
		<>
			<Menu />
			<VideoDetail />
		</>
	);
	```

	> <details><summary>ℹ️ <em>Euh c'est quoi ces balises vides <code>&lt;&gt;...&lt;/&gt;</code> ??</em> 😰</summary>
	>
	> _On a effectivement entouré `<Menu />` et `<VideoDetail />` de balises "vides" `<>...</>`._
	>
	> _Comme la méthode `root.render()` ne peut prendre en paramètre qu'une seule valeur, on ne peut pas lui passer 2 balises côte à côte. Il faut **obligatoirement** les regrouper dans une seule balise parente._
	>
	> _On aurait pu encadrer nos 2 balises d'une balise parente HTML "classique", comme une `<div>...</div>` par exemple, mais cela aurait surchargé inutilement le code HTML avec une balise `div` intermédiaire, qui aurait probablement cassé la CSS._
	>
	> _Le mieux dans ce genre de situation c'est donc d'utiliser ces fameuses balises "vides" qui sont des **raccourcis** pour des **balises `<React.Fragment>...</React.Fragment>`**. Ces balises `Fragment` permettent de rendre deux composants côte à côte sans générer de balise parente dans le code HTML (cf. la [documentation des Fragments : https://react.dev/reference/react/Fragment](https://react.dev/reference/react/Fragment)._
	> </details>

3. **Modifiez le composant `VideoDetail` pour lui faire retourner le code HTML suivant :**
	```html
	<div class="container">
		<header>
			<h1>Le Top 10 des frameworks JS</h1>
		</header>
	</div>
	```

Le rendu HTML doit rester inchangé par rapport à avant nos modifications, mais cette fois avec tout le code de la page généré en React :

<img src="images/readme/screen-03.png" >

## C.2. Injecter des valeurs en JSX

1. **Dans `VideoDetail`, commencez par ajouter une constante `title` au début de votre fonction, comme ceci :**

	```js
	export default function VideoDetail() {
		const title = 'Le Top 10 des frameworks JS';
		// ...
	```
2. **Utilisez cette valeur dans votre JSX.** (_Vous vous souvenez que pour injecter des valeurs JS dans le JSX il faut utiliser les accolades `{}` ? Si vous ne vous en souvenez pas, c'est le moment de relire le pdf du cours_ 📖). Le rendu ne doit pas avoir bougé :

	<img src="images/readme/screen-03.png" >

3. **Ajoutez maintenant 2 autres constantes :**
	- `description` avec un texte fictif
	- et `file` avec la chaîne `video1.mp4`

	Faites en sorte que le code retourné ressemble à ceci :
	```html
	<div class="videoDetail">
		<video
			style="width:100%; background-color:black"
			height="300"
			controls
			src="./uploads/video1.mp4"
		>
		</video>
		<h1>Le Top 10 des frameworks JS</h1>
		<p>Vous n’en croirez pas vos yeux</p>
	</div>
	```

	Le résultat attendu dans le navigateur est le suivant :

	<img src="images/readme/screen-05.png" >

	Modifiez les valeurs des 3 constantes title, description et file, et vérifiez que le contenu se met bien à jour !

## Étape suivante <!-- omit in toc -->
Une fois cette partie terminée, passons à la prochaine partie : [D. JSX : les boucles](D-videolist.md).