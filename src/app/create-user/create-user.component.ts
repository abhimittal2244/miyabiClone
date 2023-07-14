import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MiyabiServicesService } from '../Services/miyabi-services.service';
import { ɵafterNextNavigation } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  
  constructor(private miyabiService: MiyabiServicesService){

  }

  createUserDTO = new FormGroup({
    role: new FormControl(null),
    language: new FormControl(null),
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    email: new FormControl(null),
    phone: new FormControl(null),
    instagramId: new FormControl(null),
    password: new FormControl(null),
    confirmPassword: new FormControl(null)
  })
  createUser(){
    console.log(this.createUserDTO.value);
    this.miyabiService
    .createUser(this.createUserDTO.value)
    .subscribe({
      next: (res)=>{

        //@ts-ignore
        alert(res.status);
      },
      error(err) {
        alert(JSON.stringify(err.error.errors));
        
      },
    })
  }
}
