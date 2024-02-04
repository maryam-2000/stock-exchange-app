using StockExchangeApplication.API.Models.Domain;

namespace StockExchangeApplication.API.Repositories.Interface
{
    public interface IStockHistoryRepository
    {
        Task<List<StockHistory?>> GetStockHistoryBySymbolAsync(string symbol);
    }
}
