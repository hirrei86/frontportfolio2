import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/hysskills.model';
import { HysskillsService } from 'src/app/service/hysskills.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {
  skill: Skill = new Skill
 
  constructor(private skillservice: HysskillsService, private router: Router) { }

  ngOnInit(): void {
  }

  crearSkill(){
    this.skillservice.agregarSkill(this.skill).subscribe(dato =>{
      console.log(dato);
    },error => console.log(error));
  }
  irAInicio(){
    this.router.navigate(['/home'])
  }
  onCreate(): void{
    this.crearSkill();
    alert("Su Skill fue creada correctamente")
    this.irAInicio();
      }
    
  }