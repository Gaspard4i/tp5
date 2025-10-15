<img src="images/readme/header-small.jpg" >

# C. useEffect  <!-- omit in toc -->

_**Pour s'exercer à `useEffect`, je vous propose de travailler sur le composant `VideoList` : on va essayer de "simuler" un délai de chargement avant d'afficher la liste des vignettes.** Ça nous permettra d'utiliser `useEffect` et en même temps de préparer la suite de la formation, notamment pour le moment où l'on connectera notre appli à l'API REST_ 👍

## Sommaire <!-- omit in toc -->
- [C.1. Ajouter un state](#c1-ajouter-un-state)
- [C.2. Utiliser useEffect](#c2-utiliser-useeffect)


## C.1. Ajouter un state
1. Commencez par ré-afficher la `VideoList` dans le fichier `app.tsx`
2. Dans `VideoList.tsx`, créez un state nommé `videos` et initialisé avec un tableau vide (`[]`).
3. Dans le JSX, utilisez ce state `videos` à la place de `data` dans le `.map` qui génère les vignettes.

	> 🚧 _TypeScript doit se plaindre de l'`import` de `data` qui est inutilisé, vous pouvez ignorer l'erreur, vous allez bientôt utiliser à nouveau `data` et ainsi régler le problème._

	Rechargez la page, normalement les vignettes ont disparu, normal :

	<img src="images/readme/screen-02.png" >

## C.2. Utiliser useEffect

1. **Ajoutez au composant `VideoList` un appel à `useEffect` qui s'exécute uniquement après le premier render** (_mettez-y juste un console.log pour le moment_).

	> 📖 _**Rappel :** le hook [`useEffect` (_doc_)](https://react.dev/reference/react/useEffect) permet de déclencher une fonction automatiquement après le render du composant._

2. **Dans ce useEffect, utilisez la fonction [`setTimeout()`](https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) pour injecter dans le state `videos` le tableau contenu dans `data` au bout de 500 millisecondes.**

	> <details><summary>🚧 <em>Vous allez probablement avoir une erreur de typage...</em></summary>
	>
	> _En effet, votre state videos n'est pas typé, TypeScript devine donc le type en fonction de la valeur initiale que vous avez passé à useState : un tableau vide._
	>
	> _Pour typer un state, il faut utiliser la syntaxe des generics. Par exemple si vous avez un state qui doit contenir un tableau de nombres, alors vous allez faire :_
	>  ```ts
	> const [myState, setMyState] = useState<number[]>([]);
	>  ```
	> _À vous d'adapter le typage en fonction de ce qui se trouve dans `data` (💡 indice : jetez peut-être un oeil à `/src/types.ts`...)._
	> </details>

	> <details><summary>⚠️ <em>Risque de boucle infinie ! </em>⚠️</summary>
	> _**N'oubliez pas que la fonction qu'on passe à `useEffect` se lance par défaut après CHAQUE render !!**. Si on n'y prend pas garde, on a vite fait de tomber dans une **boucle infinie** (1er render > useEffect > mise à jour d'un state > re-render > re-useEffect > re-mise à jour d 'un state > re-re-render > re-re-useEffect > ...)._ 😬
	>
	> _Pour contrôler le moment où se lance la fonction, il existe un 2e paramètre à `useEffect`, je vous invite à reprendre le pdf du chapitre **"3. Les composants React"** du cours pour revoir les différentes possibilités !_
	> </details>

	Rechargez la page, les vidéos doivent apparaître après ce délai ! Youpi !

## Étape suivante <!-- omit in toc -->
Si tout fonctionne, et qu'il vous reste du temps vous pouvez passer à des exercices supplémentaires dans la partie : [D. Pour aller plus loin](D-plus-loin.md)

