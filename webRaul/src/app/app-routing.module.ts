import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCoursesComponent } from './components/all-courses/all-courses.component';
import { AppDetailsComponent } from './components/app-details/app-details.component';
import { AppsComponent } from './components/apps/apps.component';
import { TecnologiesAllComponent } from './components/tecnologies-all/tecnologies-all.component';
import { AngularComponent } from './courses/angular/angular.component';
import { GitComponent } from './courses/git/git.component';
import { JsComponent } from './courses/js/js.component';
import { RouterComponent } from './courses/router/router.component';
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
      { path: "apps", component: AppsComponent },
      { path: ":title", component: AppDetailsComponent }
    ]
  },
  {
    path: "Tecnologias", component: TechnologiesComponent,
    children: [
      { path: "", pathMatch: "prefix", redirectTo: "all" },
      { path: "all", component: TecnologiesAllComponent }
    ]
  },
  {
    path: "Cursos", component: CoursesComponent,
    children: [
      { path: "", pathMatch: "prefix", redirectTo: "all" },
      { path: "all", component: AllCoursesComponent },
      {
        path: "course", component: RouterComponent, children: [
          { path: "Javascript", component: JsComponent },
          { path: "Angular", component: AngularComponent },
          { path: "Git", component: GitComponent }
        ]
      }
    ]
  },

  { path: "Sobre Mi", component: AboutComponent },
  { path: "**", component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
