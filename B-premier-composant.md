<img src="images/readme/header-small.jpg" >

# B. Un premier composant <!-- omit in toc -->

_**Maintenant que votre environnement de développement est prêt, que votre serveur http tourne, attaquons-nous au développement d'un premier composant React.**_

## Sommaire <!-- omit in toc -->
- [B.1. ReactDOM](#b1-reactdom)
- [B.2. Un premier composant](#b2-un-premier-composant)
- [B.3. Un composant = un module](#b3-un-composant-un-module)

## B.1. ReactDOM

ReactDOM est la librairie qui permet d'injecter des composants React dans une page web. Elle fournit une fonction `render()` qui permet d'associer un composant React à un élément du DOM (une balise).

1. **Dans votre fichier `src/app.jsx`, commencez par importer `ReactDOM` :**
	```js
	import ReactDOM from 'react-dom/client';
	```

2. **Toujours dans `src/app.jsx`, ajoutez le code suivant :**
	```jsx
	const root = ReactDOM.createRoot(document.querySelector('.container > header'));
	```
	Comme vu en cours, ReactDOM expose une méthode statique `ReactDOM.createRoot()` à laquelle on passe **l'élément DOM** (la balise) dans lequel on souhaite travailler. \
	Cette méthode `createRoot` nous retourne un objet qui dispose d'une méthode `render()` à laquelle on peut simplement envoyer **le JSX** que l'on veut injecter dans la page :
	```jsx
	root.render(<h1>Le Top 10 des frameworks JS</h1>);
	```

3. **Rechargez la page** dans votre navigateur, vous devriez obtenir ceci :

	<img src="images/readme/screen-03.png" >

	> _**NB :** si vous inspectez le code compilé par Vite dans les devtools (onglet "Sources" sur Chrome / "Debugger" sur Firefox) vous verrez que la méthode utilisée en remplacement du JSX n'est pas l'instruction `React.createElement()` comme vu en cours mais une fonction `jsxDEV()` avec une syntaxe un peu différente de `createElement` (les children sont dans les attributs et pas dans un paramètre distinct)._
	>
	> _En effet, depuis la version 17 de React sortie en 2020, une [nouvelle méthode de compilation du JSX](https://reactjs.org/blog/2020/10/20/react-v17.html#new-jsx-transform) est disponible. Vite, contrairement à Babel 7, [l'active par défaut](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#jsxruntime) !_
	>

4. **Notez que la méthode `ReactDOM.createRoot()` est en fait une fonction qu'on peut importer indépendamment.** À la place de `import ReactDOM from 'react-dom/client';` écrivez :
	```js
	import {createRoot} from 'react-dom/client';
	```
	Puis à la place de `ReactDOM.createRoot(...` écrivez juste `createRoot(...` :
	```js
	const root = createRoot(document.querySelector('.container > header'));
	```

## B.2. Un premier composant

On vient de voir que l'on peut passer à `root.render()` du code JSX tapé inline. Mais en général on va surtout l'employer avec des composants custom !

1. **Toujours dans le `src/app.jsx`** (_on mettra tout ça dans des modules à part plus tard_), **au dessus de l'appel à `root.render()`, créez une fonction nommée `VideoDetail` comme ceci :**
	```js
	function VideoDetail () {
		return <h1>Le Top 10 des frameworks JS</h1>;
	}
	```
	Il s'agit là d'un composant React tout à fait basique : une fonction qui retourne du JSX.

2. **À la place du `<h1>` en dur utilisez le composant `VideoDetail` dans l'appel à `root.render()` :**
	```js
	root.render(
		<VideoDetail />
	);
	```
	Le rendu dans le navigateur ne doit pas avoir bougé puisque le composant `VideoDetail` retourne le même JSX que ce qu'on avait mis auparavant :

	<img src="images/readme/screen-03.png" >

	> _**NB :** pour vous assurer que la modif de votre code est bien prise en compte, vous pouvez modifier le JSX retourné par le composant `VideoDetail`, par exemple en changeant le texte du h1, et voir si le changement se fait bien dans le navigateur._

## B.3. Un composant = un module

Maintenant que vous avez compris le principe, déplacez la fonction `VideoDetail` dans un module à part `src/VideoDetail.jsx`. En effet, le fichier `app.jsx` n'est que le point d'entrée de notre appli, le détail du code de nos composants doit être externalisé. Pensez bien à modifier le module `app.jsx` et aux `import`/`export` qui vont bien !

## Étape suivante <!-- omit in toc -->
Une fois cette partie terminée, il est temps de travailler plus en "détail" sur le composant `VideoDetail` : [C. Le composant VideoDetail](C-videodetail.md).