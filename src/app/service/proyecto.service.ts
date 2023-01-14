import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {
  URL = 'https://backendporfolio2.onrender.com/proyectos/'

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get(this.URL + 'traer');
  }
  editarProyecto(id: number, Proyecto:Proyecto):Observable<object>{
    return this.http.put(`${this.URL}editar/${id}`,Proyecto);
  }

  public details(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.URL}details/${id}`);
  }

  agregarProyecto(proyecto:Proyecto):Observable<object>{
    return this.http.post(`${this.URL}crear`,proyecto);
  }

  eliminarProyecto(id: number): Observable<object>{
    return this.http.delete(`${this.URL}borrar/${id}`)
  }
}