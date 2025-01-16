import { Component } from '@angular/core';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PokemonComponent] // Import the PokemonComponent
})
export class AppComponent {
  title = 'pokemon-angular-app';
}
