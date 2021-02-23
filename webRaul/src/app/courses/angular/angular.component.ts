import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  name: string;
  valueBtn: boolean;
  changes: any;

  toWayBinding: string;

  constructor() {
    this.valueBtn = true;

   }

  ngOnInit(): void {
  }

  onClick() {
    this.valueBtn = !this.valueBtn;
  }

}
