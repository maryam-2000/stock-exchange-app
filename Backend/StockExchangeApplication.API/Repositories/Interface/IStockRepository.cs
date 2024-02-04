using StockExchangeApplication.API.Models.Domain;

namespace StockExchangeApplication.API.Repositories.Interface
{
    public interface IStockRepository
    {
        Task<Stock> CreateAsync(Stock stock);
        Task<IEnumerable<Stock>> GetAllAsync();
    }
}
