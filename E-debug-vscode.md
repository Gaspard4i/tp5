<img src="images/readme/header-small.jpg" >

# E. Debugger dans vscode <!-- omit in toc -->

_**Pour débugger notre code, on a jusqu'ici toujours utilisé les devtools intégrés dans notre navigateur. Mais il faut admettre que ce n'est pas très pratique de devoir passer d'une fenêtre à l'autre notamment quand on utilise les points d'arrêt car on a le _MÊME_ code affiché à 2 endroits différents :**_
- **dans vscode** (_le code qu'on édite_)
- **dans les devtools** (_dans l'onglet "Sources"/"Debugger"_)

**Dans ce TP nous allons découvrir comment debugger notre code DIRECTEMENT DANS VSCODE 😱 sans avoir besoin des devtools du navigateur !**

## Sommaire <!-- omit in toc -->
- [E.1. Configuration](#e1-configuration)
- [E.2. Utilisation du mode debug](#e2-utilisation-du-mode-debug)
	- [E.2.1. La Debug console](#e21-la-debug-console)
	- [E.2.2. Les points d'arrêt](#e22-les-points-darrêt)
	- [E.2.3. Mode debug \& extensions Chrome](#e23-mode-debug--extensions-chrome)

## E.1. Configuration

Pour pouvoir debugger directement dans vscode, vscode a besoin d'**une instance de Chrome en mode debug**, ce qui va lui permettre de communiquer avec les devtools.


> <details><summary>🚧 <em>Il est aussi possible d'utiliser Firefox mais je ne vous le recommande pas...</em></summary>
>
> _la configuration du debug dans Firefox est plus complexe et peut prendre du temps. Par ailleurs l'extension Firefox a longtemps été moins maintenue ce qui pose parfois des problèmes d'installation/configuration. Si vous n'y êtes pas allergique, je vous conseille vivement d'utiliser Chrome qui est configuré par défaut dans vscode._
>
> _Si vous n'avez pas Chrome utilisez Chromium (voir plus bas)._
>
> _Si vous souhaitez absolument utiliser Firefox, alors suivez donc les instructions de la doc officielle https://github.com/firefox-devtools/vscode-firefox-debug?tab=readme-ov-file#getting-started avant de revenir ici_
> </details>

On peut s'amuser à lancer Chrome en mode debug en le lançant nous-même en ligne de commande, mais le plus simple c'est de laisser vscode lancer Chrome avec la configuration qui va bien, tout seul, comme un grand.

Il y a plusieurs techniques pour configurer ça dans vscode mais la solution la plus simple est la suivante :
1. **Ouvrez le fichier `src/app.tsx` dans vscode** (_avec_ <kbd>CTRL</kbd>+<kbd>P</kbd>)
2. **Lancez une session de Debug :**
	- soit en appuyant sur la touche <kbd>F5</kbd>
	- soit en ouvrant le menu 'Run' > 'Start Debugging'
	- soit en lançant la Command palette avec <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> et en sélectionnant `"Debug: Start Debugging"`
3. **Vscode vous affiche une liste déroulante avec les différents types de debugger supportés, ici sélectionnez le debugger nommé "Web App (Chrome)"** :

	<img src="images/readme/vscode-launch.png">

	À ce stade, vscode crée un fichier `/.vscode/launch.json` avec une configuration par défaut. Ce fichier doit ressembler à ceci :

	```jsonc
	{
		// Use IntelliSense to learn about possible attributes.
		// Hover to view descriptions of existing attributes.
		// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
		"version": "0.2.0",
		"configurations": [
			{
				"type": "chrome",
				"request": "launch",
				"name": "Launch Chrome against localhost",
				"url": "http://localhost:8080",
				"webRoot": "${workspaceFolder}"
			}
		]
	}
	```
	Tout est presque bon dans ce fichier généré automatiquement, seule l'URL n'est pas correcte car le port indiqué n'est pas celui que l'on utilise (_`8080` au lieu de `8000`. Souvenez-vous : notre site est lancé avec la commande `vite --port 8000` !_)

	> <details><summary>⚠️ <em>Si vous utilisez <strong>Chromium</strong> et pas Chrome il faut modifier un peu la config…</em></summary>
	>
	> _Dans ce cas il faut préciser le chemin vers l'exécutable en ajoutant la clé `"runtimeExecutable"` dans la clé `"configurations"` :_
	> ```diff
	> "configurations": [
	> 	{
	> 		"type": "chrome",
	> 		"request": "launch",
	> 		"name": "Launch Chrome against localhost",
	> 		"url": "http://localhost:8080",
	> -		"webRoot": "${workspaceFolder}"
	> +		"webRoot": "${workspaceFolder}",
	> +		"runtimeExecutable": "/bin/chromium"
	> 	}
	> ]
	> ```
	> </details>

4. **Corrigez donc le numéro de port dans le fichier `launch.json` :**
	```json
	"url": "http://localhost:8000",
	```
5. **Vous pouvez maintenant lancer la session de debug, en appuyant simplement sur <kbd>F5</kbd>**

	Une nouvelle fenêtre de Chrome s'ouvre alors avec ReacTube :

	<img src="images/readme/vscode-run.png">

	> ℹ️ _Cette fenêtre de Chrome est ouverte en mode debug et avec un compte utilisateur "vide", c'est donc normal que vous ne retrouviez pas vos extensions et paramétrages. On y reviendra plus tard…_

## E.2. Utilisation du mode debug

Cette nouvelle fenêtre de Chrome ouverte en mode "debug" communique maintenant avec vscode. C'est ce qui va permettre à vscode d'offrir plusieurs fonctionnalités de debug intéressantes :

### E.2.1. La Debug console
**La "Debug console" qui s'affiche en bas, correspond plus ou moins à la "Console" de Chrome.**

<img src="images/readme/vscode-console.png" >

La principale différence avec la console de Chrome, c'est que quand on **clique** sur un nom de fichier (_comme à droite sur la capture d'écran ci-dessus_) vscode affiche directement le fichier et la ligne responsable du `console.log` ! \
Pratique !

### E.2.2. Les points d'arrêt
**Vous pouvez maintenant mettre vos points d'arrêt (_breakpoints_) directement dans l'interface de vscode et y faire exactement ce que vous faisiez avec l'onglet "Sources" de Chrome !**

Cliquez simplement à gauche d'un numéro de ligne, et une puce rouge s'affiche indiquant qu'un point d'arrêt a été ajouté !

<img src="images/readme/vscode-breakpoint.png" >

1. **Pour tester ça, ajoutez un point d'arrêt ligne 6 comme sur la capture ci-dessus.**

2. **Rechargez la page soit en utilisant le bouton "Restart" de la debug toolbar, soit en rafraîchissant la page dans Chrome, soit en sauvegardant simplement le fichier `app.tsx`.**

	À ce stade Chrome se met en pause et l'interface de vscode change pour passer en mode "exécution pas à pas".
3. **Pour indiquer la ligne sur laquelle se trouve l'exécution pas à pas, un petit triangle s'est affiché autour de la puce rouge à côté du numéro de ligne :**

	<img src="images/readme/vscode-stepbystep.png" >

4. **Vous pouvez maintenant utiliser la barre d'exécution pas à pas** (_en haut à droite dans la capture ci-dessus_) : **cliquez sur le bouton "Step Over (F10)" une première fois** :

	<img src="images/readme/vscode-stepover.png"/>

5. **la valeur de `root` est maintenant calculée, survolez le nom de la constante directement dans vscode pour voir sa valeur en live !**

	> ℹ️ _le contenu de cette constante est un peu obscur car il s'agit un peu des entrailles de ReactDOM, mais vous pourrez quand même remarquer dans la propriété `root._internalRoot.containerInfo` que l'on a bien notre balise `<section class="appContainer">` !_

6. **Dans le panneau de gauche** (_affiché automatiquement mais qu'on peut refaire apparaître en tapant <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>D</kbd> ou <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> puis `View: Show Run and Debug`_) **vous pouvez aussi voir toutes les variables locales**, la call stack, etc. exactement comme dans l'onglet "Sources" des devtools de Chrome !

	**Cliquez ensuite sur le bouton "Continue (F5)"** pour poursuivre l'exécution normale du reste du code JS, la page doit maintenant s'afficher dans Chrome.

**Une fois que vous avez testé ça, pensez à enlever le point d'arrêt !**

> <details><summary>ℹ️ <em>Même si vous utilisez le debug dans vscode, les devtools de Chrome continuent de fonctionner…</em></summary>
>
> _En fait les devtools du navigateur sont même **synchronisés avec vscode** (les actions dans une interface se répercutent dans l'autre !)_
> </details>

> <details><summary>📖 <em>Besoin de plus d'informations sur ce mode debug ? …</em></summary>
>
> _Pour en savoir plus sur les possibilités offertes par cet outil, je vous invite à faire un tour sur la **doc officielle** ici : https://code.visualstudio.com/docs/nodejs/browser-debugging_
> </details>

> <details><summary>💡 <em>vscode inclut aussi un inspecteur réseau ! …</em></summary>
>
> _Effectivement, ça ne figure pas dans la doc, mais depuis la version 1.93, vscode inclut un panneau permettant d'inspecter les requêtes http, un peu comme l'onglet "Network" des devtools de Chrome mais en plus simple : https://code.visualstudio.com/updates/v1\_93#\_experimental-network-view :_
>
> <img src="https://code.visualstudio.com/assets/updates/1_93/js-debug-network.png" />
> </details>

### E.2.3. Mode debug & extensions Chrome

Pour terminer, je vous invite à installer 2 extensions dans votre navigateur de debug.

Vous vous dites peut-être que c'est simple : il suffit d'aller sur le store d'extensions de Chrome et de cliquer sur un bouton, mais NON ! Ce serait trop facile !

En fait, le problème c'est que quand on utilise le mode "debug" comme on vient de le faire, vscode crée un nouveau profil Chrome "vide", dédié au projet qu'on est en train de coder. Du coup, si vous installez des extensions Chrome dans ce TP, vous allez les perdre au TP suivant et devoir **les réinstaller à chaque fois**. C'est triste. 😢

Heureusement il est possible de configurer vscode pour **"réutiliser" le même profil Chrome à chaque TP** !

Éditez le fichier `/.vscode/launch.json` pour ajouter dans la config la clé `"userDataDir"` :
```diff
{
	"version": "0.2.0",
	"configurations": [
		{
			"type": "chrome",
			"request": "launch",
			"name": "Launch Chrome against localhost",
			"url": "http://localhost:5173",
-			"webRoot": "${workspaceFolder}"
+			"webRoot": "${workspaceFolder}",
+			"userDataDir": "${workspaceFolder}/../.vscode-chrome"
		}
	]
}
```
> ⚠️ _Attention à bien ajouter une virgule sur la ligne précédente !_

Grâce à cette config on indique à vscode d'utiliser comme dossier de stockage du profil de Chrome, un dossier nommé `.vscode-chrome` qui sera placé "à côté" de notre projet. En utilisant toujours le même dossier dans les futurs TP, ça nous permettra de conserver la config et les extensions Chrome d'un TP à l'autre (_à condition de placer tous nos TP dans le même dossier parent !_).

> ℹ️ _Vous pouvez bien entendu adapter si besoin le chemin ou le nom du dossier !_

Maintenant que c'est fait, stoppez le debug (<kbd>SHIFT</kbd>+<kbd>F5</kbd>) et relancez le navigateur de debug en appuyant à nouveau sur <kbd>F5</kbd> : le dossier `.vscode-chrome` doit se créer automatiquement, et vous pouvez maintenant installer (_dans la fenêtre de chrome qui s'est ouverte_) les extensions suivantes :
- **React Developer Tools** : https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
- **Redux Devtools** : https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

On jouera avec ces deux extensions plus tard (_tp3 pour les React Developer Tools et tp7 pour les Redux Devtools_) mais maintenant que le profil de Chrome est correctement renseigné, ces 2 extensions vous suivront désormais à chaque TP !

## Étape suivante <!-- omit in toc -->
Une fois cette partie terminée, passons à quelques exercices avancés dans la partie [F. Pour aller plus loin](F-optimisations.md).