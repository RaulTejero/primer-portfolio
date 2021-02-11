import { Component, Input, OnInit } from '@angular/core';
import { AppsService } from 'src/app/services/apps.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  apps: any;
  appsInterval: any[];
  classButton: string;
  valueClassButton: boolean;
  @Input()valueFilterInput;

  constructor(private Appservices: AppsService) {

    this.apps = [];
    this.appsInterval = [];
    this.classButton = "";
    this.valueClassButton = false;
  }


  async ngOnInit() {
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
