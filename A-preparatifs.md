<img src="images/readme/header-small.jpg" >

# A. Préparatifs <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [A.1. Récupération du projet](#a1-récupération-du-projet)
- [A.2. Lancement du serveur HTTP](#a2-lancement-du-serveur-http)

## A.1. Récupération du projet

1. **Récupérez les fichiers de ce TP grâce à Git : clonez ce repo dans un dossier de votre choix** (_dans mon exemple `chemin/vers/votre/workspace/tp1`_):
	```bash
	cd chemin/vers/votre/workspace
	git clone git@github.com:formation-react/tp1.git
	```
	> <details><summary>⚠️ <em>Si vous êtes sous <strong>Windows</strong> attention aux slashs...</em></summary>
	>
	> _ici je clone dans le dossier `chemin/vers/votre/workspace/tp1`. **Si vous êtes sous Windows faites attention aux slashs dans le chemin du dossier** : utilisez **Git bash** (qui comprend cette syntaxe) ou si vous tenez vraiment à utiliser **cmd** ou **powershell** pensez à adapter la commande en les remplaçant par des antislash `\` !_
	> </details>

	> <details><summary>ℹ️ <em>Si vous préférez <strong>cloner en https</strong>...</em></summary>
	>
	> _Comme pour le TP0, adaptez l'URL du repo en clonant à partir de cette URL : `https://github.com/formation-react/tp1.git`_
	> </details>

2. **Ouvrez le projet dans VSCodium** (pour les différentes façons d'ouvrir le projet, relisez les [instructions du TP0](https://github.com/formation-react/tp0/blob/github/A-preparatifs.md#a4-ouvrir-le-projet-dans-vscodium) )
	```bash
	codium chemin/vers/votre/workspace/tp1
	```
	> ℹ️ _Si vous utilisez VSCode, la commande `codium` doit être remplacée par `code`_

## A.2. Lancement du serveur HTTP

**Comme dans le précédent TP (cf. [TP0 / B.1. Lancement d'un serveur HTTP](https://github.com/formation-react/tp0/blob/github/B-integration.md#b1-lancement-dun-serveur-http) ) lancez un serveur HTTP dans un terminal intégré de VSCodium :**

1. **Ouvrez un terminal intégré dans VSCodium** en tapant <kbd>CTRL</kbd>+<kbd>J</kbd> (PC) / <kbd>CMD</kbd>+<kbd>J</kbd> (Mac) (ou <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> puis `View: toggle panel`).

2. **Lancez un serveur http** :
	```bash
	npx serve -l 8000
	```

3. **Vérifiez dans le navigateur que la page `index.html` s'affiche correctement et que le message "Welcome to REACTube" s'affiche dans la console** en ouvrant l'url http://localhost:8000.

	Le résultat attendu est le suivant :

	> <details><summary>🚧 <em>Si la page ne s'affiche pas correctement...</em></summary>
	>
	> _Vérifiez que vous avez bien lancé le serveur http dans le dossier du projet, c'est à dire celui où se trouve le fichier `index.html`. Puis vérifiez dans la `Console` ou dans l'onglet `Sources` (Chrome) ou `Debugger` (Firefox) qu'l n'y a pas d'erreur JS lorsque la page se charge._
	> </details>

	<img src="images/readme/screen-00.png">


## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [B. Typescript](B-typescript.md)