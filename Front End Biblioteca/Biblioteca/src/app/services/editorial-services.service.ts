import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Editorial } from '../models/editorial';


@Injectable({
  providedIn: 'root'
})
export class EditorialServicesService {

  AppUrl: string = 'https://localhost:5001';
  ApiUrl: string = '/api/Editorial/';
  Cantidad: string = 'Cantidad';
  list?: Editorial[];
  cantidad?: Editorial[];
  private actualizarLista = new BehaviorSubject<Editorial>({} as any);

  constructor(private http: HttpClient) { }

  GetEditorial(){

    this.http.get(`${this.AppUrl}${this.ApiUrl}`).subscribe(data =>{
      console.log(data);
        this.list = data as Editorial[];
    });
  }

  GetEditorial$(){
    return this.actualizarLista.asObservable();
  }

  GetCantidad(){
    this.http.get(`${this.AppUrl}${this.ApiUrl}${this.Cantidad}`).subscribe(data => {
      console.log(data);
      this.cantidad = data as Editorial[];
    });
  }

  actualizar(editorial: any){
    this.actualizarLista.next(editorial);
  }

  PostEditorial(editorial: Editorial): Observable<string>{
    console.warn(`${this.AppUrl}${this.ApiUrl}`,editorial);
    return this.http.post<string>(`${this.AppUrl}${this.ApiUrl}`,editorial);
  }

  PutEditorial(id: number, editorial: Editorial): Observable<Editorial>{
    console.warn(this.ApiUrl, id);
    return this.http.put<Editorial>(`${this.AppUrl}${this.ApiUrl}${id}`,editorial);
  }

  DeleteEditorial(id: number): Observable<Editorial>{
    return this.http.delete<Editorial>(`${this.AppUrl}${this.ApiUrl}${id}`);
  }


}
