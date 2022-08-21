import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { EducacionService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: any;

  constructor(private datosEstudios: EducacionService,private educacionservice: EducacionService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.datosEstudios.obtenerDatos().subscribe(data => {
      this.estudios = data;
    })
  }

  public onEdit(id:number){
    this.router.navigate(['editar-educacion',id])
  }
  

  eliminar_educacion(id:number) {
    if (confirm('¿Esta seguro que desea BORRAR los datos?')) {
      this.educacionservice.eliminarEducacion(id).subscribe(data => {
      });
      location.reload()
      } else
      location.reload()}
      userLogged = this.authService.getUserLogged();
    }
