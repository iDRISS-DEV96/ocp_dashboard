import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ocp-nav-bar',
  templateUrl: './ocp-nav-bar.component.html',
  styleUrls: ['./ocp-nav-bar.component.css']
})
export class OcpNavBarComponent implements OnInit {
  LOG_TIME: any;
  dash: boolean = false;
  hist: boolean = false;
  predic: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.LOG_TIME = Date.now();
      console.log(this.router.url);

    if (this.router.url == '/dashboard') {
      this.dash = true;
      this.hist = false;
      this.predic = false;


    }
    if (this.router.url === '/production-history') {
      this.hist = true;
      this.dash = false;
      this.predic = false;


    }
    if (this.router.url === '/data-estimation') {
      this.predic = true;
      this.dash = false;
      this.hist = false;


    }
  }

}
