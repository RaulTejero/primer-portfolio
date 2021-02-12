import { Component, OnInit } from '@angular/core';
import { AppsService } from 'src/app/services/apps.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

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

    // console.log(this.valueSelect);
    // console.log(this.apps);
  }

  change(event) {
    this.valueSelect = event.target.value;
    console.log(this.valueSelect);

  }
}
