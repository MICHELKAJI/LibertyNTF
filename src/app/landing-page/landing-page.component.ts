import { Component } from '@angular/core';
import { BannerHomeComponent } from '../banner-home/banner-home.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    BannerHomeComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
