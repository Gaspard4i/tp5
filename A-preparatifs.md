<img src="images/readme/header-small.jpg" >

# A. Préparatifs <!-- omit in toc -->

Vous commencez maintenant à avoir l'habitude, je ne rentrerai donc pas dans les détails mais voici les différentes étapes pour le lancement du projet en mode [TL;DR](https://en.wiktionary.org/wiki/tl;dr)

1. **Tapez dans un terminal :**
	```bash
	cd chemin/vers/votre/workspace
	git clone https://framagit.org/formation/react/tp3.git
	codium tp3
	```
2. **Puis dans un terminal intégré de VSCodium :**
	```bash
	npm i
	npm start
	```
	> ℹ️ _Comme vu au TP précédent, `npm i ...` est un raccourci pour `npm install ...`_

	> ℹ️ _Si vous souhaitez plus de précisions sur les commandes précédentes et l'installation  / configuration du projet, vous pouvez vous référer au chapitre [A. Préparatifs](https://framagit.org/formation/react/tp2/-/blob/master/A-preparatifs.md) du TP2 ou simplement me demander de l'aide_ 😄

3. **Dans un [terminal splitté](https://code.visualstudio.com/docs/terminal/basics#_groups-split-panes)** (_côte à côte avec `npm start`_) lancez le compilateur TypeScript pour vérifier le typage de votre code :

	```bash
	npx tsc --watch
	```

4. **Pour afficher votre site, plutôt que d'ouvrir vous-même votre navigateur, utilisez la fonctionnalité de debug dans VSCode configurée lors du précédent TP :**

	> ℹ️ _Ce repo contient déjà un fichier `.vscode/launch.json` avec les configurations pour Chrome et Chromium._

	> <details><summary>⚠️ <em>Si vous n'avez pas fait la partie "E. Debugger dans vscode" du TP2...</em></summary>
	>
	> _Je vous invite -avant de continuer la suite de ce TP- à reprendre le mini tutoriel du TP2 pour finaliser votre config et prendre en main cet outil : https://framagit.org/formation/react/tp2/-/blob/master/E-debug-vscode.md_
	> </details>

	Pour lancer votre site en mode "debug dans vscode", tapez <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> puis sélectionnez `"Debug: Select and start debugging"` ou appuyez simplement sur la touche <kbd>F5</kbd>.

	Choisissez le navigateur que vous souhaitez lancer (_Chrome ou Chromium_), une nouvelle fenêtre de votre navigateur doit s'ouvrir (_on considérera pour la suite que c'est Chrome que vous avez choisi_).

5. **Vérifiez dans le navigateur qui s'est ouvert que la page `index.html` s'affiche correctement** :

	<img src="images/readme/screen-00.png" >


## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [B. useState](B-usestate.md)