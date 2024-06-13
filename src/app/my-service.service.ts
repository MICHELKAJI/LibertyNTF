import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private apiUrl = 'https://monapi.com/data'; 

  constructor() { }
}
