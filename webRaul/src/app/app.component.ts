import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raul Tejero';
  valueDark: boolean = false;
  body = document.getElementsByTagName("body");
  onClicK() {
    if (!this.valueDark) {
      this.body[0].className= "dark";
      this.valueDark = !this.valueDark;
    } else {
      this.body[0].className= "";
      this.valueDark = !this.valueDark;
    }
    
      
      
      
   }
}
