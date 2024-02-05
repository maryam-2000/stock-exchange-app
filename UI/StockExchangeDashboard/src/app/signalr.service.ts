import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  hubConnection!: signalR.HubConnection;

  startConnection = () => {
      this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7090/api/stockHub', {
          skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets
      })
      .build();
  
      this.hubConnection
      .start()
      .then(() => {
          console.log('Hub Connection Started!');
      })
      .catch(err => console.log('Error while starting connection: ' + err))
  }


  askServer() {
      this.hubConnection.invoke("SendStockPriceUpdate", "AAPL", 100.22)
          .catch(err => console.error(err));
  }
  
  askServerListener() {
      this.hubConnection.on("ReceiveStockPriceUpdate", (symbol, price) => {
          console.log(symbol, price);
      })
  }


}
