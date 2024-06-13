import { Component } from '@angular/core';
import { BannerHomeComponent } from '../banner-home/banner-home.component';
import { KindofBrowseComponent } from '../kindof-browse/kindof-browse.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    BannerHomeComponent,
    KindofBrowseComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
