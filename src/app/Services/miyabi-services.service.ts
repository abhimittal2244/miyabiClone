import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiyabiServicesService {
  baseUrl = 'https://localhost:7213';
  constructor(private _http: HttpClient) { }

  getToken(data:any) {
    return this._http.post(this.baseUrl+"/api/RegisterLogin/GetToken", data, { responseType: 'text' })
  }

  getAdmins(){
    return this._http.get(this.baseUrl+"/api/RegisterLogin/GetAdmins")
  }

  createUser(data:any){
    return this._http.post(this.baseUrl+"/api/RegisterLogin", data)
  }

  getUsers(){
    return this._http.get(this.baseUrl+"/api/RegisterLogin/GetAllUsers")
  }

  activeDeactiveUser(id:string, isActive:boolean){
    return this._http.put(this.baseUrl+"/api/RegisterLogin/ValidateUser?id="+id+"&isActive="+isActive,{});
  }

}
