namespace StockExchangeApplication.API.Models.DTO
{
    public class CreateOrderRequestDto
    {
        public string stockSymbol { get; set; }
        public string orderType { get; set; } //(buy/sell)
        public int quantity { get; set; }
        public string userID { get; set; }
    }
}
