import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioLibrosComponent } from './components/formulario-libros/formulario-libros.component';
import { FormularioEditorialComponent } from './components/formulario-editorial/formulario-editorial.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { ListaEditorialComponent } from './components/lista-editorial/lista-editorial.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CantidadLibrosComponent } from './components/cantidad-libros/cantidad-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioLibrosComponent,
    FormularioEditorialComponent,
    ListaLibrosComponent,
    ListaEditorialComponent,
    CantidadLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
