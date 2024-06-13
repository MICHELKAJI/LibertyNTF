import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    LandingPageComponent,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libertyntf';
}
