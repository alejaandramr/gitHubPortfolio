import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  textbusqueda: any = '';
  productos: any = [];
  productosResultados: any = [];

  loading = true;

  constructor (private route: ActivatedRoute, 
      private productosService: ProductosService) {}


  ngOnInit(): void {
    this.textbusqueda = this.route.snapshot.paramMap.get('textBusq');
    //console.log (this.textbusqueda);
    this.textbusqueda = this.textbusqueda.toLowerCase();
  
    this.productosService.getProductosIdx()
    .subscribe((resp : any) => {
      this.productos = resp;
      this.productos.forEach ((prod: any)  => {

        let categoria = prod.categoria.toLowerCase();

        if (categoria.indexOf(this.textbusqueda) >= 0) {
          this.productosResultados.push(prod);
        }
      });
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      
      });
  }
}