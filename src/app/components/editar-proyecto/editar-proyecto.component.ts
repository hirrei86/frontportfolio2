import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  editPro: Proyecto = new Proyecto();

  constructor(private proyectoservice: ProyectoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoservice.details(id).subscribe(
      data => {
        this.editPro = data
      })
      }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoservice.editarProyecto(id, this.editPro).subscribe(data => {
      alert("Proyecto editado correctamente")
      this.router.navigate(['home']);
    }
    )
  }
}
