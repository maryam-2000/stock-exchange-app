using Microsoft.EntityFrameworkCore;
using StockExchangeApplication.API.Models.Domain;

namespace StockExchangeApplication.API.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) 
        { 
        }
        public DbSet<Stock> Stocks { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<StockHistory> StockHistories { get; set; }

    }
}
