import { Component, OnDestroy, ViewChild } from '@angular/core';
import { CreateOrderRequest } from '../models/create-order-request.model';
import { OrdersService } from '../services/orders.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnDestroy {

    model: CreateOrderRequest;
    private CreateOrderSubscription?: Subscription;


    constructor(private ordersService: OrdersService,
      private router: Router) {
        const id = localStorage.getItem('user-id');
        this.model = {
          stockSymbol: '',
          orderType: '',
          quantity: 1,
          userID: id
        };
    }

    @ViewChild('form', { static: false }) form!: NgForm;  // Use ! to tell TypeScript it will be initialized

    isFieldInvalid(fieldName: string): boolean {
      return this.form.submitted && this.form.controls[fieldName]?.hasError('required');
    }

    onFormSubmit(){
      if(this.model.stockSymbol == "" || this.model.orderType == ""){
        alert("You cannot create an order with empty fields. Please fill in all fields!")
      }
      else if(this.model.quantity <= 0 && this.model.quantity != null){
        alert("Please enter a valid value for the quantity");
      }
      else{
        this.CreateOrderSubscription = this.ordersService.createOrder(this.model)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/requests/orders');
          }
        })
      }
    }

    ngOnDestroy(): void {
      this.CreateOrderSubscription?.unsubscribe();
    }
}
