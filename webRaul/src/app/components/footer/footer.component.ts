import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contact: any;
  socials: any;
  cv: string;

  constructor(private authorServise: AuthorService) {

    this.contact = {};
    this.socials = [];
    this.cv = "";
  }
  async ngOnInit() {
    try {
      this.contact = await this.authorServise.getContact();
      this.socials = await this.authorServise.getSocial();
      this.cv = await this.authorServise.getCV();

    } catch (error) {
      console.log(error)
    }
     
  }

}
