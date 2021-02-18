import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from 'src/app/interfaces/app';
import { AppsService } from 'src/app/services/apps.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  allApps: App[];
  technologiesFilter: string[];
  apps: App[];
  valueSelect: string;
  appSelect: App;
  // classButton: string;

  constructor(private AppsServices: AppsService, private router: Router) {
    this.allApps = [];
    this.technologiesFilter = [];
    this.apps = [];
    this.valueSelect = "";
  }


  async ngOnInit() {

    try {
      this.allApps = await this.AppsServices.getAll();
    } catch (error) {
      console.log(error);
    }
    this.apps = this.allApps;
    this.allApps.forEach(el => {
      let result = el.technologies;
      result.forEach(el => {
        if (this.technologiesFilter.includes(el)) {
        } else {
          this.technologiesFilter.push(el)
        };
      });
    });

  }

  async onClick(event) {

    let id = event.target.value;
    let title = "";

    this.appSelect = this.allApps.find(el => el.id == id);
    title = this.appSelect.title;

    this.AppsServices.appSelect = this.appSelect;

    this.AppsServices.getAppSelected();
    this.router.navigate(["Portfolio", title]);
  }

  change(event) {
    this.valueSelect = event.target.value;
    this.getFilterAppsForTechnologies(this.valueSelect);
  }

  getFilterAppsForTechnologies(param) {
    if (param != "all") {
      this.apps = this.allApps.filter(el => el.technologies.includes(param));
    } else {
      this.apps = this.allApps;
    }
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
