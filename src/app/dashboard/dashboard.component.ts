import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dash: boolean = false;
  constructor(private router: Router) {
    if (this.router.url === '/dashboard') {
      this.dash = true;
      // this.hist = false;
      // this.predic = false;
      console.log("ssss")


    }
  }

  ngOnInit(): void {
  }

}
