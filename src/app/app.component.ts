import {Component, OnInit} from '@angular/core';
import {io} from "socket.io-client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private socket: any;
  public data: any;

  constructor(private router: Router) {

    // Connect Socket with server URL
    this.socket = io('http://127.0.0.1:3000');


  }

  public ngOnInit(): void {

    this.socket.on('notification', (da: string) => {
      this.data = da;
      console.log(this.data)
    });
  }

}
