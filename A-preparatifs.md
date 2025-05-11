<img src="images/readme/header-small.jpg" >

# A. Préparatifs <!-- omit in toc -->

Vous commencez maintenant à avoir l'habitude, je ne rentrerai donc pas dans les détails mais voici les différentes étapes pour le lancement du projet en mode [TL;DR](https://en.wiktionary.org/wiki/tl;dr)

1. **Tapez dans un terminal :**
	```bash
	cd chemin/vers/votre/workspace
	git clone git@github.com:formation-react/tp4.git
	codium tp4
	```
2. **Puis dans un terminal intégré de VSCodium** (<kbb>CTRL/Cmd</kbd>+<kbd>J</kbd>) :
	```bash
	npm i
	npm start
	```

> ℹ️ _Si vous souhaitez plus de précisions sur les commandes précédentes et l'installation  / configuration du projet, vous pouvez vous référer au chapitre [A. Préparatifs](https://github.com/formation-react/tp2/blob/github/A-preparatifs.md) du TP2 ou simplement me demander de l'aide_ 😄

3. **Dans un [terminal splitté](https://code.visualstudio.com/docs/terminal/basics#_groups-split-panes)** (_côte à côte avec `npm start`_) lancez le compilateur TypeScript pour vérifier le typage de votre code :

	```bash
	npx tsc --watch
	```

4. **Lancez votre site en mode "debug dans vscode"** : tapez <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> puis sélectionnez `"Debug: Select and start debugging"` ou appuyez simplement sur la touche <kbd>F5</kbd>.

	Le résultat attendu est le suivant :

	<img src="images/readme/screen-00.png" >


## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [B. Imbrication & props](B-imbrication.md)