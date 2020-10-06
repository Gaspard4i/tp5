<img src="images/readme/header-small.jpg" >

# B. Les bases de Redux <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [Avertissement ! ⚠️](#avertissement-️)
- [B.1. Installation de redux](#b1-installation-de-redux)
- [B.2. Accéder au state en lecture : la VideoList](#b2-accéder-au-state-en-lecture-la-videolist)
- [B.3. Redux devtools](#b3-redux-devtools)
- [B.4. Modifier le state grâce aux actions](#b4-modifier-le-state-grâce-aux-actions)
- [B.5. Pour aller plus loin](#b5-pour-aller-plus-loin)

## Avertissement ! ⚠️
*Si développer une application Redux en partant de zéro est assez aisé, convertir un projet existant pour y intégrer redux n'est pas si simple : beaucoup de modifications sont à apporter au code avant de pouvoir tester le résultat.*

*Il ne sera donc possible de tester le bon fonctionnement de vos modifications **qu'après avoir tout converti** ! <br>Alors, accrochez vous, c'est parti !*


## B.1. Installation de redux
1. **Installez redux et react-redux**
    ```bash
    npm i redux react-redux
    ```
1. **Réorganisez les fichiers selon la structure suivante** et modifiez les imports en conséquence :
	```bash
	src/
	  ├─ app.js
	  ├─ components/
	  │   ├─ Menu.js
	  │   ├─ CommentForm.js
	  │   ├─ CommentRenderer.js
	  │   └─ VideoThumbnail.js
	  ├─ containers/
	  │   ├─ Navigator.js
	  │   ├─ VideoDetail.js
	  │   ├─ VideoForm.js
	  │   └─ VideoList.js
	  └─ reducers/
	```

## B.2. Accéder au state en lecture : la VideoList
1. **Créez un fichier `reducers/index.js` et codez-y le state par défaut de l'application, comme ceci** :
	+ Créez une constante `defaultState`
		+ affectez lui comme valeur un objet avec une propriété `videos` (cette propriété `videos` remplacera à terme le state de la `VideoList`).
		+ dans cette propriété `videos`, injectez un tableau vide.
	+ Toujours dans ce fichier `index.js` exportez (par défaut) une fonction anonyme qui recevra en paramètre :
		* un objet `state` (*avec comme valeur par défaut la constante `defaultState` définie juste au dessus*),
		* et un objet `action` (*qui recevra l'action dispatchée par l'action creator*)
	+ cette fonction retourne le state reçu en paramètre, tel quel, sans lui appliquer de modifications (**pour l'instant !**).

2. **Connectez `VideoList` au store** :
	+ **supprimez** le state local (`this.state`) et **commentez** le `componentDidMount()` (_on le modifiera par la suite_)
	+ récupérez le state `videos` du store à l'aide du décorateur `connect` et de la fonction `mapStateToProps()`
	+ modifiez la méthode `render()` en conséquence (disparition de `this.state`)

3. **Modifiez le fichier `app.js`** :
	+ créez le store de l'application à l'aide de la fonction `createStore( reducer )`
	+ Dans l'appel à la méthode `render()`, utilisez le composant `<Provider>` autour du `Navigator`. Cela permettra au `connect()` de rendre le `state` redux accessible dans la `VideoList` (*n'oubliez pas de passer le `store` au `Provider` !*).

_**A ce stade, la compilation doit fonctionner et le site s'afficher sans erreur dans la console !**_

<img src="images/readme/screen-01.png" />

_**En revanche on constate que la VideoList est vide et le loader ne disparaît pas.**_
<br>**Pas de panique :** c'est tout à fait normal, puisque le state par défaut contenu dans le store a été **initialisé avec un tableau vide** (_cf. B.2.1._) !

Pour s'assurer que votre code fonctionne tout de même, **ajoutez des vidéos en dur dans le defaultState** du reducer (_vous pouvez copier/coller des videos depuis le fichier [`data.js` des précédents TPs](https://framagit.org/formation/react/tp2/-/blob/master/src/data.js)_) : si tout se passe bien, les vidéos que vous avez mis dans le `defaultState` doivent s'afficher dans la `VideoList` !

<img src="images/readme/screen-02.png" />

<br><br>

## B.3. Redux devtools
Avant d'aller plus loin dans ce TP on va prendre quelques secondes pour installer l'extension Redux Devtools. Cette extension est indispensable pour travailler efficacement avec Redux pour plein de raisons (_aide à l'identification de l'orgine des bugs, time travel, export/import, etc._).

1. **Installez l'extension [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) dans votre navigateur**, puis configurez le store pour permettre à l'extension Redux Devtools d'inspecter votre appli :
	```js
	import { createStore, compose } from 'redux';

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore( reducer, composeEnhancers() );
	```

	*Plus d'infos sur l'installation et la configuration de Redux Devtools : https://github.com/zalmoxisus/redux-devtools-extension*

2. Une fois Redux Devtools configuré dans le store, et l'extension installée dans votre navigateur, **vous pouvez lancer le site, ouvrir les devtools du navigateur et y trouver un onglet "Redux"** (_si vous ne voyez pas l'onglet "Redux", fermez puis relancez votre navigateur_)

	Vous pouvez y voir les actions qui sont lancées par votre appli (*pour le moment une seule, l'action `@@INIT`*) et inspecter le contenu du state global !

	<img src="images/readme/screen-03.png" />

## B.4. Modifier le state grâce aux actions
_**Maintenant que l'on est capable d'accéder en lecture au contenu du store et que l'on est équipés en outil de debug, nous allons nous atteler à la modification du store grâce aux actions et au reducer**._

Pour cela nous allons repartir d'un tableau vide dans le state par défaut et le remplir à l'aide d'une action déclenchée à la fin de l'appel ajax vers l'api `GET /api/videos`.

**Concrètement, on aura dans l'ordre :**
1. **Un premier render** avec une liste vide (_et donc le loader_)
2. Le déclenchement de l'**appel AJAX** vers l'api `GET /api/videos`
3. Une fois les données récupérées, le **dispatch d'une action** par la VideoList avec, dans l'action, le tableau des vidéos retourné par l'api
4. Le **remplissage du state par le reducer** (_grâce aux données contenues dans l'action_)
5. Enfin, **un nouveau `render()` avec cette fois la liste remplie** (_grâce à la mise à jour du state par le reducer à l'étape 4_)

**C'est le fonctionnement "classique" d'une application web** : au lancement la plupart des applis récupèrent des données depuis un webservice distant, et se mettent à jour une fois les données reçues.

_**Si vous avez compris l'idée, allons-y :**_

1. **Au lieu de mettre en dur la liste des vidéos dans le `reducer`, nous allons maintenant démarrer avec un `defaultState` vide**. C'est l'action que la `VideoList` var déclencher qui lui enverra la liste des vidéos : remettez donc un tableau vide dans la propriété `videos` du `defaultState`

2. **Dé-commentez le `componentDidMount()` du composant `VideoList` et à la fin de l'appel AJAX** (_dans le dernier `.then()` du fetch_)
	+ Créez une variable nommée `action` contenant un objet littéral avec deux propriétés :
		* Une propriété `type` qui vaudra la chaîne de caractères `'VIDEO_LIST_COMPLETE'`
		* Une propriété `videos` qui aura comme valeur le tableau retourné par le serveur
	+ Envoyez l'action au store à l'aide de la méthode `this.props.dispatch` (_injectée par le `connect()`_) :
  		```js
		this.props.dispatch( action );
		```

3. **Dans le reducer (`reducers/index.js`) prenez en charge cette action** :
	+ Testez si le type de l'action reçue correspond à `'VIDEO_LIST_COMPLETE'`
	+ Retournez un **nouveau state** (_**attention, on ne modifie jamais directement le state reçu, on en retourne un nouveau à chaque fois !**_) en y injectant la propriété  `action.videos`

<br>

_**Ca y est ! Vous pouvez à nouveau tester l'application, la VideoList doit se remplir après l'affichage initial. Au niveau fonctionnel, rien n'a changé par rapport à l'avant Redux, mais du point de vue architecture et robustesse du code, on se sent bien mieux !**_ :sweat_smile:

<img src="images/readme/screen-04.png" />

**Si vous avez survécu jusque là, bravo !** :beers:

Récapitulons. On a pu voir comment :
- installer redux
- réorganiser le projet
- lire les informations qui se trouvent dans le state redux grâce au mapStateToProps
- modifier le state grâce aux actions

Il nous reste encore quelques optimisations à voir en cours avant d'aller [plus loin dans ce TP](./C-optimisations.md). En attendant la suite des slides donc, voici de quoi vous entrainer :

## B.5. Pour aller plus loin
1. Convertissez le `Navigator` à redux :
   - créez un state global `router` en remplacement du state local du `Navigator`
   - pour changer de page, les composants dispatchent une action de type `'HISTORY_PUSH'` avec des propriétés `screen` et `params`
2. Convertissez à son tour `VideoDetail` à Redux
3. Externalisez le code de création du store dans un fichier `store/configureStore.js`

