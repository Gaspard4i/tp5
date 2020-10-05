<img src="images/readme/header-small.jpg" >

# B. Imbrication & props <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [B.1. VideoThumbnail](#b1-videothumbnail)
- [B.2. Function Components](#b2-function-components)
- [Étape suivante](#étape-suivante)

***Maintenant que votre environnement de développement est prêt, que votre serveur http tourne, nous allons modifier notre application pour mettre en oeuvre le principe d'imbrication et la technique des props.***

## B.1. VideoThumbnail

Actuellement notre VideoList contient tout le JSX associé aux vignettes ce qui alourdi inutilement le composant (dans l'absolu, le boulot de la VideoList c'est de rendre une liste de vignette, peu importe ce que les vignettes contiennent, ce n'est pas vraiment son affaire).

On va donc externaliser ce code dans un autre composant qu'on va appeler `VideoThumbnail`.

1. **Créez un composant `VideoThumbnail` dans un module `src/VideoThumbnail.js`.**

2. **Externalisez dans `VideoThumbnail` le JSX de chaque vignette de vidéo** (tout le `<a href>...</a>`)


## B.2. Function Components
Pour rappel React permet de déclarer ses composants non seulement sous forme de classe comme on l'a fait jusqu'ici mais aussi sous la forme de simples fonctions : on parle alors de **"Function Components"**.

Imaginons ce Class Component :
```jsx
class Link extends React.Component {
	render() {
		return (
			<a href={this.props.url}>
				{this.props.label}
			</a>
		);
	}
}
```
Il ne contient qu'une méthode `render()` et rien d'autre. C'est typiquement le genre de composant qu'il est intéressant de transformer en **Function Component**. Le composant peut alors s'écrire de cette façon :
```jsx
function Link( props ) {
	return (
		<a href={props.url}>
			{props.label}
		</a>
	);
}
```
Plus de `class`, plus de méthode `render`, le composant **devient** la méthode render ! On notera que comme on n'est plus dans une classe, on n'accède plus au props via `this.props` mais directement depuis les paramètres de la fonction !

Et avec un petit coup de [destructuring](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition) et de [arrow function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es) par dessus, on peut encore simplifier l'écriture et la rendre encore plus élégante :

```jsx
const Link = ({ url, label }) => (
	<a href={url}>
		{label}
	</a>
);
```
_**Ces rappels étant faits, appliquons ce principe à quelques composants de notre application**_

1. **Transformez si ce n'est pas déjà le cas, le composant `VideoThumbnail` en *"function component"*.**
2. **Faites de même pour le composant `Menu`.**




## Étape suivante
Une fois cette partie terminée, voyons comment utiliser conjointement React et l'API DOM : [C. React & l'API DOM](C-api-dom.md).