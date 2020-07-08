<img src="images/readme/header-small.jpg" >

# B. Les bases de Redux <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [Avertissement ! ⚠️](#avertissement-️)
- [B.1. Installation de redux](#b1-installation-de-redux)
- [B.2. Accéder au state en lecture : la VideoList](#b2-accéder-au-state-en-lecture-la-videolist)
- [B.3. Modifier le state grâce aux actions](#b3-modifier-le-state-grâce-aux-actions)
- [B.4. Pour aller plus loin](#b4-pour-aller-plus-loin)

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
	  └─ reducer/
	```

## B.2. Accéder au state en lecture : la VideoList

1. **Créez un fichier `reducer/index.js` et codez-y le state par défaut de l'application, comme ceci** :
	+ Créez une constante `defaultState`
		+ affectez lui comme valeur un objet avec une propriété `videos` (cette propriété `videos` remplacera à terme le state de la `VideoList`).
		+ dans cette propriété `videos`, injectez un tableau vide.
	+ Toujours dans ce fichier `index.js` exportez (par défaut) une fonction anonyme qui recevra en paramètre :
		* un objet `state` (*avec comme valeur par défaut la constante `defaultState` définie juste au dessus*),
		* et un objet `action` (*qui recevra l'action dispatchée par l'action creator*)
	+ cette fonction retourne le state reçu en paramètre, tel quel, sans lui appliquer de modifications (**pour l'instant !**).

2. **Connectez `VideoList` au store** :
	+ supprimez le state local (`this.state`)
	+ récupérez à la place le state `videos` du store à l'aide du décorateur `connect` et de la fonction `mapStateToProps()`
	+ modifiez la méthode `render()` en conséquence (disparition de `this.state`)

3. **Créez le store dans le fichier `app.js`** :
	+ créez le store de l'application à l'aide de la fonction `createStore( reducer )`
	+ Dans l'appel à la méthode `ReactDOM.render(...)`, utilisez le composant `<Provider>` autour du `Navigator`. Cela permettra au `connect()` de rendre le `state` accessible à la `VideoList`. (*n'oubliez pas de passer le `store` au `Provider` !*)

A ce stade, la compilation doit fonctionner et le site se lancer sans erreur !

***En revanche la VideoList est vide et le loader ne disparait pas.*** C'est logique, puisque le state par défaut contenu dans le store a été initialisé avec un tableau vide !

Pour s'assurer que votre code fonctionne tout de même, **ajoutez des vidéos en dur dans le defaultState** du reducer : si tout se basse bien, les vidéos doivent cette fois s'afficher dans la `VideoList` !<br><br>

## B.3. Modifier le state grâce aux actions
*Maintenant que l'on est capable d'accéder en lecture au contenu du store, nous allons nous atteler à la **modification du store grâce aux actions et au reducer**.*

1. **Avant d'aller plus loin, installez l'extension [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) dans votre navigateur**, puis configurez le store pour permettre à l'extension Redux Devtools d'inspecter votre appli :
	```js
	import { createStore, compose } from 'redux';

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore( reducer, composeEnhancers() );
	```

	*Plus d'infos sur l'installation et la configuration de Redux Devtools : https://github.com/zalmoxisus/redux-devtools-extension*

2. Une fois Redux Devtools configuré et l'extension installée dans votre navigateur, **vous pouvez maintenant lancer le site, ouvrir les devtools du navigateur et y trouver un onglet "Redux"** dans lequel vous pouvez voir les actions qui sont lancées (*pour le moment une seule*) et inspecter le contenu du state global.

2. **Au lieu de mettre en dur la liste des vidéos dans le `reducer`, nous allons démarrer avec un defaultState vide**. C'est l'action que nous allons créer qui lui enverra la liste des vidéos : remettez un tableau vide dans la propriété `videos` du `defaultState`

3. **Dans le `componentDidMount()` du composant `VideoList`** :
	+ Créez une variable nommée `action` et affectez lui un objet littéral avec deux propriétés :
		* Une propriété `type` qui vaudra la chaîne de caractères `'VIDEO_LIST_COMPLETE'`
		* Une propriété `videos` qui aura comme valeur un tableau de videos en dur (*vous pouvez reprendre la liste contenue dans le fichier `data.js` des précédents tps*)
	+ Envoyez l'action au store à l'aide de la méthode `this.props.dispatch` injectée par le `connect()` :
  		```js
		this.props.dispatch( action );
		```

4. **Dans le reducer (`reducer/index.js`) prenez en charge cette action** :
	+ Testez si le type de l'action reçue correspond à `'VIDEO_LIST_COMPLETE'`
	+ Retournez un **nouveau state** (***attention, on ne modifie jamais directement le state reçu, on en retourne un nouveau à chaque fois !***) en y injectant la propriété `action.videos`

<br>

***Ca y est ! Vous pouvez à nouveau tester l'application, la VideoList doit se remplir presque immédiatement après l'affichage initial. Au niveau fonctionnel, rien n'a changé par rapport à l'avant Redux, mais du point de vue architecture et robustesse du code, on se sent bien mieux !*** :sweat_smile:

**Si vous avez survécu jusque là, bravo !** :beers:

Récapitulons. On a pu voir comment :
- installer redux
- réorganiser le projet
- lire les informations qui se trouvent dans le state redux grâce au mapStateToProps
- modifier le state grâce aux actions

Il nous reste encore quelques optimisations à voir en cours avant d'aller plus loin dans ce TP. En attendant la suite des slides donc, voici de quoi vous entrainer :

## B.4. Pour aller plus loin
1. Convertissez le `Navigator` à redux :
   - créez un state global `router` en remplacement du state local du `Navigator`
   - pour changer de page, les composants dispatchent une action de type `'HISTORY_PUSH'` avec des propriétés `screen` et `params`
2. Convertissez à son tour `VideoDetail` à Redux
3. Externalisez le code de création du store dans un fichier `store/configureStore.js`

