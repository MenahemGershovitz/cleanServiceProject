import { Injectable } from '@angular/core';
import { loginData } from '../interfaces/loginData.model';
import { AuthData } from '../interfaces/auth-data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root'})

export class AuthService {
  private token: string;

  constructor(private http: HttpClient) { }

  getToken(){
    return this.token;
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
    this.http.post<{token: string}>("http://localhost:3000/api/users/login", loginData)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
      })
  }
} 