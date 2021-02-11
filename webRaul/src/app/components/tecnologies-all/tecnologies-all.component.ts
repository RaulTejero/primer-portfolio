import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from 'src/app/services/technologies.service';


@Component({
  selector: 'app-tecnologies-all',
  templateUrl: './tecnologies-all.component.html',
  styleUrls: ['./tecnologies-all.component.css']
})
export class TecnologiesAllComponent implements OnInit {

  technologies: any[];
  technologiesInterval: any[];

  constructor(private technologiesService: TechnologiesService) {

    this.technologies = [];
    this.technologiesInterval = [];

  }

  async ngOnInit() {
    try {
      this.technologies = await this.technologiesService.getAll();
    } catch (error) {
      console.log(error);
    }
   
    for (let i = 0; i < this.technologies.length; i++) {
     setTimeout(() => {
        this.technologiesInterval.push(this.technologies[i])
      }, 200*(i+1))
      
    }
  }

}
