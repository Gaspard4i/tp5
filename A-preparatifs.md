<img src="images/readme/header-small.jpg" >

# A. Préparatifs <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [A.1. Récupération du projet](#a1-récupération-du-projet)
- [A.2. Configuration de Prettier](#a2-configuration-de-prettier)
- [A.3. Outils de dev](#a3-outils-de-dev)
- [A.4. Installation de React](#a4-installation-de-react)
- [A.5. Lancement de l'application](#a5-lancement-de-lapplication)

## A.1. Récupération du projet
**Ce repo contient une solution commentée du précédent TP.** <br>
Pour ce TP vous pouvez soit repartir de vos fichiers du précédent TP (si vous l'aviez terminé et que le formateur a validé que tout était correct notamment au niveau de la config Babel et webpack) ou bien cloner ce repo et vous en servir comme base pour ce TP.

*Si vous repartez de vos fichiers, **pensez à faire un `git pull`** pour récupérer les dernières modifications du repo (probablement des modifs de CSS ou des corrections de dernière minute).*

1. **Récupérez les fichiers de ce TP grâce à Git : clonez ce repo dans un dossier de votre choix** (*ici je clone dans mon dossier utilisateur/tps-react/tp2, attention au sens des slashs selon votre OS*) :
	```bash
	mkdir ~/tps-react
	git clone https://framagit.org/formation/react/tp1.git ~/tps-react/tp2
	```

2. **Ouvrez le projet dans VSCodium** (pour les différentes façon d'ouvrir le projet relisez les [instructions du TP0](../tp0/A-preparatifs.md#a3-ouvrir-le-projet-dans-vscodium) )
	```bash
	codium ~/tps-react/tp2
	```


3. **Installez les paquets npm nécessaires au projet** notamment le compilateur [Babel](https://babeljs.io)<br>
	Ouvrez un terminal intégré à VSCodium (kbd>CTRL</kbd>+<kbd>J</kbd> *(PC)* / <kbd>CMD</kbd>+<kbd>J</kbd> *(Mac)*) et tapez juste :
	```bash
	npm install
	```

	Vous noterez qu'on ne précise pas les paquets à installer. npm va en effet les déterminer automatiquement à partir du contenu du fichier `package.json` et plus particulièrement à partir des sections `"dependencies"` et `"devDependencies"` qui indiquent quels sont les paquets qui ont été installés précédemment.

	Magique !

## A.2. Configuration de Prettier

***Lors des précédents TPs, vous avez en principe installé l'extension Prettier.***

Prettier est un formateur de code automatique qui est le plus populaire à l'heure actuelle dans l'écosystème React.

**C'est le moment de configurer cette extension** pour l'utiliser dans notre projet.

1. **Ajoutez un fichier `.vscode/settings.json` dans le dossier du tp** avec le contenu suivant :

	```json
	{
		"[javascript]": {
			"editor.formatOnSave": true,
			"editor.defaultFormatter": "esbenp.prettier-vscode"
		}
	}
	```
	Créez ensuite un fichier `.prettierrc` à la racine du TP :
	```json
	{
		"singleQuote": true,
		"trailingComma": "es5",
		"endOfLine": "lf",
		"useTabs": true,
		"jsxBracketSameLine": false,
		"arrowParens": "avoid"
	}
	```
	Enfin, installez prettier avec npm :
	```bash
	npm install --save-dev prettier
	```
	Avec cette configuration, vos fichiers JS seront maintenant automatiquement formatés à chaque sauvegarde !

	Pour voir la liste des configurations possibles, rendez vous sur https://prettier.io/docs/en/configuration.html


## A.3. Outils de dev

Installez l'extension **React Developer Tools** :
- sur Chrome : https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
- ou sur Firefox : https://addons.mozilla.org/en-US/firefox/addon/react-devtools/


## A.4. Installation de React
Comme vu en cours React est une **librairie** JS.

Lorsque l'on fait du développement JS de manière sérieuse, on installe les librairies qu'on utilise dans notre code avec `npm`. Comme nous sommes de gens sérieux, allons y :

1. **Installez la librairie [`react`](https://www.npmjs.com/package/react) avec npm :**
	```bash
	npm i react
	```
	***NB :** `npm i ...` est un raccourci pour `npm install ...`*

	***NB :** vous remarquerez que `react` s'est ajouté dans la section `"dependencies"` du `package.json` (et plus `"devDependencies"` comme pour Babel, Webpack, etc.) c'est pour distinguer les dépendances qui servent juste pour la phase de développement (comme les outils de build) de celles qui ont un impact sur l'appli compilée.*

2. Comme vous le savez, React permet de développer des applis web mais aussi des apps mobiles (avec [React Native](https://reactnative.dev/)).

	Dans notre cas il faut donc, en plus de [`react`](https://www.npmjs.com/package/react), **installer la lib [`react-dom`](https://www.npmjs.com/package/react-dom) :**
	```bash
	npm i react-dom
	```
3. Puisque l'on souhaite utiliser du JSX, il faut **permettre à Babel de compiler le JSX en JS à l'aide du preset [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react/)** (vous vous souvenez, les presets sont des sortes de "dictionnaires" de traduction) :
	```bash
	npm i -D @babel/preset-react
	```
	***NB :** `-D` est un raccourci pour l'option `--save-dev`*

	Ajoutez ensuite le preset `@babel/preset-react` nouvellement installé dans le fichier `.babelrc`
	```json
	"presets": ["@babel/preset-env", "@babel/preset-react"]
	```
4. **Supprimez tous les fichiers `.js` du dossier `src`, à l'exception du fichier `src/data.js` puis créez un fichier `src/app.js`** qui servira de point d'entrée à notre application React.

	Placez-y pour le moment un `console.log` :
	```js
	console.log('REACTube en React !');
	```
5. **Enfin, modifiez la configuration de webpack** pour lui indiquer que c'est ce fichier `src/app.js` qui est désormais le point d'entrée, que le fichier de sortie s'appelle désormais `app.bundle.js`. N'oubliez pas de **mettre à jour la balise `<script>`** du fichier `index.html` !

## A.5. Lancement de l'application

Comme dans le précédent TP lancez un serveur HTTP et la compilation du projet dans deux terminaux côte à côte ([terminaux splittés](https://code.visualstudio.com/docs/editor/integrated-terminal#_terminal-splitting)) :

1. **Lancez un serveur http** dans un terminal intégré de VSCodium (<kbd>CTRL</kbd>+<kbd>J</kbd> *(PC)* / <kbd>CMD</kbd>+<kbd>J</kbd> *(Mac)*) :
	```bash
	npx serve -l 8000
	```

2. **Lancez la compilation de votre projet** dans un **deuxième** terminal splitté (*le `watch` et `npx serve` doivent tourner en parallèle*) :
	```bash
	npm run watch
	```

5. **Vérifiez dans le navigateur que la page index.html s'affiche correctement** en ouvrant l'url http://localhost:8000.

	Le résultat attendu est le suivant :

	<a href="images/screen/screen-00.png"><img src="images/readme/screen-00.png" ></a>

	**Dans la console, vérifiez que le message *`"REACTube en React !"`* s'affiche bien.**

	<a href="images/screen/screen-01.png"><img src="images/readme/screen-01.png" ></a>

	***NB: Si la page ne s'affiche pas correctement**, vérifiez que vous avez bien lancé le serveur http dans le dossier du projet, c'est à dire celui où se trouve le fichier `index.html`. Puis vérifiez dans la `Console` ou dans l'onglet `Sources` (Chrome) ou `Debugger` (Firefox) qu'l n'y a pas d'erreur JS lorsque la page se charge.*

## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [B. Un premier composant](B-premier-composant.md)