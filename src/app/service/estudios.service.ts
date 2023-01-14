import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/estudios.model';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
  URL = 'https://backendporfolio2.onrender.com/educaciones/'

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get(this.URL + 'traer');
  }

  editarEducacion(id: number, Educacion:Educacion):Observable<object>{
    return this.http.put(`${this.URL}editar/${id}`,Educacion);
  }

  public details(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(`${this.URL}details/${id}`);
  }

  agregarEducacion(educacion:Educacion):Observable<object>{
    return this.http.post(`${this.URL}crear`,educacion);
  }

  eliminarEducacion(id: number): Observable<object>{
    return this.http.delete(`${this.URL}borrar/${id}`)
  }
}