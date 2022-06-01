import { Component, OnInit } from '@angular/core';
import { EditorialServicesService } from 'src/app/services/editorial-services.service';

@Component({
  selector: 'app-cantidad-libros',
  templateUrl: './cantidad-libros.component.html',
  styleUrls: ['./cantidad-libros.component.css']
})
export class CantidadLibrosComponent implements OnInit {

  constructor(public services: EditorialServicesService) { }

  ngOnInit(): void {
    this.services.GetCantidad();
  }

}
