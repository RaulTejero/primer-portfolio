import { Component, OnInit } from '@angular/core';
import {RoutesService} from 'src/app/services/routes.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

routes: any;


  constructor(private RoutesService: RoutesService) {
  

   }

  async ngOnInit() {
    try {
      this.routes = await this.RoutesService.getAll();
    } catch (error) {
      console.log(error);

    }
  }

}
