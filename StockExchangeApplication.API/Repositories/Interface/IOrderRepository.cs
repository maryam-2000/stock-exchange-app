using StockExchangeApplication.API.Models.Domain;

namespace StockExchangeApplication.API.Repositories.Interface
{
    public interface IOrderRepository
    {
        Task<Order> CreateAsync(Order order);

        Task<IEnumerable<Order>> GetAllAsync();
        Task<IEnumerable<Order>> GetAllAsyncForUserAsync(string userId);
        void SetUserId(string userId);
        string GetUserId();
    }
}
