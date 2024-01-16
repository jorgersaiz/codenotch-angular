import { Component } from '@angular/core';
import { Person } from '../../shared/models/person';
import { CommonModule } from '@angular/common';
import { EntrecomillarPipe } from '../../pipes/entrecomillar.pipe';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, EntrecomillarPipe],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  public newMessages = false;
  public people: Person[] = [
    {
      name: 'Jorge',
      surname: 'Rodriguez',
      age: 31,
      job: 'Developer',
      premium: true,
      date: new Date()
    },
    {
      name: 'Marta',
      surname: 'Perez',
      age: 55,
      job: 'Camionera',
      premium: false
    },
    {
      name: 'Arturo',
      surname: 'Fernandez',
      age: 55,
      job: 'Ingeniero',
      premium: false
    },
    {
      name: 'Alicia',
      surname: 'Martinez',
      age: 62,
      job: 'Empresaria',
      premium: true
    },
    {
      name: 'Jorge',
      surname: 'Rodriguez',
      age: 31,
      job: 'Developer',
      premium: false
    },
    {
      name: 'Jorge',
      surname: 'Rodriguez',
      age: 31,
      job: 'Developer',
      premium: true
    },
  ]

  public filterKeyword = '';

  public filterByName (inputName: HTMLInputElement) {
    this.filterKeyword = inputName.value;
  }
}
