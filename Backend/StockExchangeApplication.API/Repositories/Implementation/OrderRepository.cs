using Microsoft.EntityFrameworkCore;
using StockExchangeApplication.API.Data;
using StockExchangeApplication.API.Models.Domain;
using StockExchangeApplication.API.Repositories.Interface;

namespace StockExchangeApplication.API.Repositories.Implementation
{
    public class OrderRepository: IOrderRepository
    {
        private readonly ApplicationDbContext dbContext;

        private string userId;

        public OrderRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<Order> CreateAsync(Order order)
        {
            await dbContext.Orders.AddAsync(order);
            await dbContext.SaveChangesAsync();

            return order;
        }

        public async Task<IEnumerable<Order>> GetAllAsync()
        {
            return await dbContext.Orders.ToListAsync();
        }

        public void SetUserId(string userId)
        {
            this.userId = userId;
        }

        public string GetUserId()
        {
            return userId;
        }

        public async Task<IEnumerable<Order>> GetAllAsyncForUserAsync(string userId)
        {
            return await dbContext.Orders
            .Where(order => order.userID == userId)
            .ToListAsync();
        }
    }
}
