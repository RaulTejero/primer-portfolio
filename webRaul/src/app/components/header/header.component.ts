import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  author: any;

  constructor(private AuthorService: AuthorService) {
    this.author = {};

  }

  async ngOnInit() {
  
    try {
      this.author = await this.AuthorService.getAll();

    } catch (error) {
      console.log(error);

    }
  }



}
