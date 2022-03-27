import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient) {

    this.getProductosIdx();
  }

  public getProductosIdx(){
    return this.http.get('https://portfolioapp-ac032-default-rtdb.firebaseio.com/productos_idx.json');
    }
  
  public getProductos(){
    return this.http.get('https://portfolioapp-ac032-default-rtdb.firebaseio.com/productos.json');
  }

  public getProducto(id:string){
    return this.http.get(`https://portfolioapp-ac032-default-rtdb.firebaseio.com/productos/${id}.json`);
  }
}