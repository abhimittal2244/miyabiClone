import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  createUserDTO = new FormGroup({
    role: new FormControl(''),
    language: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    instagramId: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })
  createUser(){
    console.log(this.createUserDTO.value);
  }
}
