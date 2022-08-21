import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/estudios.model';
import { EducacionService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-editar-estudios',
  templateUrl: './editar-estudios.component.html',
  styleUrls: ['./editar-estudios.component.css']
})
export class EditarEstudiosComponent implements OnInit {
  editEdu: Educacion = new Educacion();

  constructor(private educacionservice: EducacionService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionservice.details(id).subscribe(
      data => {
        this.editEdu = data
      })
      }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionservice.editarEducacion(id, this.editEdu).subscribe(data => {
      alert("Estudio editado correctamente")
      this.router.navigate(['home']);
    }
    )
  }

}
