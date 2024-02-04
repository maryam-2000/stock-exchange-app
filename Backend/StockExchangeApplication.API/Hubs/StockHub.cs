using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace StockExchangeApplication.API.Hubs
{
    public class StockHub: Hub
    {
        public async Task SendStockPriceUpdate(string symbol, decimal price)
        {
            await Clients.All.SendAsync("ReceiveStockPriceUpdate", symbol, price);
        }
    }
}
