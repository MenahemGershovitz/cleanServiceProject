import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-clean-service-view',
  templateUrl: './clean-service-view.component.html',
  styleUrls: ['./clean-service-view.component.css']
})
export class CleanServiceViewComponent implements OnInit {
  seconde: number;
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  isAdmin() {
    return localStorage.getItem('isAdmin') === 'true' && this.isConnected();
  }

  isConnected() {
    return localStorage.getItem('access_token') !== null ;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/authentification']);
  }

}
