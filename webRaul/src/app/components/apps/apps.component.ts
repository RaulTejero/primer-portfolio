import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { App } from 'src/app/interfaces/app';
import { PortfolioComponent } from 'src/app/pages/portfolio/portfolio.component';
import { AppsService } from 'src/app/services/apps.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  apps: App[];
  classButton: string;
  appSelect: any;
  private appSelect$: Subject<App>;

  constructor(private Appservices: AppsService, private PortfoliComponent: PortfolioComponent, private router: Router) {
    this.apps = [];
    this.classButton = "";
    this.appSelect = {};
    this.appSelect$ = new Subject();
  }


  async ngOnInit() {
    try {
      this.apps = await this.Appservices.getAll();
    } catch (error) {
      console.log(error);
    }
    this.PortfoliComponent.getFilterAppsForTechnologies$().subscribe(apps => {
      this.apps = apps;
      console.log(this.apps);

    })

  }

  onClick(event) {
    let id = event.target.value;
    let title = "";

    this.appSelect = this.apps.find(el => el.id == id);

    this.appSelect.title;
  
    this.router.navigate(["detail", title]);
    this.appSelect$.next(this.appSelect);
    console.log(this.appSelect$);
  }

  getappSelected$(): Observable<App> {
    return this.appSelect$.asObservable();
  }


  hover(event) {
    if (event.target.className != "rowButton") {
      event.target.classList.add("rowButton");
    }
  }
  mouseOut(event) {
    if (event.target.className == "rowButton") {
      event.target.classList.remove("rowButton")
    }
  }
}
