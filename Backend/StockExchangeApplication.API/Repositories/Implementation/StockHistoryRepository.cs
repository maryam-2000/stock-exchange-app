using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using StockExchangeApplication.API.Data;
using StockExchangeApplication.API.Models.Domain;
using StockExchangeApplication.API.Repositories.Interface;

namespace StockExchangeApplication.API.Repositories.Implementation
{
    public class StockHistoryRepository : IStockHistoryRepository
    {
        private readonly ApplicationDbContext dbContext;

        public StockHistoryRepository(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<List<StockHistory?>> GetStockHistoryBySymbolAsync(string symbol)
        {
            return await dbContext.StockHistories
            .Where(x => x.symbol == symbol)
            .ToListAsync();
        }
    }
}
