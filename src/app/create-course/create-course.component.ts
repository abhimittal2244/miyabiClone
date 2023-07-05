import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  createcourseDTO = new FormGroup({
    selectMarathon: new FormControl(''),
    courseType: new FormControl(''),
    marathonLevel: new FormControl(''),
    title: new FormControl(''),
    subTitle: new FormControl(''),
    cost: new FormControl(''),
    date: new FormControl(''),
    description: new FormControl(''),
    planId: new FormControl(''),
    image: new FormControl('')
  })
  createcourse(){
    console.log(this.createcourseDTO.value);
  }
}
