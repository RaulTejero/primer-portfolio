import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsComponent } from './components/apps/apps.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';


const routes: Routes = [
  { path: "", pathMatch: "full", component: InicioComponent },
  {
    path: "Portfolio", component: PortfolioComponent,
    children: [
      { path: "", pathMatch: "prefix", redirectTo: "apps" },
      { path: "apps", component: AppsComponent }
    ]
  },
  { path: "Tecnologias", component: TechnologiesComponent },
  { path: "Cursos", component: CoursesComponent },
  { path: "Sobre Mi", component: AboutComponent },
  { path: "**", component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
