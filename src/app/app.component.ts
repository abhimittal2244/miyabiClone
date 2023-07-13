import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miyabiClone';
  login = this.location.path()!="";

  constructor(private location: Location, private router: Router){
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.login = this.location.path()!="";
      }
    })
    }
}
