import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contact: any;
  socials: any[];

  constructor(private authorServise: AuthorService) {

    this.contact = {};
    this.socials = [];
  }
  async ngOnInit() {
    try {
      this.contact = await this.authorServise.getContact();
      this.socials = await this.authorServise.getSocial();
    } catch (error) {
      console.log(error);
    }
  }

}
