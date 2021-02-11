import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  img: string;

  constructor(private authorService:AuthorService) {
    this.img ="";
   }

  async ngOnInit() {
    this.img = await this.authorService.getPhoto();
  }

}
