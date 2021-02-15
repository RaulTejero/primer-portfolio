import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { App } from 'src/app/interfaces/app';
import { AppsService } from 'src/app/services/apps.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  apps: App[];
  technologiesFilter: string[];
  valueSelect: string;
  appsFilter: App[];
  private appsFilter$: Subject<App[]>;


  constructor(private AppsService: AppsService) {
    this.apps = [];
    this.technologiesFilter = [];
    this.valueSelect = "all";
    this.appsFilter = [];
    this.appsFilter$ = new Subject();
  }

  async ngOnInit() {


    try {
      this.apps = await this.AppsService.getAll();
    } catch (error) {
      console.log(error);
    }
    this.appsFilter = this.apps,
      this.apps.forEach(el => {
        let result = el.technologies;
        result.forEach(el => {
          if (this.technologiesFilter.includes(el)) {
          } else {
            this.technologiesFilter.push(el)
          };
        });
      });
   

  }

  getFilterAppsForTechnologies(param) {
    this.appsFilter = this.apps;
    if (param != "all") {
      this.appsFilter = this.apps.filter(el => el.technologies.includes(param));
    };
    this.appsFilter$.next(this.appsFilter);
  }


  getFilterAppsForTechnologies$(): Observable<App[]> {
    return this.appsFilter$.asObservable();
  }

  change(event) {
    this.valueSelect = event.target.value;
    this.getFilterAppsForTechnologies(this.valueSelect);
  }


}

