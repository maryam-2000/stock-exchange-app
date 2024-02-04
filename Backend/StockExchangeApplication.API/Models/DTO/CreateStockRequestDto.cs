namespace StockExchangeApplication.API.Models.DTO
{
    public class CreateStockRequestDto
    {
        public string symbol { get; set; }
        public decimal currentPrice { get; set; }
        public DateTime timeStamps { get; set; }
    }
}
