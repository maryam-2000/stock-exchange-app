export interface Order {
    id: string;
    stockSymbol: string;
    orderType: string;
    quantity: Number;
    userID: string | null;
}