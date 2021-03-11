import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  isLoggedin:boolean;
  constructor(private authService:LoginService){
    this.authService.isLoggedin.subscribe(isLoggedIn=>{
      if(isLoggedIn)
        this.isLoggedin = true
      else
        this.isLoggedin = false;
    });
  }
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean| UrlTree> | Promise<boolean| UrlTree> | boolean | UrlTree {
    return this.isLoggedin;
  }
}
