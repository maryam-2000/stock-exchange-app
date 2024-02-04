import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  constructor(public hubConnection: signalR.HubConnection) {}
  // constructor(private socket: Socket) {}

  // connect() {
  //   this.socket.connect();
  // }

  // disconnect() {
  //   this.socket.disconnect();
  // }

  // onStockPriceUpdate(): Observable<any> {
  //   return this.socket.fromEvent('ReceiveStockPriceUpdate');
  // }

   startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(`${environment.apiBaseUrl}/api/test`, {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();

    this.hubConnection
    .start()
    .then(() => {
      console.log("Hub Connection Started!");
    })
    .catch(err => console.log("Error while starting connection: " + err))
   }

   askServer() {
    this.hubConnection.invoke("askServer", "hey")
    .catch(err => console.log(err));
   }

   askServerListener(){
    this.hubConnection.on("askServerResponse", (someText) => {
      console.log(someText);
    })
   }
}
