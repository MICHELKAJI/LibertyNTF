import { Component } from '@angular/core';
import { CollectionExploreComponent } from '../collection-explore/collection-explore.component';

@Component({
  selector: 'app-kindof-browse',
  standalone: true,
  imports: [
    CollectionExploreComponent
  ],
  templateUrl: './kindof-browse.component.html',
  styleUrl: './kindof-browse.component.css'
})
export class KindofBrowseComponent {

}
