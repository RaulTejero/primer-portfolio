import { Component, OnInit } from '@angular/core';
import { AppsService } from 'src/app/services/apps.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  apps: any;
  classButton: string;
  valueClassButton:boolean;
  constructor(private Appservices:AppsService) { 
  
    this.apps = [];
    this.classButton = "";
    this.valueClassButton = false;
  }
  

  async ngOnInit() {
    try {
      this.apps = await this.Appservices.getAll();
      console.log(this.apps);  
    } catch (error) {
      console.log(error);
    }
  }
  hover(event){
    if(event.target.className != "rowButton") {
      event.target.classList.add ("rowButton");
    }
  }
  mouseOut(event){
    if (event.target.className == "rowButton") {
      event.target.classList.remove("rowButton")
    }
  }
}
