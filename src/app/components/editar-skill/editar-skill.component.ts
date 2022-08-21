import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/hysskills.model';
import { HysskillsService } from 'src/app/service/hysskills.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {
  editPorcent: Skill = new Skill();

  constructor(private skillservice: HysskillsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillservice.details(id).subscribe(
      data => {
        this.editPorcent = data
      })
      }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillservice.editarSkill(id, this.editPorcent).subscribe(data => {
      alert("Su porcentaje fue reemplazado correctamente")
      this.router.navigate(['home']);
    }
    )
  }

}