import { Component, Input, OnInit } from '@angular/core';
import { Apps } from 'src/app/interfaces/apps';
import { AppsService } from 'src/app/services/apps.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  apps: Apps[];
  appsInterval: Apps[];
  classButton: string;

  constructor(private Appservices: AppsService) {
    this.apps = [];
    this.appsInterval = [];
    this.classButton = "";
  }


  async ngOnInit() {
    console.log("inicio apps");
    try {
      this.apps = await this.Appservices.getAll();
    } catch (error) {
      console.log(error);
    }
    for (let i = 0; i < this.apps.length; i++) {
      setTimeout(() => {
        this.appsInterval.push(this.apps[i])
      }, 190 * (i + 1))
    }
    console.log("final apps");
  }

  getFilterAppsForTechnologies(param = "Node JS") {

    if (param == "all") {
      this.appsInterval = this.apps;

    } else {
      let result = this.apps.filter(el => el.technologies.includes(param))
      this.appsInterval = result;
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
