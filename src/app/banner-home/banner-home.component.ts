import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-banner-home',
  standalone: true,
  imports: [
    CarouselComponent
  ],
  templateUrl: './banner-home.component.html',
  styleUrl: './banner-home.component.css'
})
export class BannerHomeComponent {

}
