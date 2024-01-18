import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Color } from '../../shared/enums/color.enum';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  public buttonTextParent = 'Save';
  public buttonColor = Color.green;
  @Output() saveUserData = new EventEmitter<User>();

  public getForm(userName: HTMLInputElement, email: HTMLInputElement, img: HTMLInputElement) {
    const user: User = {
      id: 1,
      userName: userName.value,
      email: email.value,
      img: img.value
    }
    
    this.saveUserData.emit(user);
  }
}
