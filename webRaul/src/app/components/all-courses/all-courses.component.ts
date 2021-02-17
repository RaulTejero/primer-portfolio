import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import{CoursesServices} from 'src/app/services/courses.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  allCourses: Course[];
  valueSelect: string;
  // this.classButton = "";

  constructor(private coursesService: CoursesServices) {

    this.allCourses = [];

  }


  async ngOnInit() {

    this.allCourses = await this.coursesService.getAll();
    console.log(this.allCourses);
    

  }

  onChange(event){
    this.valueSelect = event.target.value;
    console.log(this.valueSelect);
    
  }
  
  hover(event) {
    if (event.target.className != "rowButton") {
      event.target.classList.add("rowButton");
    }
  }

  mouseOut(event) {
    if (event.target.className == "rowButton") {
      event.target.classList.remove("rowButton")
    }
  }

}
