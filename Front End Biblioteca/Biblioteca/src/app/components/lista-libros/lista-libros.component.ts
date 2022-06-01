import { Component, OnInit } from '@angular/core';
import { LibrosServicesService } from 'src/app/services/libros-services.service';
import { ToastrService } from 'ngx-toastr';
import { EditorialServicesService } from '../../services/editorial-services.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  constructor(public services:LibrosServicesService,public services2:EditorialServicesService, public toast: ToastrService) { }

  ngOnInit(): void {
    this.services.GetLibros()
    this.services2.GetCantidad();
  }

  editar(libro: any){
    this.services.actualizar(libro);
  }

  eliminar(id: number){
    if(confirm("Estas seguro de eliminar este libro?")){

      this.services.DeletetLibros(id).subscribe(data =>{
        this.toast.error('Resgistro Eliminado','El Libro fue eliminada');
        this.services.GetLibros();
        this.services2.GetCantidad();
      });
    }

  }

}
