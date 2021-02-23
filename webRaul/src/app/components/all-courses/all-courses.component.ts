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
  courses: Course[];
  valueSelect: string;

  constructor(private coursesService: CoursesServices) {

    this.allCourses = [];
    this.courses = [];

  }


  async ngOnInit() {

    this.allCourses = await this.coursesService.getAll();
    this.courses = this.allCourses;
    
  }

  onChange(event){
    this.valueSelect = event.target.value;
    console.log(this.valueSelect);
    this.filterCourses(this.valueSelect)
  }

  filterCourses(param) {
    if (param != "all") {
      this.courses = this.allCourses.filter(el=> el.title.includes(param));
    } else {
      this.courses = this.allCourses;
    }
    
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
