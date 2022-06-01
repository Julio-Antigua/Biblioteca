import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libros } from '../models/libros';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosServicesService {

  constructor(private http: HttpClient) { }

  AppUrl: string = 'https://localhost:5001';
  ApiUrl: string = '/api/Libros/';
  list?: Libros[];
  private actualizarLista = new BehaviorSubject<Libros>({} as any);
  

  GetLibros(){
    this.http.get(`${this.AppUrl}${this.ApiUrl}`).subscribe(data => {
      console.log(data);
      this.list = data as Libros[];
    });
  }

  GetLibros$(){
    return this.actualizarLista.asObservable();
  }

  actualizar(libros: any){
    this.actualizarLista.next(libros);
  }

  PostLibros(libros: Libros): Observable<string>{
      console.warn(`${this.AppUrl}${this.ApiUrl}`,libros);
      return this.http.post<string>(`${this.AppUrl}${this.ApiUrl}`,libros);
  }

  PutLibros(id: number, libros: Libros): Observable<Libros>{
    console.warn(this.ApiUrl, id);
    return this.http.put<Libros>(`${this.AppUrl}${this.ApiUrl}${id}`,libros);
  }

  DeletetLibros(id: number): Observable<Libros>{
    return this.http.delete<Libros>(`${this.AppUrl}${this.ApiUrl}${id}`);
  }
}
