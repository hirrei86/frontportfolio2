import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos: any;

  constructor(private datosProyectos: ProyectoService, private proyectoservice: ProyectoService, private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
    this.datosProyectos.obtenerDatos().subscribe(data => {
      this.proyectos = data;
    })
  }
  public onEdit(id:number){
    this.router.navigate(['editar-proyecto',id])
  }
  

  eliminar_proyecto(id:number) {
    if (confirm('¿Esta seguro que desea BORRAR los datos?')) {
      this.proyectoservice.eliminarProyecto(id).subscribe(data => {
      });
      location.reload()
      } else
      location.reload()}
      userLogged = this.authService.getUserLogged();
    }
