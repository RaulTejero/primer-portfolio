import { Component, OnInit, ViewChild } from '@angular/core';
import { AppsComponent } from 'src/app/components/apps/apps.component';
import { Apps } from 'src/app/interfaces/apps';
import { AppsService } from 'src/app/services/apps.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // importo viewchild y el componente hijo directo; 
  @ViewChild(AppsComponent) valueExport: AppsComponent;

  apps: Apps[];
  technologiesFilter: string[];
  valueSelect: string;

  constructor(private AppsService: AppsService) {
    this.apps = [];
    this.technologiesFilter = [];
    this.valueSelect = "all";
  }

  async ngOnInit() {


    try {
      this.apps = await this.AppsService.getAll();
    } catch (error) {
      console.log(error);
    }

    this.apps.forEach(el => {
      let result = el.technologies;
      result.forEach(el => {
        if (this.technologiesFilter.includes(el)) {
        } else {
          this.technologiesFilter.push(el)
        };
      });
    });
    console.log(this.apps);

  }

  async getFilterAppsForTechnologies(param) {
    let appsFilter = this.apps;
    if (param != "all") {
      appsFilter = this.apps.filter(el => el.technologies.includes(param));
    } 
    console.log(appsFilter);
  }

  change(event) {
    this.valueSelect = event.target.value;
    console.log(this.valueSelect);
    this.getFilterAppsForTechnologies(this.valueSelect)
  }


}

