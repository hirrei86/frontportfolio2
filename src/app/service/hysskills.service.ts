import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/hysskills.model';

@Injectable({
  providedIn: 'root'
})
export class HysskillsService {
  URL = 'https://app-backhr.herokuapp.com/skills/'

  constructor(private http: HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get(this.URL+'traer');
  }
  editarSkill(id: number, Skill:Skill):Observable<object>{
    return this.http.put(`${this.URL}editar/${id}`,Skill);
  }

  public details(id:number):Observable<Skill>{
    return this.http.get<Skill>(`${this.URL}details/${id}`);
  }

  agregarSkill(skill:Skill):Observable<object>{
    return this.http.post(`${this.URL}crear`,skill);
  }

  eliminarSkill(id: number): Observable<object>{
    return this.http.delete(`${this.URL}borrar/${id}`)
  }
}

