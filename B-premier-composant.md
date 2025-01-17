<img src="images/readme/header-small.jpg" >

# B. Un premier composant <!-- omit in toc -->

_**Maintenant que votre environnement de développement est prêt, que votre serveur http tourne, attaquons-nous au développement d'un premier composant React.**_

## Sommaire <!-- omit in toc -->
- [B.1. ReactDOM](#b1-reactdom)
- [B.2. Un premier composant](#b2-un-premier-composant)
- [B.3. Un composant = un module](#b3-un-composant--un-module)

## B.1. ReactDOM

ReactDOM est la librairie qui permet d'injecter des composants React dans une page web. Elle fournit une fonction `render()` qui permet d'associer un composant React à un élément du DOM (une balise).

1. **Dans votre fichier `src/app.tsx`, commencez par importer `ReactDOM` :**
	```js
	import ReactDOM from 'react-dom/client';
	```

2. **Toujours dans `src/app.tsx`, ajoutez le code suivant :**
	```tsx
	const root = ReactDOM.createRoot(document.querySelector('.container > header'));
	```
	Comme vu en cours, ReactDOM expose une méthode statique `ReactDOM.createRoot()` à laquelle on passe **l'élément DOM** (la balise) dans lequel on souhaite travailler.

	Malheureusement TypeScript nous retourne déjà une erreur ☹️
	```
	src/app.tsx - error TS2345: Argument of type 'Element | null' is not assignable to parameter of type 'Container'.
	Type 'null' is not assignable to type 'Container'.

	const root = ReactDOM.createRoot(document.querySelector('.appContainer'));
	```

	> <details><summary>ℹ️ <em>Ça veut dire quoi cette erreur ?</em></summary>
	>
	> _TypeScript râle parce que :_
	> - _d'un côté `querySelector(...)` peut parfois retourner `null` (notamment s’il ne trouve pas la balise demandée dans la page HTML)._
	> - _d'un autre côté, `createRoot` attend quelque chose du type "`Container`"_
	>
	> _Si vous essayez d'importer le type `Container` fourni par `react-dom/client`, vous verrez que sa déclaration est la suivante :_
	> ```ts
	> (alias) type Container = Element | DocumentFragment
	> ```
	> _Ce type nous confirme que :_
	> - _`null` ne fait pas partie des types autorisés_
	> - _`Element` est un type autorisé, ce qui tombe bien puisque c'est justement un des types de retour de `querySelector()`_
	> </details>

3. Pour résoudre cette erreur on va utiliser un opérateur qui n'existe qu'en TypeScript : **le ["Non Null Assertion Operator" (doc)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-) : "`!`"**._

	Il permet de dire à TypeScript qu'on est **certains que qu'une valeur n'est pas nulle**. \
	Dans notre situation, on est quasi certains que la balise `.appContainer` existera toujours puisque c'est presque la seule de notre page HTML, on peut donc "forcer la main" à TS pour lui dire de considérer que cette valeur ne sera jamais nulle.

	Ajoutez donc un "`!`" après `querySelector(...)` comme ceci :
	```ts
	const root = ReactDOM.createRoot(document.querySelector('.container > header')!);
	```
	L'erreur a disparu !

	> <details><summary>ℹ️ <em>On aurait pu aussi utiliser le principe du "type narrowing"...</em></summary>
	>
	> _Dans le cas où un doute existe bel et bien sur le fait qu'une valeur puisse être `null` ou pas, le "non null assertion operator" n'est pas adapté puisque tout ce qu'il permet de faire c'est de faire "comme si" le problème n'existait pas._ 🙈 \
	> _Le [type narrowing (doc)](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) va nous permettre au contraire de montrer à TypeScript qu'on gère bien tous les cas de figure proprement._
	>
	> _Par exemple, si on utilise `querySelector` mais qu'on a un doute sur l’existence ou non de la balise HTML, on va simplement rajouter un test pour vérifier que la valeur n'est pas nulle avant de manipuler le DOM._ \
	> _Par exemple comme ceci :_
	> ```ts
	> const headerElement = document.querySelector('.container > header');
	> if (headerElement) {
	>      headerElement.innerHTML = title; // ici TS sait que headerElement n'est pas null grâce au if
	> }
	> ```
	> _Ca fonctionne pour `null` mais aussi pour n'importe quel type :_
	> ```ts
	> function myFunction(param: string | number):string {
	> 	if (typeof param === 'number') {
	> 		return param.toFixed(2); // ici TS sait qu'on a un number
	> 	}
	> 	return param.toUpperCase(); // ici TS sait qu'on a une chaîne
	> }
	> ```
	> </details>

4. L'erreur étant réglée, **affichons du contenu dans la page :** la méthode `createRoot` nous retourne un objet qui dispose d'une méthode `render()` à laquelle on peut simplement envoyer **le JSX** que l'on veut injecter dans la page :
	```tsx
	root.render(<h1>Le Top 10 des frameworks JS</h1>);
	```

5. **Rechargez la page** dans votre navigateur, vous devriez obtenir ceci :

	<img src="images/readme/screen-03.png" >

	> <details><summary>ℹ️ <em>Vous voulez voir à quoi ça ressemble du JSX compilé en JS ?</em></summary>
	>
	> _Si vous inspectez le code compilé par Vite dans les devtools (onglet "Sources" sur Chrome / "Debugger" sur Firefox) vous verrez que la méthode utilisée en remplacement du JSX n'est pas l'instruction `React.createElement()` comme vu en cours mais une fonction `jsxDEV()` avec une syntaxe un peu différente de `createElement` (les children sont dans les attributs et pas dans un paramètre distinct)._
	>
	> _En effet, depuis la version 17 de React sortie en 2020, une [nouvelle méthode de compilation du JSX](https://reactjs.org/blog/2020/10/20/react-v17.html#new-jsx-transform) est disponible. Vite, contrairement à Babel 7, [l'active par défaut](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#jsxruntime) !_
	> </details>

6. **Notez que la méthode `ReactDOM.createRoot()` est en fait une fonction qu'on peut importer indépendamment.** À la place de `import ReactDOM from 'react-dom/client';` écrivez :
	```js
	import {createRoot} from 'react-dom/client';
	```
	Puis à la place de `ReactDOM.createRoot(...` écrivez juste `createRoot(...` :
	```js
	const root = createRoot(document.querySelector('.container > header')!);
	```

## B.2. Un premier composant

On vient de voir que l'on peut passer à `root.render()` du code JSX tapé inline. Mais en général on va surtout l'employer avec des composants custom !

1. **Toujours dans le `src/app.tsx`** (_on mettra tout ça dans des modules à part plus tard_), **au-dessus de l'appel à `root.render()`, créez une fonction nommée `VideoDetail` comme ceci :**
	```js
	function VideoDetail() {
		return <h1>Le Top 10 des frameworks JS</h1>;
	}
	```
	Il s'agit là d'un composant React tout à fait basique : une fonction qui retourne du JSX.

2. **À la place du `<h1>` en dur utilisez le composant `VideoDetail` dans l'appel à `root.render()` :**
	```js
	root.render(<VideoDetail />);
	```
	Le rendu dans le navigateur ne doit pas avoir bougé puisque le composant `VideoDetail` retourne le même JSX que ce qu'on avait mis auparavant :

	<img src="images/readme/screen-03.png" >

	> 💡 _Pour vous assurer que la modif de votre code est bien prise en compte, vous pouvez modifier le JSX retourné par le composant `VideoDetail`, par exemple en changeant le texte du `<h1>`, et voir si le changement se fait bien dans le navigateur._

## B.3. Un composant = un module

Maintenant que vous avez compris le principe, déplacez la fonction `VideoDetail` dans un module à part `src/VideoDetail.tsx`. En effet, le fichier `app.tsx` n'est que le point d'entrée de notre appli, le détail du code de nos composants doit être externalisé. Pensez bien à modifier le module `app.tsx` et aux `import`/`export` qui vont bien !

## Étape suivante <!-- omit in toc -->
Une fois cette partie terminée, il est temps de travailler les bases de JSX : [C. JSX : les bases ](C-videodetail.md).