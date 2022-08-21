import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { HysskillsService } from 'src/app/service/hysskills.service';

@Component({
  selector: 'app-hysskills',
  templateUrl: './hysskills.component.html',
  styleUrls: ['./hysskills.component.css']
})
export class HysskillsComponent implements OnInit {
  skills: any;

  constructor(private datosSkills: HysskillsService, private skillservice: HysskillsService, private router: Router, private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.datosSkills.obtenerDatos().subscribe(data => {
      this.skills = data;
    })
  }
  public onEdit(id:number){
    this.router.navigate(['editar-experiencia',id])
  }
  

  eliminar_skill(id:number) {
    if (confirm('¿Esta seguro que desea BORRAR los datos?')) {
      this.skillservice.eliminarSkill(id).subscribe(data => {
      });
      location.reload()
      } else
      location.reload()}
      userLogged = this.authService.getUserLogged();
    }
