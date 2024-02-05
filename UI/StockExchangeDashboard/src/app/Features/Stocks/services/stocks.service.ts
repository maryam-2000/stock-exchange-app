import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../models/stock.model';
import { StockHistory } from '../models/stock-history.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddStockRequest } from '../models/add-stock-request.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  addStock(model: AddStockRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Stock?addAuth=true`, model);
  }

  getAllStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${environment.apiBaseUrl}/api/Stock`);
  }

  getStockHistoryBySymbol(symbol: string): Observable<StockHistory[]>{
    return this.http.get<StockHistory[]>(`${environment.apiBaseUrl}/api/StockHistory/${symbol}`);
  }
}
