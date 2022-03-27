import { Component, OnInit } from '@angular/core';
import { ProductosService} from '../../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //productos : any = "";
  //esto habrá que ponerlo
  productos: any = [];
  loading = true;

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProductosIdx()
    .subscribe((resp : any) => {
      this.productos = resp;

      setTimeout(() => {
        this.loading = false;
      }, 3000);
    })
  }
  }
