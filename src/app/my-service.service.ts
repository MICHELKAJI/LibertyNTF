import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Data {
    autheur: string,
    profil: string,
    mail: string,
    currentBid: string,
    postImage: string,
    EndsIn: string,
    dates: string,
    montant: string,
    lien: string,
}


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private apiUrl = 'https://65c4aea8dae2304e92e31a9e.mockapi.io/app/datas/tweets'; 

  constructor(private httpClient: HttpClient) { }
  getDatas(): Observable<Data[]>{
    return this.httpClient.get<Data[]>(this.apiUrl);
  }
  
}
