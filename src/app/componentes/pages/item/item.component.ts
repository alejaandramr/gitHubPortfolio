import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id: any;
  producto:any;

  constructor (private route: ActivatedRoute,
    private productosService: ProductosService) {}

  ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id');
  this.productosService.getProducto(this.id)
  .subscribe ((resp : any) => {
    console.log (resp);
    this.producto=resp;
  });
  }
}
