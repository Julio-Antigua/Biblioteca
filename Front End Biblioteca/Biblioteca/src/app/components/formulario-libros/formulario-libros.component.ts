import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Libros } from '../../models/libros';
import { LibrosServicesService } from '../../services/libros-services.service';
import { ToastrService } from 'ngx-toastr';
import { EditorialServicesService } from '../../services/editorial-services.service';

@Component({
  selector: 'app-formulario-libros',
  templateUrl: './formulario-libros.component.html',
  styleUrls: ['./formulario-libros.component.css']
})
export class FormularioLibrosComponent implements OnInit {

  formulario: FormGroup;
  suscription?: Subscription;
  Libros?: Libros;
  Id = 0;
  constructor(private fg: FormBuilder, private services: LibrosServicesService,private services2:EditorialServicesService, public toastr: ToastrService) {
    this.formulario = this.fg.group({
      id: 0,
      nombre: ['',Validators.required],
      autor: ['',Validators.required],
      genero: ['',Validators.required],
      paginas:[0,Validators.required],
      idEditorial:[0,Validators.required]
    });
   }

  ngOnInit(): void {
    this.suscription = this.services.GetLibros$().subscribe(data => {
      console.log(data);
      this.Libros = data;
      this.formulario.patchValue({
        nombre: this.Libros.nombre,
        autor: this.Libros.autor,
        genero: this.Libros.genero,
        paginas: this.Libros.paginas,
        idEditorial: this.Libros.idEditorial
      });
      this.Id = this.Libros.id || 0; 
    });
  }

  ngOnDestroy(): void{
    this.suscription?.unsubscribe();
  }

  guardar(){
    if(this.Id === 0){
      this.agregar();
    }else{
      this.actualizar();
    }
  }

  limpiar(){
    this.formulario.reset();
  }

  agregar(){
    const guardar: Libros = {
      id: this.Libros?.id,
      nombre: this.formulario.get('nombre')?.value,
      autor: this.formulario.get('autor')?.value,
      genero: this.formulario.get('genero')?.value,
      paginas: this.formulario.get('paginas')?.value,
      idEditorial: this.formulario.get('idEditorial')?.value,
    }

    this.services.PostLibros(guardar).subscribe(data => {
      this.toastr.success('Registro Agregado', 'El libro fue agregada');
      console.log(data);
      this.services.GetLibros();
      this.services2.GetCantidad;
      this.formulario.reset();
    });
  }

  actualizar(){
    const editar: Libros = {
      id: this.Libros?.id,
      nombre: this.formulario.get('nombre')?.value,
      autor: this.formulario.get('autor')?.value,
      genero: this.formulario.get('genero')?.value,
      paginas: this.formulario.get('paginas')?.value,
      idEditorial: this.formulario.get('idEditorial')?.value,
    }
    this.services.PutLibros(this.Id,editar).subscribe(data => {
      this.toastr.info('Registro Actuzalizado','El libro fue actualizada');
      console.log(data);
      this.services.GetLibros();
      this.formulario.reset();
      this.Id = 0;
    });
  }


}
