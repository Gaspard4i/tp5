<img src="images/readme/header-small.jpg" >

# C. Plus de hooks !  <!-- omit in toc -->

**Maintenant que l'on maîtrise les deux hooks de base de React, allons y et convertissons l'ensemble de nos composants restants aux hooks !**

## Sommaire <!-- omit in toc -->
- [C.1. useRef() & VideoDetail](#c1-useref-videodetail)
- [C.2. VideoForm](#c2-videoform)
- [C.3. CommentForm](#c3-commentform)

## C.1. useRef() & VideoDetail
**En vous inspirant de ce que vous avez déjà fait sur `Navigator` et `VideoList` convertissez maintenant `VideoDetail` en function component !**

Vous aurez besoin pour cela des hooks déjà vu comme [useState()](https://reactjs.org/docs/hooks-reference.html#usestate), [useEffect()](https://reactjs.org/docs/hooks-reference.html#useeffect) **mais aussi du hook [useRef()](https://reactjs.org/docs/hooks-reference.html#useref) pour remplacer `this.player`** (_référence vers la balise `<video>`_)

> _**NB :** contrairement au state de `Navigator`, les deux states de `VideoDetail` sont indépendants c'est à dire qu'ils ne sont pas mis à jour en même temps, je vous recommande donc d'utiliser 2 `useState()` distincts : 1 pour `video` et 1 autre pour `comments`._

## C.2. VideoForm
**Attaquons-nous maintenant au composant `VideoForm`.**

Rien de très spécial ici : du [useState()](https://reactjs.org/docs/hooks-reference.html#usestate) et du [useRef()](https://reactjs.org/docs/hooks-reference.html#useref) par-ci, par-là.

## C.3. CommentForm
**Enfin, un dernier (facile) pour la route : convertissez la classe `CommentForm` en function component**.

Cette fois rien de neuf, donc je ne vous donne pas d'indice ! :)
