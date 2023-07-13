import { Component, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { MiyabiServicesService } from '../Services/miyabi-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private _miyabiService: MiyabiServicesService;
  public loading = true;
  constructor(private router: Router, private miyabiService: MiyabiServicesService
  ) {
    this._miyabiService = miyabiService;
  }
  message: any;
  account = new FormGroup({
    email: new FormControl('', [Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)]),
    password: new FormControl('', [Validators.required])
  });
  send() {
    this.loading = true;
    console.log(this.account.value);
    this._miyabiService
    .getToken(this.account.value)
    .subscribe({
      next: (response) => {
        this.loading = false;
        // Handle the response from the API
        console.log("This is the token", response);
        localStorage.setItem('token', response.toString());
        this.router.navigateByUrl('/admin-user');
      },
      error: (error) => {
        this.loading = false;
        this.message = error.error;
        console.log(error);

      }
    }
    );
  }

  get emailValid() {
  return this.account.get('email')
}
  get passwordValid() {
  return this.account.get('password')
}
}
