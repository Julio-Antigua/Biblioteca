import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Editorial } from 'src/app/models/editorial';
import { EditorialServicesService } from 'src/app/services/editorial-services.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-formulario-editorial',
  templateUrl: './formulario-editorial.component.html',
  styleUrls: ['./formulario-editorial.component.css']
})
export class FormularioEditorialComponent implements OnInit {

  formulario: FormGroup;
  suscription?: Subscription;
  Editorial?: Editorial;
  Id = 0;

  constructor(private fb: FormBuilder, private services: EditorialServicesService, public toastr:ToastrService) 
  {
    this.formulario = this.fb.group({
      id: 0,
      nombre: ['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.suscription = this.services.GetEditorial$().subscribe(data => {
      console.log(data);
      this.Editorial = data;
      this.formulario.patchValue({
        nombre: this.Editorial.nombre
      });
      this.Id = this.Editorial.id || 0; 
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
    const guardar: Editorial = {
      id: this.Editorial?.id,
      nombre: this.formulario.get('nombre')?.value,
    }

    this.services.PostEditorial(guardar).subscribe(data => {
      this.toastr.success('Registro Agregado', 'La Editorial fue agregada');
      console.log(data);
      this.services.GetEditorial();
      this.services.GetCantidad();
      this.formulario.reset();
    });
  }

  actualizar(){
    const editar: Editorial = {
      id: this.Editorial?.id,
      nombre: this.formulario.get('nombre')?.value,
    }
    this.services.PutEditorial(this.Id,editar).subscribe(data => {
      this.toastr.info('Registro Actuzalizado','La Editorial fue actualizada');
      console.log(data);
      this.services.GetEditorial();
      this.services.GetCantidad();
      this.formulario.reset();
      this.Id = 0;
    });
  }

}
