import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IotDataService {

  private socket: any;
  public data: any;
  private url = 'http://localhost:3000';

  constructor() {
    this.socket = io.io(this.url);
    if (this.socket) {
      console.log("hi")
    }
  }

  getData(eventName: String) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        console.log("hi 2");
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: any) {
    if (this.socket.emit(eventName, data)) {
      console.log("is emit")
    } else {
      console.log("no")
    }
  }

}
