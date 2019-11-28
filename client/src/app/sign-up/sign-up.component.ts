import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{

  constructor(public authService: AuthService) {}
  onSignUp(form: NgForm){
    
    this.authService.createUser(form.value.name, form.value.email, form.value.password);
  
;  }
}