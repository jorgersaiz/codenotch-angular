import { Component } from '@angular/core';
import { Pokemon } from '../../shared/models/pokemon';

@Component({
  selector: 'app-pokemon-view',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-view.component.html',
  styleUrl: './pokemon-view.component.css'
})
export class PokemonViewComponent {
  public pokemon!: Pokemon;
}
