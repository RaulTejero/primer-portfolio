import { Component, OnInit, ViewChild } from '@angular/core';
import { AppsComponent } from 'src/app/components/apps/apps.component';
import { AppsService } from 'src/app/services/apps.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // importo viewchild y el componente hijo directo; 
  @ViewChild(AppsComponent) valueExport: AppsComponent;

  apps: any;
  technologiesFilter: string[];
  valueSelect: any;

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
  }

  change(event) {
    this.valueSelect = event.target.value;
    //hace referencia a viewchild pra ehecutar una funcion del componente hijo apps
    // TODO Observables esto no funciona
    this.valueExport.getFilterAppsForTechnologies(this.valueSelect);
  }
}
