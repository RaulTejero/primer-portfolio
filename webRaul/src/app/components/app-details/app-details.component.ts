import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { App } from 'src/app/interfaces/app';
import { AppsService } from 'src/app/services/apps.service';



@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {
  app: App;

  constructor(private AppService: AppsService, private router: Router) {

  }

  async ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.app = this.AppService.getAppSelected();
  }
}