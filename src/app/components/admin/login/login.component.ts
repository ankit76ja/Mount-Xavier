import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private loginService:LoginService,private router:Router,
    private dialog:MatDialog) { }

  ngOnInit() {
  }
  onSubmit(loginForm:NgForm){
    this.loginService.login(loginForm.value).subscribe(res=>{
      if(res['Success']){
        this.loginService.isLoggedin.next(true);
        console.log('Logged in Successfully') ;
        this.router.navigate(['mount-xavier','editEntity'])       
      }
    },
    err=>{
      console.log(err);
      this.openModal();
    })
  }
  openModal(){
    this.dialog.open(DialogComponent, {
      width: '500px',
      data: {message:'You have entered incorrect userid or password'}
    })
  }
}
