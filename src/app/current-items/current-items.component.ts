import { Component, OnInit } from '@angular/core';
import { MyServiceService, Data } from '../my-service.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-current-items',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './current-items.component.html',
  styleUrl: './current-items.component.css'
})
export class CurrentItemsComponent implements OnInit {
  data: Data[]=[];
  filteredData: Data[]=[];

  constructor(private dataService: MyServiceService) { }

  ngOnInit() {
    this.dataService.getDatas().subscribe(data => {
      this.data = data;
      this.filteredData = data;
    });
  }

  filterByCategory(category: string) {
    this.filteredData = this.data.filter(item => item.autheur.includes(category) );
  }

  resetFilter() {
    this.filteredData = this.data;
  }
}


