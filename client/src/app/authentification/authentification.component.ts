import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent{
  constructor(public authService: AuthService){}
  
  onAuth(form: NgForm){
    if(form.invalid){
      return;
    }
    this.authService.login(form.value.email, form.value.password);
  }
  

}
