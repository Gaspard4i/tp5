<img src="images/readme/header-small.jpg" >

# A. Préparatifs <!-- omit in toc -->

**Ce repo contient une solution commentée du précédent TP.** <br>
Pour ce TP vous pouvez soit repartir de vos fichiers du précédent TP (si vous l'aviez terminé) ou bien cloner ce repo et vous en servir comme base pour ce TP.

> _**NB :** Si vous repartez de vos fichiers, **pensez à faire un `git pull`** pour récupérer les dernières modifications du repo (probablement des modifs de CSS ou des corrections de dernière minute)._

Vous commencez maintenant à avoir l'habitude, je ne rentrerais donc pas dans les détails mais voici les différentes étapes pour le lancement du projet en mode [TL;DR](https://en.wiktionary.org/wiki/tl;dr)

1. **Tapez dans un terminal :**
	```bash
	mkdir ~/tps-react
	git clone https://framagit.org/formation/react/tp3.git ~/tps-react/tp3
	codium ~/tps-react/tp3
	```
2. **Puis dans 2 terminaux splittés de VSCodium :**
	```bash
	npx serve -l 8000
	```
	et
	```bash
	npm i
	npm run watch
	```

> _**NB :** si vous souhaitez plus de précisions sur les commandes précédentes et l'installation  / configuration du projet, vous pouvez vous référer au chapitre [A. Préparatifs](https://framagit.org/formation/react/tp2/-/blob/master/A-preparatifs.md) du TP2 ou simplement demander de l'aide au formateur_ 😄

Le résultat attendu est le suivant :

<img src="images/readme/screen-00.png" >

## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [B. Imbrication & props](B-imbrication.md)