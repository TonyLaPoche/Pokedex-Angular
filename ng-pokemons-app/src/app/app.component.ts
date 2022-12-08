import { Component, OnInit } from '@angular/core'; 
import { POKEMONS } from './data/mock-pokemons';
import { Pokemon } from './type/pokemon';
  
@Component({ 
 selector: 'app-root', 
 templateUrl:"./app.component.html", 
}) 
export class AppComponent implements OnInit {
    
    public pokemons:Pokemon[];

    ngOnInit(): void {
        this.pokemons = POKEMONS

    } 
    values = ''
    title = 'Pokedex Angular';
 
 selectedPokemon = (pokemonSelect: Pokemon) => this.values = pokemonSelect.name;
}
