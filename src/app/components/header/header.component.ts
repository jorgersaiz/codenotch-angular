import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navigation } from '../../shared/models/navigation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public navigationList: Navigation[] = [
    {
      path: '/homepage',
      title: 'Home'
    },
    {
      path: '/about-us',
      title: 'About us'
    },
    {
      path: '/contact',
      title: 'Contact'
    },
    {
      path: '/data-binding',
      title: 'Data-binding'
    },
    {
      path: '/directives',
      title: 'Directives'
    },
    {
      path: '/parent-child',
      title: 'Parent-child'
    }
  ]
}
