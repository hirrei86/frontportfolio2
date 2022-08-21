import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/estudios.model';
import { EducacionService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-new-estudios',
  templateUrl: './new-estudios.component.html',
  styleUrls: ['./new-estudios.component.css']
})
export class NewEstudiosComponent implements OnInit {
  educacion: Educacion = new Educacion

  constructor(private educacionservice: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  crearEducacion(){
    this.educacionservice.agregarEducacion(this.educacion).subscribe(dato =>{
      console.log(dato);
      
    },error => console.log(error));
  }
  irAInicio(){
    this.router.navigate(['/home'])
  }
  onCreate(): void{
    this.crearEducacion();
    alert("Se estudio fue agregado correctamente")
    this.irAInicio();
      }
    

}
