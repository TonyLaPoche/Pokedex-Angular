# Les templates

Une template Angular est un fichier qui contient la structure HTML d'une vue dans une application Angular. Il définit l'apparence et le contenu de la vue, en utilisant des balises HTML et des directives Angular spéciales pour afficher et manipuler les données.

Un exemple simple de template Angular serait un fichier HTML qui affiche une liste de noms de Pokémon :

```ts
<h1>Liste de Pokémon</h1>
<ul>
  <li *ngFor="let pokemon of pokemons">{{ pokemon.name }}</li>
</ul>

```

Dans cet exemple, la directive *ngFor est utilisée pour itérer sur un tableau de pokemons et afficher le nom de chaque Pokémon dans une liste non ordonnée. La template utilise également une balise h1 pour afficher un titre et une balise ul pour créer la liste.

## les templates URL

Dans un composant Angular, la propriété templateUrl est utilisée pour spécifier l'emplacement du fichier HTML qui contient la structure de la vue pour le composant. Cela permet au composant d'afficher le contenu de la vue en utilisant la structure définie dans le fichier HTML.

Par exemple, si un composant s'appelle MyComponent et que le fichier HTML correspondant à sa vue s'appelle my-component.component.html, la déclaration du composant pourrait ressembler à ceci :

```ts
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html'
})
export class MyComponent {
  // ...
}

```

Dans ce code, la propriété templateUrl est utilisée pour spécifier l'emplacement du fichier HTML pour la vue du composant. Le fichier HTML sera alors chargé et utilisé par le composant pour afficher le contenu de sa vue.