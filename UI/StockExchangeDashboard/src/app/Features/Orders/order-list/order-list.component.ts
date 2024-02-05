import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { Order } from '../models/order.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  userID: string | null = null;
  orders$?: Observable<Order[]>;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.userID = localStorage.getItem('user-id');
    if(this.userID){
      this.orders$ = this.ordersService.getAllOrdersByUserID(this.userID);
    }
  }
}
