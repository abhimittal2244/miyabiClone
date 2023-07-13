import { Component } from '@angular/core';
import { MiyabiServicesService } from '../Services/miyabi-services.service';
interface AdminUserList{
  role: string;
  language: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  instagramId: string;
  isActive: boolean;
};

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent {
  public loading = true;
  private _miyabiService: MiyabiServicesService;
  list1:AdminUserList[]=[];
  constructor(private miyabiService: MiyabiServicesService){
    this._miyabiService = miyabiService;
      this._miyabiService.getAdmins().subscribe((response)=>{
        console.log(response);
        this.list1 = response as AdminUserList[];
      })
  }


  list = [
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module2"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module"
    },
    {
      Sno: "1",
      role: "Admin",
      language: "Russian",
      name: "No-Name",
      email: "noname@gmail.com",
      action: "Add Module1"
    }
  ]


}
