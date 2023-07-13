import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MiyabiServicesService } from '../Services/miyabi-services.service';

interface createUser{
  role: string,
  language: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  instagramId: string,
  password: string
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  
  constructor(private miyabiService: MiyabiServicesService){

  }

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
    this.miyabiService
    .createUser(this.createUserDTO.value)
    .subscribe((res)=>{
      console.log(res);
    })
  }
}
