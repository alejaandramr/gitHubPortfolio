import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//import {InfoPag} from '../interface/infoPag';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor( private http: HttpClient) {
    this.getinfoPag();
    this.getinfoEquipo();
  }

  public getinfoPag(){
    return this.http.get('assets/data/infoPag.json') 
  }

  public getinfoEquipo(){
    return this.http.get('https://portfolioapp-ac032-default-rtdb.firebaseio.com//equipo.json')
  }
}