# Les directives

Les directives de template Angular permettent de contrôler l'affichage des éléments dans une vue en fonction de conditions spécifiées.

## NgIf

La directive `ngIf` permet de conditionnellement afficher ou masquer un élément dans la vue en fonction de la valeur d'une expression. Par exemple, si on veut afficher un message d'erreur uniquement si une variable d'erreur est définie, on peut utiliser `ngIf` comme ceci :

```ts
<p *ngIf="errorMessage">{{ errorMessage }}</p>
```

Dans cet exemple, le paragraphe contenant le message d'erreur ne sera affiché que si la variable `errorMessage` est définie et contient une valeur non nulle.

## NgFor

La directive `ngFor` permet d'itérer sur un tableau d'éléments et de répéter un bloc d'éléments pour chaque élément du tableau. Par exemple, si on veut afficher une liste de noms de Pokémon, on peut utiliser `ngFor` comme ceci :

```ts
<ul>
  <li *ngFor="let pokemon of pokemons">{{ pokemon.name }}</li>
</ul>
```

Dans cet exemple, la directive `ngFor` itère sur le tableau `pokemons` et affiche chaque élément du tableau sous la forme d'un élément de liste dans la vue. La directive `ngFor` permet également d'accéder aux informations sur l'itération en cours, comme l'index de l'élément actuel ou si c'est le premier ou le dernier élément du tableau.