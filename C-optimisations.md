<img src="images/readme/header-small.jpg" >

# C. Optimisations <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [C.1. Les action creators](#c1-les-action-creators)
- [C.2. Redux-thunk & les action creators asynchrones](#c2-redux-thunk-les-action-creators-asynchrones)
- [C.3. CombineReducers](#c3-combinereducers)

## C.1. Les action creators
*Maintenant que l'on est capable d'agir sur le contenu du store à l'aide d'une **action**, nous allons optimiser l'écriture de notre code grâce à un action creator.*

1. **Dans un premier temps nous allons externaliser la création de notre action dans un module à part de la vue** (meilleure répartition des responsabilités). Nous allons donc coder un **"action creator"** (*fonction de création d'action*) :
	+ Créez un fichier `actions/videos.js`
	+ Codez et exporter une fonction nommée `fetchVideos()` qui retournera le même objet que l'action actuellement dispatchée dans le `componentDidMount` de la `VideoList`
	+ Pour la propriété `type` de l'action retournée, plutôt que d'utiliser une chaîne de caractères en dur, créez et exportez une constante `VIDEO_LIST_COMPLETE` dont la valeur sera la chaîne de caractères `'VIDEO_LIST_COMPLETE'`. Utilisez cette constante dans le `type` de l'action retournée.

2. **Dans `VideoList` lancez l'action creator `fetchVideos` au `componentDidMount()`**

3. **Dans le reducer (`reducer/index.js`) prenez en charge l'action dispatchée par l'action creator `fetchVideos()` :**
	+ importez la constante `VIDEO_LIST_COMPLETE` de l'action creator
	+ testez si le type de l'action reçue correspond à la constante `VIDEO_LIST_COMPLETE`
	+ retournez le nouveau state en y injectant la propriété `action.videos`

Si tout s'est bien passé, ça fonctionne toujours comme avant, mais on a pu maintenant décharger notre vue `VideoList` de la récupération des données (*ce qui n'est effectivement pas le travail d'une vue*).

## C.2. Redux-thunk & les action creators asynchrones
*Maintenant que l'on a créé notre premier action creator, nous allons en profiter pour en faire un **action creator asynchrone**. Ca tombe plutôt bien, puisque l'on doit réintégrer l'appel AJAX vers l'API REST.*

1. Comme vu dans le cours, `redux-thunk` va permettre de créer des action creators asynchrones, utiles pour faire des appels ajax notamment. **Installez donc `redux-thunk` :**
    ```bash
	npm i redux-thunk
    ```
2. **Pour que l'action creator puisse communiquer avec les webservices et faire des dispatch asynchrone, il faut ajouter le middleware `redux-thunk` au store** :
	```js
	import { applyMiddleware } from 'redux';
	import thunk from 'redux-thunk';
	// reste des imports ...

	const store = createStore(
		reducer,
		composeEnhancers(
			applyMiddleware(thunk)
		)
	);
    ```
3. **Modifiez l'action creator `fetchVideos()` (`src/actions/videos`) pour lancer un appel ajax** :
	+ Au lieu de retourner directement une action, retournez une fonction anonyme
	+ Dans cette fonction anonyme, lancez avec fetch l'appel ajax vers le webservice `api/videos`
	+ Une fois la réponse de l'API reçue, dispatchez une action (*à l'aide de la fonction `dispatch` passée en paramètre de votre fonction anonyme*) dans laquelle la propriété `videos` correspond au tableau retourné par le webservice.

***Ca y est ! Vous pouvez à nouveau tester l'application, cette fois l'appel ajax doit se lancer et le résultat s'afficher dans la VideoList. Bon, au niveau fonctionnel, rien n'a changé par rapport au précédent TP, mais du point de vue architecture et robustesse du code, on se sent bien mieux !*** :sweat_smile:

<br>*Notez dans Redux Devtools l'apparition de l'action et le résultat sur le state.*

## C.3. CombineReducers
Si vous avez déjà réalisé l'exercice [B.4. Pour aller plus loin]() du précédent chapitre (conversion à Redux du `Navigator` et du `HousingDetail`) alors vous pouvez scinder le reducer en plusieurs "petits" reducers (un par state) à l'aide de la fonction `combineReducers`.

Si vous n'avez pas fait cet exercice, alors c'est le moment de s'y mettre !
