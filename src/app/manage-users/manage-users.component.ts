import { Component } from '@angular/core';
import { MiyabiServicesService } from '../Services/miyabi-services.service';
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  list1: any;
  
  constructor(private miyabiService: MiyabiServicesService) {
    // getUser(){
      this.miyabiService.getUsers().subscribe((response)=>{
      console.log(response);
      
      this.list1=response;
    // }
      })
  }

  onSelect(item:string, isActive:boolean){
    console.log(item, isActive  );
    this.miyabiService.activeDeactiveUser(item, isActive).subscribe((response)=>
    console.log(response)
    )
  }

  list =[
    {
      firstName: "abhi",
      lastName: "mittal",
      email: "abhi@gmail.com",
      instagramId: "abhimittal",
      phone: "1234567890",
      isActve: true
    }
  ]
  on:boolean = false;
  changeStyle()
  {

  }
}
