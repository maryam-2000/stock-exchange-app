import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { StocksService } from '../services/stocks.service';
import { StockHistory } from '../models/stock-history.model';

@Component({
  selector: 'app-view-stock-history',
  templateUrl: './view-stock-history.component.html',
  styleUrls: ['./view-stock-history.component.css']
})
export class ViewStockHistoryComponent implements OnInit, OnDestroy {
  symbol: string | null = null;
  paramsSubscription?: Subscription;
  stockHistories$?: Observable<StockHistory[]>;

  constructor(private route: ActivatedRoute,
    private stocksService: StocksService){

  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.symbol = params.get('symbol');

        if(this.symbol){
          // get the stock history data from the API for this stock symbol
          this.stockHistories$ = this.stocksService.getStockHistoryBySymbol(this.symbol);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

}
