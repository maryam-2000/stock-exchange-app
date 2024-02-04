export interface CreateOrderRequest {
    stockSymbol: string;
    orderType: string;
    quantity: number;
    userID: string | null;
}