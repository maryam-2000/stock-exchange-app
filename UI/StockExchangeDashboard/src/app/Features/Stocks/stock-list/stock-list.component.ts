import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock.model';
import { Observable } from 'rxjs';
import { StocksService } from '../services/stocks.service';
import { User } from '../../auth/models/user.model';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stocks$?: Observable<Stock[]>;
  user?: User;

  constructor(private stocksService: StocksService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.stocks$ = this.stocksService.getAllStocks();
    this.authService.user()
    .subscribe({
      next: (response) => {
        this.user = response;
      }
    });

    this.user = this.authService.getUser();
  }
}
