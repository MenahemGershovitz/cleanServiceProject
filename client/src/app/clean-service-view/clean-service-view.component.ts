import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
  selector: 'app-clean-service-view',
  templateUrl: './clean-service-view.component.html',
  styleUrls: ['./clean-service-view.component.css']
})
export class CleanServiceViewComponent implements OnInit {
  seconde: number;
  constructor() { }

  ngOnInit() {
  }

}
