import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common'; // Needed for *ngFor and *ngIf

@Component({
  standalone: true,
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  imports: [CommonModule] // Import CommonModule for Angular directives like *ngFor and *ngIf
})
export class PokemonComponent implements OnInit {
  pokemonList: any[] = [];
  selectedPokemon: any = null;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    this.pokemonService.getPokemonList(20).subscribe(data => {
      this.pokemonList = data.results;
    });
  }

  loadPokemonDetails(name: string): void {
    this.pokemonService.getPokemonDetails(name).subscribe(data => {
      this.selectedPokemon = data;
    });
  }
}
