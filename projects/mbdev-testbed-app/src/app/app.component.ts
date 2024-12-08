import { Component, signal } from '@angular/core';
import { MbdevSideMenuComponent, TitleColor } from 'mbdev-side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MbdevSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'mbdev-testbed-app';
  isAuthenticated = signal(true);
  TitleColor = TitleColor;

}
