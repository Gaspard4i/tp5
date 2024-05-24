<img src="images/readme/header-small.jpg" >

# A. Préparatifs <!-- omit in toc -->

Vous commencez maintenant à avoir l'habitude, je ne rentrerai donc pas dans les détails mais voici les différentes étapes pour le lancement du projet en mode [TL;DR](https://en.wiktionary.org/wiki/tl;dr)

1. **Commencez par fork le TP sur https://framagit.org/cours-react/tp3/-/forks/new**

	- **placé dans VOTRE profil utilisateur** (`namespace`)
	- **en mode "private"** (`Visibility Level`)
	- ⚠️ **ajoutez-moi en `"reporter"`** ⚠️

2. **Tapez dans un terminal :**
	```bash
	mkdir ~/tps-react
	git clone https://framagit.org/<votre-username>/tp3.git ~/tps-react/tp3
	codium ~/tps-react/tp3
	```
3. **Puis dans un terminal intégré de VSCodium :**
	```bash
	npm i
	npm start
	```
	> _**NB1 :** comme vu au TP précédent, `npm i ...` est un raccourci pour `npm install ...`_

	> _**NB2 :** si vous souhaitez plus de précisions sur les commandes précédentes et l'installation  / configuration du projet, vous pouvez vous référer au chapitre [A. Préparatifs](https://framagit.org/cours-react/tp2/-/blob/master/A-preparatifs.md) du TP2 ou simplement demander de l'aide au formateur_ 😄

4. **Pour afficher votre site, plutôt que d'ouvrir vous-même votre navigateur, utilisez la fonctionnalité de debug dans VSCode configurée lors du précédent TP :**

	> _Ce repo contient déjà un fichier `.vscode/launch.json` avec les configurations pour Chrome, Firefox et Chromium. Si vous n'aviez pas pu faire cette partie du précédent TP, je vous invite -avant de continuer la suite de ce TP- à reprendre le mini tutoriel du TP2 pour finaliser votre config et prendre en main cet outil : https://framagit.org/cours-react/tp2/-/blob/master/E-debug-vscode.md_

	Pour lancer votre site en mode "debug dans vscode", tapez <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> puis sélectionnez `"Debug: Select and start debugging"` ou appuyez simplement sur la touche <kbd>F5</kbd>.

	Choisissez le navigateur que vous souhaitez lancer (_Chrome, Firefox ou Chromium_), une nouvelle fenêtre de votre navigateur doit s'ouvrir (_on considérera pour la suite que c'est Chrome que vous avez choisi_).

5. **Vérifiez dans le navigateur qui s'est ouvert que la page `index.html` s'affiche correctement** :

	<img src="images/readme/screen-00.png" >


## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [B. useState](B-usestate.md)