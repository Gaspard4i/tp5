<img src="images/readme/header-small.jpg" >


# A. Préparatifs <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [A.1. Récupération du projet](#a1-récupération-du-projet)
- [A.2. Lancement de l'API REST](#a2-lancement-de-lapi-rest)



## A.1. Récupération du projet
Vous commencez maintenant à avoir l'habitude, je ne rentrerais donc pas dans les détails mais voici les différentes étapes pour le lancement du projet en mode [TL;DR](https://en.wiktionary.org/wiki/tl;dr)

1. **Tapez dans un terminal :**
	```bash
	mkdir ~/tps-react
	git clone git@github.com:formation-react/tp5.git ~/tps-react/tp5
	codium ~/tps-react/tp5
	```
2. **Puis dans un terminal intégré de VSCodium** (<kbb>CTRL/Cmd</kbd>+<kbd>J</kbd>) :
	```bash
	npm i
	npm start
	```

> _**NB :** si vous souhaitez plus de précisions sur les commandes précédentes et l'installation  / configuration du projet, vous pouvez vous référer au chapitre [A. Préparatifs](https://github.com/formation-react/tp2/blob/github/A-preparatifs.md) du TP2 ou simplement demander de l'aide au formateur_ 😄

Le résultat attendu est le suivant :

<img src="images/readme/screen-00.png" >

## A.2. Lancement de l'API REST
Dans ce TP on va enfin connecter notre appli web à une base de données grâce à l'API REST que l'on a installée lors du TP0 (cf. [TP0 : C. Serveur API REST](https://github.com/formation-react/tp0/blob/github/C-serveur-rest.md)).

C'est donc le moment de lancer le serveur Node / Express qui fait tourner l'API :
```bash
cd ~/tps-react/api-server
npm start
```

**Vérifiez que l'API tourne bien en ouvrant http://localhost:8080/api/videos dans votre navigateur.** Si tout se passe bien vous devez voir un JSON s'afficher avec des vidéos dedans :

<img src="images/readme/screen-01.png" >


## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [B. AJAX](B-ajax.md)