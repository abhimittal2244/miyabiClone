import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  list = [
    {
      courseName: "Java Enterprise Course",
      courseSubTitle: "Java",
      tenure: "21",
      image: "byte-img",
      startDate: "21-06-2023",
      marathonUrl: "URL Here",
      giftUrl: "URL Here"
    }
  ]
}
