export interface AddStockRequest {
    symbol: string;
    currentPrice: number;
    timeStamps: Date;
}