import { Injectable } from '@angular/core';
import { CreateOrderRequest } from '../models/create-order-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  createOrder(model: CreateOrderRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/order?addAuth=true`, model);
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiBaseUrl}/api/Order?addAuth=true`);
  }

  getAllOrdersByUserID(userID: string): Observable<Order[]>{
    return this.http.get<Order[]>(`${environment.apiBaseUrl}/api/Order/${userID}?addAuth=true`);
  }

}
