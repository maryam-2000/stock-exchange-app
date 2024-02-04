using Microsoft.AspNetCore.Mvc;
using StockExchangeApplication.API.Models.DTO;
using StockExchangeApplication.API.Repositories.Interface;

namespace StockExchangeApplication.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockHistoryController : ControllerBase
    {
        private readonly IStockHistoryRepository stockHistoryRepository;
        public StockHistoryController(IStockHistoryRepository stockHistoryRepository) 
        {
            this.stockHistoryRepository = stockHistoryRepository;
        }

        // GET: https://localhost:7090/api/StockHistory/{symbol}
        [HttpGet("{symbol}")]
        public async Task<IActionResult> GetStockHistoriesBySymbol([FromRoute] string symbol)
        {
            var stockHistories = await stockHistoryRepository.GetStockHistoryBySymbolAsync(symbol);
            
            if(stockHistories is null)
            {
                return NotFound();
            }

            var response = stockHistories.Select(sh => new StockHistoryDto
            {
                id = sh.id,
                symbol = sh.symbol,
                closingPrice = sh.closingPrice,
                date = sh.date,
                volume = sh.volume,
            }).ToList();

            return Ok(response);
        }
    }
}
