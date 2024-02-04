import { Component, OnDestroy, ViewChild } from '@angular/core';
import { AddStockRequest } from '../models/add-stock-request.model';
import { StocksService } from '../services/stocks.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnDestroy {
  model: AddStockRequest;
  private AddStockSubscription?: Subscription;

  constructor(private stocksService: StocksService,
    private router: Router) {
    this.model = {
      symbol: '',
      currentPrice: 0,
      timeStamps: new Date()
    };
  }


  @ViewChild('form', { static: false }) form!: NgForm;  // Use ! to tell TypeScript it will be initialized

  isFieldInvalid(fieldName: string): boolean {
    return this.form.submitted && this.form.controls[fieldName]?.hasError('required');
  }

  onFormSubmit(){
    if(this.model.symbol == ""){
      alert("You cannot add a new stock with empty fields. Please fill in all fields!")
    }
    else if(this.model.currentPrice <= 0 && this.model.currentPrice != null){
      alert("Please enter a valid value for the Current Price");
    }
    else{
      this.AddStockSubscription = this.stocksService.addStock(this.model)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/stocks');
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.AddStockSubscription?.unsubscribe();
  }

}
