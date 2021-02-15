import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDetailsComponent } from './components/app-details/app-details.component';
import { AppsComponent } from './components/apps/apps.component';
import { TecnologiesAllComponent } from './components/tecnologies-all/tecnologies-all.component';
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
  { path: "detail/:title", component: AppDetailsComponent},
  {
    path: "Tecnologias", component: TechnologiesComponent,
    children: [
      { path: "", pathMatch: "prefix", redirectTo: "all" },
      { path: "all", component: TecnologiesAllComponent }
    ]
  },
  { path: "Cursos", component: CoursesComponent },
  { path: "Sobre Mi", component: AboutComponent },
  { path: "**", component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
