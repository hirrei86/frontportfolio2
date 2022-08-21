import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: any;

  constructor(private datosExperiencias: ExperienciaService, private experienciaservice: ExperienciaService, private router: Router, private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.datosExperiencias.obtenerDatos().subscribe(data => {
      this.experiencias = data;
    })
  }
  public onEdit(id:number){
    this.router.navigate(['editar-experiencia',id])
  }
  

  eliminar_experiencia(id:number) {
    if (confirm('¿Esta seguro que desea BORRAR los datos?')) {
      this.experienciaservice.eliminarExperiencia(id).subscribe(data => {
      });
      location.reload()
      } else
      location.reload()}
      userLogged = this.authService.getUserLogged();
    }








