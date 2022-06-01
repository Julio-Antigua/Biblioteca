import { Component, OnInit } from '@angular/core';
import { EditorialServicesService } from '../../services/editorial-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-editorial',
  templateUrl: './lista-editorial.component.html',
  styleUrls: ['./lista-editorial.component.css']
})
export class ListaEditorialComponent implements OnInit {

  constructor(public services: EditorialServicesService, public toast: ToastrService) { }

  ngOnInit(): void {
    this.services.GetEditorial();
    this.services.GetCantidad();
  }

  editar(editorial: any){
    this.services.actualizar(editorial);
  }

  eliminar(id: number){
    if(confirm("Estas seguro de eliminar esta editorial?")){

      this.services.DeleteEditorial(id).subscribe(data =>{
        this.toast.error('Resgistro Eliminado','La editorial fue eliminada');
        this.services.GetEditorial();
        this.services.GetCantidad();
      });
    }
   
  }

}
