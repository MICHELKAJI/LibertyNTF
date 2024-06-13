import { Component } from '@angular/core';
import { BannerHomeComponent } from '../banner-home/banner-home.component';
import { KindofBrowseComponent } from '../kindof-browse/kindof-browse.component';
import { SectionHowtocreatNtfComponent } from '../section-howtocreat-ntf/section-howtocreat-ntf.component';
import { CurrentItemsComponent } from '../current-items/current-items.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    BannerHomeComponent,
    KindofBrowseComponent,
    SectionHowtocreatNtfComponent,
    CurrentItemsComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
