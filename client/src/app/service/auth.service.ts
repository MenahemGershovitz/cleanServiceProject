import { Injectable } from '@angular/core';
import { AuthData } from '../auth-data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createUser(name: string, email: string, password: string) {
    const authData: AuthData = { name: name, email: email, password: password };
    this.http.post("http://localhost:3000/api/users/signUp", authData)
    .subscribe(response => {
      console.log(response);
    })
  }
} 