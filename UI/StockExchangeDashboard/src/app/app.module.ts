import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/Components/navbar/navbar.component';
import { OrderListComponent } from './Features/Orders/order-list/order-list.component';
import { CreateOrderComponent } from './Features/Orders/create-order/create-order.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StockListComponent } from './Features/Stocks/stock-list/stock-list.component';
import { ViewStockHistoryComponent } from './Features/Stocks/view-stock-history/view-stock-history.component';
import { LoginComponent } from './Features/auth/login/login.component';
import { AddStockComponent } from './Features/Stocks/add-stock/add-stock.component';
import { AuthInterceptor } from './Core/interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderListComponent,
    CreateOrderComponent,
    StockListComponent,
    ViewStockHistoryComponent,
    LoginComponent,
    AddStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
