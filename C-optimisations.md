<img src="images/readme/header-small.jpg" >

# C. Optimisations <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [C.1. Les action creators](#c1-les-action-creators)
- [C.2. Redux-thunk & les action creators asynchrones](#c2-redux-thunk-les-action-creators-asynchrones)
- [C.3. Pour aller plus loin : CombineReducers](#c3-pour-aller-plus-loin-combinereducers)

## C.1. Les action creators
_Maintenant que l'on est capable d'agir sur le contenu du store à l'aide d'une **action**, nous allons optimiser l'écriture de notre code grâce à un action creator._

1. **Dans un premier temps nous allons externaliser la création de notre action dans un module à part de la vue** (meilleure répartition des responsabilités). Nous allons donc coder un **"action creator"** (*fonction de création d'action*) :
	+ Créez un fichier `actions/videos.js`
	+ Codez et exportez une fonction nommée `fetchVideos(data)` qui retournera le même objet que l'action actuellement créée dans le `componentDidMount` de la `VideoList`
	+ Pour la propriété `type` de l'action retournée, plutôt que d'utiliser une chaîne de caractères en dur, créez et exportez une constante `VIDEO_LIST_COMPLETE` dont la valeur sera la chaîne de caractères `'VIDEO_LIST_COMPLETE'`. Utilisez cette constante dans le `type` de l'action retournée.

2. **Dans `VideoList` utilisez l'action creator `fetchVideos(data)` dans le  `componentDidMount()` en remplacement de l'obejt littéral jusque là utilisé pour construire l'action. Envoyez à `fetchVideos()` les vidéos retournées par l'appel AJAX**

3. **Dans le reducer (`reducers/index.js`) prenez en charge l'action dispatchée par l'action creator `fetchVideos()` :**
	+ importez la constante `VIDEO_LIST_COMPLETE` de l'action creator
	+ testez si le type de l'action reçue correspond à la constante `VIDEO_LIST_COMPLETE`
	+ retournez le nouveau state en y injectant la propriété `action.videos`

_Si tout s'est bien passé, tout fonctionne toujours comme avant, mais on a pu **alléger le code de notre vue** (`VideoList`) et **simplifier la création de l'action**._

## C.2. Redux-thunk & les action creators asynchrones
_**Maintenant que l'on a créé notre premier action creator, nous allons en profiter pour en faire un action creator asynchrone**. Cela nous permettra de décharger complètement notre vue de la **manipulation des données** ce qui n'est clairement **PAS le travail d'une vue.**_

1. Comme vu dans le cours, `redux-thunk` va permettre de créer des action creators asynchrones, utiles pour faire des appels ajax notamment. **Installez donc `redux-thunk` :**
    ```bash
	npm i redux-thunk
    ```
2. Pour que l'action creator puisse communiquer avec les webservices et faire des dispatch asynchrones, **il faut ajouter le middleware `redux-thunk` au store** :
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
3. **Dans la `VideoList`, débarrassez le `componentDidMount` de l'appel AJAX et ne conservez que le dispatch de `fetchVideos()`** (_sans paramètre_) :

	```js
	componentDidMount(){
		const action = fetchVideo();
		this.props.dispatch(action);
	}
	```

	> _**NB :** L'appel AJAX que l'on avait avant a totalement disparu de la vue et va maintenant être géré par l'action creator lui même !_

4. **Modifiez l'action creator `fetchVideos()` (`src/actions/videos`) pour lancer un appel AJAX** :
	+ Au lieu de retourner directement une action, retournez une fonction anonyme
	+ Dans cette fonction anonyme, lancez avec fetch l'appel ajax vers le webservice `api/videos`
	+ Une fois la réponse de l'API reçue, dispatchez une action (_à l'aide de la fonction `dispatch` reçue en paramètre de votre fonction anonyme_) dans laquelle la propriété `videos` correspond au tableau retourné par le webservice.

	```js
	export function fetchVideos() {
		return function (dispatch) {
			fetch(`${apiPath}/videos`)
				.then(response => response.json())
				.then(data => {
					const action = { type: VIDEO_LIST_COMPLETE, videos: data };
					dispatch(action);
				});
		};
	}
	```

***Ca y est ! Vous pouvez à nouveau tester l'application, l'appel ajax doit se lancer et le résultat s'afficher dans la VideoList. Bon, au niveau fonctionnel, rien n'a changé par rapport au précédent TP, mais du point de vue architecture et robustesse du code, on se sent bien mieux : la vue ne manipule plus directement les données et ne fait plus d'appel AJAX !*** :sweat_smile:

## C.3. Pour aller plus loin : CombineReducers
Si vous avez déjà réalisé l'exercice *B.4. Pour aller plus loin* du précédent TP (*conversion à Redux du `Navigator` et du `VideoDetail`*) alors vous pouvez scinder le reducer en plusieurs "petits" sous-reducers (*un par state*) à l'aide de la fonction `combineReducers`.

Si vous n'avez pas fait cet exercice, alors c'est le moment de s'y mettre !
