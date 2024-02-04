import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './Features/Orders/order-list/order-list.component';
import { CreateOrderComponent } from './Features/Orders/create-order/create-order.component';
import { StockListComponent } from './Features/Stocks/stock-list/stock-list.component';
import { ViewStockHistoryComponent } from './Features/Stocks/view-stock-history/view-stock-history.component';
import { LoginComponent } from './Features/auth/login/login.component';
import { AddStockComponent } from './Features/Stocks/add-stock/add-stock.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'requests/orders',
    component: OrderListComponent
  },
  {
    path: 'requests/orders/create',
    component: CreateOrderComponent
  },
  {
    path: 'stocks',
    component: StockListComponent
  },
  {
    path: 'stocks/add',
    component: AddStockComponent
  },
  {
  path: 'stocks/:symbol',
  component: ViewStockHistoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
