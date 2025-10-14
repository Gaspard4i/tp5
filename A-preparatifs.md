<img src="images/readme/header-small.jpg" >

# A. Préparatifs <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [A.1. Récupération du projet](#a1-récupération-du-projet)
- [A.2. Configuration de Prettier](#a2-configuration-de-prettier)
- [A.3. Installation de React](#a3-installation-de-react)
- [A.4. Lancement de l'application](#a4-lancement-de-lapplication)

## A.1. Récupération du projet
**Ce repo contient une solution commentée du précédent TP.** <br>
Il va vous servir de base pour ce nouveau TP.

1. **Récupérez les fichiers de ce TP grâce à Git : clonez ce repo dans un dossier de votre choix** (_dans mon exemple `chemin/vers/votre/workspace/tp2`_) :
	```bash
	cd chemin/vers/votre/workspace
	git clone git@github.com:formation-react/tp2.git
	```
	> <details><summary>⚠️ <em>Si vous êtes sous <strong>Windows</strong> attention aux slashs...</em></summary>
	>
	> _ici je clone dans le dossier `chemin/vers/votre/workspace/tp2`. **Si vous êtes sous Windows faites attention aux slashs dans le chemin du dossier** : utilisez **Git bash** (qui comprend cette syntaxe) ou si vous tenez vraiment à utiliser **cmd** ou **powershell** pensez à adapter la commande en les remplaçant par des antislash `\` !_
	> </details>

	> <details><summary>ℹ️ <em>Comme pour le TP1 aussi, si vous préférez <strong>cloner en https</strong>...</em></summary>
	>
	> _...adaptez l'URL du repo en clonant à partir de cette URL : `https://github.com/formation-react/tp2.git`_
	> </details>

2. **Ouvrez le projet dans VSCodium** (pour les différentes façons d'ouvrir le projet, relisez les [instructions du TP0](https://github.com/formation-react/tp0/blob/github/A-preparatifs.md#a4-ouvrir-le-projet-dans-vscodium) )
	```bash
	codium chemin/vers/votre/workspace/tp2
	```
	> ℹ️ _Si vous utilisez VSCode, la commande `codium` doit être remplacée par `code`_

3. **Installez les paquets npm nécessaires au projet** notamment [Vite](https://vite.dev) et TypeScript.<br>
	Ouvrez un terminal intégré à VSCodium (<kbd>CTRL</kbd>+<kbd>J</kbd> *(PC)* / <kbd>CMD</kbd>+<kbd>J</kbd> *(Mac)*) et tapez juste :
	```bash
	npm install
	```

	> <details><summary>ℹ️ <em>Pourquoi on ne dit pas à <code>npm install</code> quels sont les paquets qu'on veut installer ?</em></summary>
	>
	> _Effectivement jusque là on a toujours utilisé `npm install nom-de-la-lib` quand on voulait installer un paquet en particulier._
	>
	> _Là on ne précise pas les paquets à installer parce que npm va pouvoir les déterminer **automatiquement** grâce à notre fichier `package.json` et plus particulièrement aux sections `"dependencies"` et `"devDependencies"` qui indiquent quels sont les paquets qui ont été installés précédemment._
	>
	> _Cette technique permet à une personne qui rejoint le projet d'installer en une seule commande tous les paquets (les dépendances) dont a besoin notre projet (d'où l'importance de le versionner)._ \
	> **Magique !** 🙌
	> </details>


## A.2. Configuration de Prettier

<img src="images/readme/header-prettier.jpg" />

_**Lors des précédents TP, vous avez en principe installé l'extension Prettier dans VSCodium.**_

Prettier est un formateur de code automatique qui est le plus populaire à l'heure actuelle dans l'écosystème JavaScript.

**C'est le moment de configurer cette extension** pour l'utiliser dans notre projet.

1. **Remplacez le contenu du fichier `.vscode/settings.json` par les lignes suivantes** :

	```json
	{
		"[typescript][typescriptreact]": {
			"editor.formatOnSave": true,
			"editor.defaultFormatter": "esbenp.prettier-vscode"
		}
	}
	```
	> ℹ️ _On n'a plus besoin de la clé `"typescript.preferences.importModuleSpecifierEnding"` puisque Vite supporte les import sans l'extension js à la fin, ce qui est ce que fait vscode par défaut._

2. **Créez ensuite un fichier `.prettierrc`** à la racine du TP :
	```json
	{
		"singleQuote": true,
		"trailingComma": "es5",
		"useTabs": true,
		"bracketSameLine": false,
		"arrowParens": "avoid"
	}
	```
3. **Enfin, installez le paquet npm `prettier`** dans le projet (_nécessaire pour que l'extension vscodium fonctionne_) :
	```bash
	npm install --save-dev prettier
	```
	Avec cette configuration, vos fichiers JS seront maintenant automatiquement formatés à chaque sauvegarde ! Plus besoin de vous tracasser avec les retours à la ligne, les tabulations, les espaces, tout sera géré automatiquement par Prettier !

	> ℹ️ _Si vous souhaitez en savoir plus sur la liste des configurations possibles, rendez-vous sur https://prettier.io/docs/en/configuration.html_

## A.3. Installation de React

<img src="images/readme/header-react.jpg" />

**Comme vu en cours React est une _bibliothèque_ JS.**

Pour l'utiliser dans notre appli on va d'abord devoir récupérer le code de cette bibliothèque. Et pour récupérer une bibliothèque quand on fait du JS de manière "sérieuse", c'est **`npm`** qu'on utilise ! \
Comme nous sommes des gens sérieux, allons-y :

1. **Installez la bibliothèque [`react`](https://www.npmjs.com/package/react) avec npm :** Dans le dossier du TP (`à la racine, là où se trouve le package.json`), lancez la commande
	```bash
	npm i react
	```
	> ℹ️ _`npm i ...` est un raccourci pour `npm install ...`_

	> <details><summary>ℹ️ <em>Si vous regardez le contenu du fichier `package.json`...</em></summary>
	>
	> _Vous l'avez peut-être remarqué mais contrairement aux autres packages que l'on avait installés jusque là (`vite` et `prettier`), **`react` a été ajouté dans la section `"dependencies"` et pas `"devDependencies"`** du `package.json`._
	>
	> _En effet, tous les paquets que l'on a installés précédemment ne sont utilisés que pendant la **phase de développement** (pour la compilation ou le formatage de code source) mais ne contiennent rien qui soit vraiment utilisé dans "notre" code._
	>
	> _C'est pour cette raison qu'on avait installé tous ces paquets avec **l'option `--save-dev`** (par exemple dans le TP1, on avait fait : `npm install --save-dev vite`, vous vous souvenez ?_ 🤔 _) ce qui avait pour conséquence d'ajouter ces paquets dans les **`"devDependencies"`**._
	>
	> _**Pour React, on n'a pas utilisé l'option `--save-dev` car on va utiliser React dans notre code, de fait il est installé dans la section `"dependencies"`.**_
	>
	> _Documentation officielle :_
	> - _dependencies : https://docs.npmjs.com/cli/v10/configuring-npm/package-json#dependencies_
	> - _devDependencies : https://docs.npmjs.com/cli/v10/configuring-npm/package-json#devdependencies_
	> </details>

2. **Comme vous le savez, React permet de développer des applis web mais aussi des apps mobiles** (_avec [React Native](https://reactnative.dev/)_).

	On doit donc préciser à React le type de projet qu'on va avoir : dans notre cas on va -en plus de [`react`](https://www.npmjs.com/package/react)- **installer la lib [`react-dom`](https://www.npmjs.com/package/react-dom)** qui contient le code spécifique aux applis web :
	```bash
	npm i react-dom
	```
3. Pour typer correctement ces deux paquets `react` et `react-dom` avec TypeScript on va avoir besoin d'installer des **paquets de définitions TS** :

	```bash
	npm i -D @types/react @types/react-dom
	```
	> ℹ️ _`-D` est un raccourci pour l'option `--save-dev`_

	Ajoutez ensuite dans le fichier `tsconfig.json` la clé `"jsx"` comme ceci :
	```jsonc
	{
	  "compilerOptions": {
	    //...

	    "jsx": "react-jsx",
	  }
	}
	```

4. Puisque l'on souhaite utiliser du JSX, il faut **permettre à Vite de compiler le JSX en JS à l'aide du plugin [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)** :
	```bash
	npm i -D @vitejs/plugin-react
	```

	En plus du support de JSX, `@vitejs/plugin-react` offre le support automatique du **Fast Refresh**.

	> <details><summary>ℹ️ <em>C'est quoi le "Fast Refresh" ? Quelle différence avec ce qu'on avait jusque là ?</em></summary>
	>
	> _Jusqu'ici dans le TP vous avez bénéficié grâce à Vite d'une technique qui s'appelle le "live reload" : c'est ce qui permet de recharger automatiquement le navigateur dès qu'un fichier html, js, ou css est modifié._
	>
	> _Mais dans l'écosystème React, il existe encore mieux : le **Fast Refresh**._
	>
	> _Le principe du Fast refresh, c'est que quand un composant de votre application est modifié, SEUL ce composant va être rechargé, sans avoir besoin de rafraîchir toute la page._ \
	> _Quels avantages ?_
	> - _**on ne recharge pas toute la page**, donc pas le html, ni les CSS, ni les images ça va donc **beaucoup plus "vite"**_
	> - _l'application **reste dans son état actuel** : notre navigateur reste là où il était dans la page (conservation du scroll, de la navigation, etc.)_
	> </details>

	<img src="images/readme/fast-refresh.gif">

	Génial non ? Et tout ça sans avoir rien d'autre à faire que d'intégrer `@vitejs/plugin-react` ! 😎

5. **Pour indiquer à Vite que l'on souhaite donc utiliser ce plugin dans notre code, on va ajouter un fichier de config `vite.config.ts`** à la racine de notre TP, avec le contenu suivant :
	```js
	import react from '@vitejs/plugin-react';

	/** @type {import('vite').UserConfig} */
	export default {
		plugins: [react()],
	};
	```

6. **Supprimez tous les fichiers `.ts` du dossier `src`, à l'exception des fichiers `src/data.ts` et ``src/types.ts` puis créez un fichier `src/app.tsx`** qui servira de point d'entrée à notre application React.

	Placez-y pour le moment juste un `console.log` :
	```js
	console.log('REACTube en React !');
	```

	> <details><summary>ℹ️ <em>C'est quoi cette extension `.tsx` ?</em></summary>
	>
	> _Le `x` de `.tsx` fait référence au `x` de "JSX". Il sert à indiquer à Vite et à TypeScript que notre fichier va contenir du JSX pour optimiser les perfs de compilation._
	> </details>

7. **Enfin, modifiez le fichier `index.html`** pour lui indiquer que c'est ce fichier `src/app.tsx` qui est désormais le point d'entrée.

## A.4. Lancement de l'application

Comme dans le précédent TP, **lancez le serveur de développement de Vite** dans un terminal intégré de VSCodium (<kbd>CTRL</kbd>+<kbd>J</kbd> *(PC)* / <kbd>CMD</kbd>+<kbd>J</kbd> *(Mac)*) :

```bash
npm start
```

**Vérifiez ensuite dans le navigateur que la page index.html s'affiche correctement** en ouvrant l'url http://localhost:8000.

Le résultat attendu est le suivant :

<img src="images/readme/screen-00.png" >

**Dans la console, vérifiez que le message *`"REACTube en React !"`* s'affiche bien.**

<img src="images/readme/screen-01.png" >

> <details><summary>🚧 <em>La page ne s'affiche pas correctement ?</em></summary>
>
> _Vérifiez dans la `Console` ou dans l'onglet `Sources` (Chrome) ou `Debugger` (Firefox) qu’il n'y a pas d'erreur JS lorsque la page se charge._
>
> _Êtes-vous certain.e par exemple que la page HTML charge bien le bon script ?_
> </details>

Pour finir, lancez dans un [terminal splitté](https://code.visualstudio.com/docs/terminal/basics#_groups-split-panes) (_côte à côte avec `npm start`_) lancez le compilateur TypeScript pour vérifier le typage de votre code :

```bash
npx tsc --watch
```

> <details><summary>ℹ️ <em>Vite compile déjà notre code TypeScript, Pourquoi lancer en plus le compilateur `tsc` ? </em></summary>
>
> _On a effectivement pas besoin de lancer `tsc` pour compiler le code TS, car Vite le fait déjà pour nous._
>
> _Mais en réalité lorsque Vite compile (avec esbuild), il se contente d'enlever toutes les instructions de typage et ne vérifie pas du tout nos types 😰. En effet [la doc](https://vite.dev/guide/features.html#transpile-only) explique :_
> > _"Note that Vite only performs transpilation on `.ts` files and does NOT perform type checking. It assumes type checking is taken care of by your IDE and build process."_
>
> _Avec ce système, on va donc devoir faire extrêmement attention à ce que remonte l'IDE comme erreurs de typage, mais comme on n'a pas toujours tous les fichiers ouverts en même temps, on peut vite passer à côté d'une erreur._
>
> _En lançant un terminal à part qui ne fait que les vérifications de type, vous allez pouvoir détecter plus facilement les erreurs._
> </details>

> <details><summary>ℹ️ <em>Comment ça se fait que <code>tsc</code> ne génère pas de dossier build comme dans le TP1 ?</em></summary>
>
> _C'est grâce à la clé `"noEmit": true,` du fichier `tsconfig.json`. Elle était commentée dans le premier TP, mais elle est activée dans ce TP ci._
>
> _documentation : https://www.typescriptlang.org/tsconfig/#noEmit_
> </details>

## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [B. Un premier composant](B-premier-composant.md)