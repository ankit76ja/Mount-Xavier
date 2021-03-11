import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedin = new Subject<boolean>()
  constructor(private http:HttpClient) { }

  login(user){
   return this.http.post(environment.login, user)
  }

  contactus(contactDetails){
    return this.http.post(environment.contactus, contactDetails)
  }
}
