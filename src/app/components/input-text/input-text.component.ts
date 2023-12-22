import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent {
  @Input() public labelText = '';
  @Input() public inputType = '';
  @Input() public placeholder = '';
}
