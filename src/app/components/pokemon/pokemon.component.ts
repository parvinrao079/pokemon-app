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
  currentTheme: string = 'light'; // Default theme

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemon();
    this.loadInitialTheme(); // Set initial theme based on saved preference
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

  toggleTheme(event: any): void {
    const isChecked = event.target.checked;
    this.currentTheme = isChecked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.currentTheme);

    // Save the user's theme preference to local storage
    localStorage.setItem('theme', this.currentTheme);
  }

  loadInitialTheme(): void {
    // Check for saved theme in local storage and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
      document.documentElement.setAttribute('data-theme', this.currentTheme);
    }
  }
}
