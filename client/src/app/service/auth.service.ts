import { Injectable } from '@angular/core';
import { loginData } from '../interfaces/loginData.model';
import { AuthData } from '../interfaces/auth-data.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})

export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }
  

  static get admin():string{
    return localStorage.getItem('isAdmin');
  }

  static get token(): string {
    return localStorage.getItem('access_token');
  }
  
  createUser(name: string, email: string, password: string) {
    const authData: AuthData = { name: name, email: email, password: password };
    this.http.post("http://localhost:3000/api/users/signUp", authData)
    .subscribe(response => {
      console.log(response);
    })
  }

  login(email: string, password: string){
    const loginData: loginData = {email: email, password: password };
    this.http.post<{token: string,isAdmin:boolean,userId:string}>("http://localhost:3000/api/users/login", loginData)
      .subscribe(response => {
        localStorage.setItem('access_token', response.token);
        localStorage.setItem('userId', response.userId);
        this.router.navigate(['/home']);
        this.isAdmin();
      });
  }

  logout(){
    localStorage.removeItem('access_token');
  }

  isAdmin() {
    console.log('heyyyy')
    const userId = localStorage.getItem('userId');
    return this.http.get(`http://localhost:3000/api/users/isAdmin/${userId}`).subscribe(res => {
      localStorage.setItem('isAdmin', res.toString());
      console.log('hooo')
  })
  }
} 