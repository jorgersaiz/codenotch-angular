import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { InputTextComponent } from '../../components/input-text/input-text.component';
import { Color } from '../../shared/enums/color.enum';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ButtonComponent, InputTextComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  public submitButton = 'Sign in';
  public buttonColor = Color.red;
}
