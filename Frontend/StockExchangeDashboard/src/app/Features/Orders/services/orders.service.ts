import { Injectable } from '@angular/core';
import { CreateOrderRequest } from '../models/create-order-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient,
    private cookieService: CookieService) { }

  createOrder(model: CreateOrderRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/order`, model,  {
      headers: {
        'Authorization': this.cookieService.get('Authorization')
      }
    });
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiBaseUrl}/api/Order`, {
      headers: {
        'Authorization': this.cookieService.get('Authorization')
      }
    });
  }

  getAllOrdersByUserID(userID: string): Observable<Order[]>{
    return this.http.get<Order[]>(`${environment.apiBaseUrl}/api/Order/${userID}`, {
      headers: {
        'Authorization': this.cookieService.get('Authorization')
      }
    });
  }

}
