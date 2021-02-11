import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  banner:any;
  constructor( private bannerService: BannerService) { 
  
  }

  async ngOnInit() {
    try {
      this.banner = await this.bannerService.getAll();
      
    } catch (error) {
      console.log("error"); 
    }
  }

}
