import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(user){
   return this.http.post(environment.login, user)
  }

  contactus(contactDetails){
    return this.http.post(environment.contactus, contactDetails)
  }
}
