<img src="images/readme/header-small.jpg" >

# E. Debugger dans vscode <!-- omit in toc -->

_**Pour débugger notre code, on a jusqu'ici toujours utilisé les devtools intégrés dans notre navigateur. Mais il faut admettre que ce n'est pas très pratique de devoir passer d'une fenêtre à l'autre notamment quand on utilise les points d'arrêt car on a le _MÊME_ code affiché à 2 endroits différents :**_
- **dans vscode** (_le code qu'on édite_)
- **dans les devtools** (_dans l'onglet "Sources"/"Debugger"_)

**Dans ce TP nous allons découvrir comment debugger notre code DIRECTEMENT DANS VSCODE 😱 sans avoir besoin des devtools du navigateur !**

## Sommaire <!-- omit in toc -->
- [B.1. Configuration](#b1-configuration)
- [B.2. Utilisation du mode debug](#b2-utilisation-du-mode-debug)
	- [B.2.1. La Debug console](#b21-la-debug-console)
	- [B.2.2. Les points d'arrêt](#b22-les-points-darrêt)

## B.1. Configuration

**Pour pouvoir debugger directement dans vscode, vscode a besoin d'une instance de Chrome en mode debug, ce qui va lui permettre de communiquer avec les devtools de Chrome.**

> _**NB :** Il est aussi possible d'utiliser Firefox mais la configuration du debug dans Firefox est plus complexe et peut prendre du temps. Si vous n'y êtes pas allergique, je vous conseille d'utiliser Chrome qui est configuré par défaut dans vscode._
>
> _Si vous n'avez pas Chrome ou que vous souhaitez absolument utiliser Firefox, alors suivez donc les instructions du fichier [E. Débugger dans vscode : Firefox](./E-debug-vscode-firefox.md) avant de revenir ici_

**On peut s'amuser à lancer Chrome en mode debug en le lançant en ligne de commande, mais le plus simple c'est de laisser vscode lancer Chrome tout seul, comme un grand.**

Il y a plusieurs techniques pour configurer tout ça dans vscode mais la solution la plus simple est la suivante :
1. **Ouvrez le fichier `src/app.jsx` dans vscode** (_avec_ <kbd>CTRL</kbd>+<kbd>P</kbd>)
2. **Lancez une session de Debug :**
	- soit en appuyant sur la touche <kbd>F5</kbd>
	- soit en ouvrant le menu 'Run' > 'Start Debugging'
	- soit en lançant la Command palette avec <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> et en sélectionnant 'Debug: Start Debugging'
3. **Vscode vous affiche une liste déroulante avec les différents types de debugger supportés, ici sélectionnez le debugger nommé "Web App (Chrome)"** :

	<img src="images/readme/vscode-launch.png">

	À ce stade, vscode crée un fichier `/.vscode/launch.json` avec une configuration par défaut. Ce fichier doit ressembler à ceci :

	```json
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
	Tout est presque bon, seule l'URL n'est pas correcte car le port indiqué n'est pas celui que l'on utilise (_`8080` au lieu de `8000`. Souvenez-vous : notre site est lancé avec la commande `vite --port 8000` !_)

	> NB si vous utilisez chromium, il faut que vous rajoutiez la ligne suivante dans la clé configurations :
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
4. **Corrigez donc le numéro de port dans le fichier `launch.json` :**
	```json
	"url": "http://localhost:8000",
	```
5. **Vous pouvez maintenant lancer la session de debug, en appuyant simplement sur <kbd>F5</kbd>**

	Une nouvelle fenêtre de Chrome s'ouvre alors avec ReacTube :

	<img src="images/readme/vscode-run.png">

	> _**NB :** cette fenêtre de Chrome est ouverte en mode debug et avec un compte utilisateur "vide", c'est donc normal que vous ne retrouviez pas vos extensions et paramétrages_

	**Profitez-en pour installer l'extension chrome "React Developer Tools"** dans cette instance de Chrome !

## B.2. Utilisation du mode debug

Cette nouvelle fenêtre de Chrome (ou Firefox) communique maintenant avec vscode. C'est ce qui va permettre à vscode d'offrir plusieurs fonctionnalités de debug intéressantes :

### B.2.1. La Debug console
**La "Debug console" qui s'affiche en bas, correspond plus ou moins à la "Console" de Chrome.**

<img src="images/readme/vscode-console.png" >

La principale différence avec la console de Chrome, c'est que quand on **clique** sur un nom de fichier (_comme à droite sur la capture d'écran ci-dessus_) vscode affiche directement le fichier et la ligne responsable du `console.log` ! \
Pratique !

### B.2.2. Les points d'arrêt
**Vous pouvez maintenant mettre vos points d'arrêt (_breakpoints_) directement dans l'interface de vscode et y faire exactement ce que vous faisiez avec l'onglet "Sources" de Chrome !**

Cliquez simplement à gauche d'un numéro de ligne, et une puce rouge s'affiche indiquant qu'un point d'arrêt a été ajouté !

<img src="images/readme/vscode-breakpoint.png" >

1. **Pour tester ça, ajoutez un point d'arrêt ligne 6 comme sur la capture ci-dessus.**

2. **Rechargez la page soit en utilisant le bouton "Restart" de la debug toolbar, soit en rafraîchissant la page dans Chrome, soit en sauvegardant simplement le fichier `app.jsx`.**

	À ce stade Chrome se met en pause et l'interface de vscode change pour passer en mode "exécution pas à pas".
3. **Pour indiquer la ligne sur laquelle se trouve l'exécution pas à pas, un petit triangle s'est affiché autour de la puce rouge à côté du numéro de ligne :**

	<img src="images/readme/vscode-stepbystep.png" >

4. **Vous pouvez maintenant utiliser la barre d'exécution pas à pas** (_en haut à droite dans la capture ci-dessus_) : **cliquez sur le bouton "Step Over (F10)" une première fois** :

	<img src="images/readme/vscode-stepover.png"/>

	Vous remarquerez qu'on a pas changé de ligne car la ligne sur laquelle on a mis un point d'arrêt contient en fait 2 instructions : le `document.querySelector('.appContainer')` et `const root = createRoot(...)`. L'exécution pas à pas s'arrête donc sur chacune de ces étapes : d'abord sur le `querySelector()` puis ensuite sur le `createRoot()`.

5. **Cliquez donc une 2e fois sur le bouton "Step Over (F10)" : la valeur de `root` est maintenant calculée, survolez le nom de la constante directement dans vscode pour voir sa valeur en live !**

	> _le contenu de cette constante est un peu obscur car il s'agit un peu des entrailles de ReactDOM, mais vous pourrez quand même remarquer dans la propriété `root._internalRoot.containerInfo` que l'on a bien notre balise `<section class="appContainer">` !_

6. **Dans le panneau de gauche** (_affiché automatiquement mais qu'on peut refaire apparaître en tapant <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>D</kbd> ou <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> puis `View: Show Run and Debug`_) **vous pouvez aussi voir toutes les variables locales**, la call stack, etc. exactement comme dans l'onglet "Sources" des devtools de Chrome !

	**Cliquez maintenant sur le bouton "Continue (F5)"** pour poursuivre l'exécution normale du reste du code JS, la page doit maintenant s'afficher dans Chrome.

**Une fois que vous avez testé ça, pensez à enlever le point d'arrêt de la ligne 6 !**

> _**NB1 :** même si vous utilisez le debug dans vscode, **les devtools de Chrome continuent de fonctionner** et sont même **synchronisés avec vscode** (les actions dans une interface se répercutent dans l'autre !)_

> _**NB2 :** Si vous souhaitez plus d'informations sur les possibilités offertes par ce mode debug, je vous invite à faire un tour sur la **doc officielle** ici : https://code.visualstudio.com/docs/nodejs/browser-debugging_

## Étape suivante <!-- omit in toc -->
Une fois cette partie terminée, passons à quelques exercices avancés dans la partie [F. Pour aller plus loin](F-optimisations.md).