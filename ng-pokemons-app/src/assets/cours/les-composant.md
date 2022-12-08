# Qu'est-ce qu'un composant ?  

## Un composant Angular et une vue + une classe (javascript) 

On définie la vue d'un composant dans une classe ce qui va nous permettre de faire fonctionner la vue (une template HTML) au travers d'une classe TypeScript.

## Exemple  

```ts

import { Component, OnInit } from '@angular/core'; 

export interface myArray {
    valeur:string
 }


@Component({ 
 selector: 'app-root', 
 template: `
    <div>
    <h1>Hello, Angular 2 !</h1>
    <p *ngFor="let element of array">
        {{ element.valeur }}
    </p> 
    </div>`,
}) 

export class AppComponent implements OnInit { 

 
 // 1. La propriété pokémons est un tableau d'objet de type Pokemon. 
 public array: myArray[]; 
 
 // 2. Initialisation de la propriété pokémons. 
 ngOnInit() { 
  this.array = [ 
   { valeur: 'Première value' }, 
   { valeur: 'Second value' }, 
   { valeur: 'Troisième Value' } 
  ]; 
 } 
}
```  

## Eplication du code

Le code importe d'abord le composant `Component` et l'interface `OnInit` depuis Angular Core. Ensuite, il définit une interface `myArray` avec une seule propriété, `valeur`, qui est une chaîne de caractères.  

```ts
import { Component, OnInit } from '@angular/core';

export interface myArray {
    valeur: string
}
```

Le composant `AppComponent` est déclaré avec une template HTML et une implémentation de l'interface `OnInit`. La propriété `array` est définie comme un tableau d'objets de type `myArray`. Dans la méthode `ngOnInit`, la propriété `array` est initialisée avec trois objets contenant chacun une chaîne de caractères différente.

```ts
@Component({
 selector: 'app-root',
 template: `
    <div>
    <h1>Hello, Angular 2 !</h1>
    <p *ngFor="let element of array">
        {{ element.valeur }}
    </p> 
    </div>`,
})

export class AppComponent implements OnInit {

 // 1. La propriété array est un tableau d'objet de type myArray.
 private array: myArray[];

 // 2. Initialisation de la propriété array.
 ngOnInit() {
  this.array = [
   { valeur: 'Première valeur' },
   { valeur: 'Seconde valeur' },
   { valeur: 'Troisième valeur' }
  ];
 }
}
```

Dans la template HTML, il y a un titre et une boucle `ngFor` qui affiche chaque élément de la propriété `array`. La boucle `ngFor` utilise la propriété `valeur` de chaque objet pour afficher le contenu de la chaîne de caractères.  

```ts
<div>
<h1>Hello, Angular 2 !</h1>
<p *ngFor="let element of array">
    {{ element.valeur }}
</p> 
</div>
```

Le code final affiche donc "Hello, Angular 2 !" suivi de "Première valeur", "Seconde valeur" et "Troisième valeur" sur des lignes séparées  
