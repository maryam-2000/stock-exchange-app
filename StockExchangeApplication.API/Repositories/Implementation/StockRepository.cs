using Microsoft.EntityFrameworkCore;
using StockExchangeApplication.API.Data;
using StockExchangeApplication.API.Models.Domain;
using StockExchangeApplication.API.Repositories.Interface;

namespace StockExchangeApplication.API.Repositories.Implementation
{
    public class StockRepository : IStockRepository
    {
        private readonly ApplicationDbContext dbContext;

        public StockRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<Stock> CreateAsync(Stock stock)
        {
            await dbContext.Stocks.AddAsync(stock);
            await dbContext.SaveChangesAsync();

            return stock;
        }

        public async Task<IEnumerable<Stock>> GetAllAsync()
        {
            return await dbContext.Stocks.ToListAsync();
        }
    }
}
