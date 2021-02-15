import { Component, OnInit } from '@angular/core';
import { App } from 'src/app/interfaces/app';
import { AppsComponent } from '../apps/apps.component';


@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {
  app: App;
  constructor() { 
    
  }

  ngOnInit(): void {
    // this.appsComponente.getappSelected$().subscribe(app => {
    //   this.app = app;
    // })
    
  }

}
