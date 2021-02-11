import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      const id = params.get('filter');
      console.log(id);
      
    })
  }

}
// TODO:estoy con activity router pra el detalle