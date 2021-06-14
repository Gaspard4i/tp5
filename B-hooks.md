<img src="images/readme/header-small.jpg" >

# B. Hooks de base <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [B.1. useState()](#b1-usestate)
- [B.2. useEffect()](#b2-useeffect)

## B.1. useState()
**À l'aide du pdf du cours, convertissez la classe `Navigator` en function component** en utilisant le hook **[useState](https://reactjs.org/docs/hooks-reference.html#usestate)** pour remplacer le `state` local et les instructions `this.setState()`.

> _**NB :** comme le state de `Navigator` contient 2 valeurs qui sont liées et toujours mises à jour ensemble, je vous recommande d'utiliser un seul `useState()` avec à l'intérieur un objet contenant les 2 propriétés `currentPage` et `params`. Cela permet en outre d'éviter des problèmes de [double render liés aux batch updates](https://github.com/facebook/react/issues/14259)._

Vous devriez en principe remarquer rapidement que le nouveau code est beaucoup plus léger que le précédent alors que pourtant on n'a rien perdu en fonctionnalité ! C'est l'un des avantages majeurs des function components avec les hooks : un code moins verbeux et où le code "important" est mieux mis en avant.

## B.2. useEffect()
**Convertissez ensuite `VideoList` en function component**.

Vous aurez là aussi besoin du hook [useState()](https://reactjs.org/docs/hooks-reference.html#usestate) vu précédemment pour remplacer `this.state.videos`.

**Mais pour remplacer le `componentDidMount()` vous aurez aussi besoin d'un autre hook fourni de base par React : [useEffect()](https://reactjs.org/docs/hooks-reference.html#useeffect)**

> _**NB : souvenez vous,** dans un function component, les props sont passées en paramètre à la fonction au lieu d'être dans le `this` (qui n'est plus utilisable, puisqu'on n'est plus dans une classe !) :_
> ```jsx
> function MyComponent(props) {
> 	return `My name is ${props.name}`;
> }
> ```
> _Je vous conseille surtout d'utiliser le **destructuring** des props directement dans la signature de la fonction, ça fera gagner beaucoup en lisibilité à votre code et surtout l'IDE pourra vous offrir l'auto complétion des props du composant quand vous allez l'instancier en JSX :_
> ```jsx
> function MyComponent( {name} ) {
> 	return `My name is ${name}`;
> }
> ```

## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [C. plus de hooks](C-plus-de-hooks.md)
