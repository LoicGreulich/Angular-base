import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
  
})
export class AppComponent implements OnInit {
  pokemonList:Pokemon[] = POKEMONS;
  
  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon:Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
    
  }
}
