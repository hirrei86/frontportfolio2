import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAcercaDeComponent } from './components/editar-acerca-de/editar-acerca-de.component';
import { EditarEstudiosComponent } from './components/editar-estudios/editar-estudios.component';
import { EditarExperienciaComponent } from './components/editar-experiencia/editar-experiencia.component';
import { EditarPortadaComponent } from './components/editar-portada/editar-portada.component';
import { EditarProyectoComponent } from './components/editar-proyecto/editar-proyecto.component';
import { NewEstudiosComponent } from './components/estudios/new-estudios.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { NewHabilidadComponent } from './components/hysskills/new-habilidad.component';
import { EditarSkillComponent } from './components/editar-skill/editar-skill.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  /*{path:'register', component: RegisterComponent},*/
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'editar-experiencia/:id', component: EditarExperienciaComponent},
  {path:'newexp', component: NewExperienciaComponent},
  {path:'editar-acerca-de/:id', component: EditarAcercaDeComponent},
  {path:'editar-portada/:id', component: EditarPortadaComponent},
  {path:'newest', component: NewEstudiosComponent},
  {path:'editar-educacion/:id', component: EditarEstudiosComponent},
  {path:'newpro', component: NewProyectoComponent},
  {path:'editar-proyecto/:id', component: EditarProyectoComponent},
  {path:'newhab', component: NewHabilidadComponent},
  {path:'editar-skill/:id', component: EditarSkillComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
