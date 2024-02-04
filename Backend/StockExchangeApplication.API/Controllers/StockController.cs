using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StockExchangeApplication.API.Models.Domain;
using StockExchangeApplication.API.Models.DTO;
using StockExchangeApplication.API.Repositories.Interface;

namespace StockExchangeApplication.API.Controllers
{
    //https://localhost:xxxx/api/stock
    [Route("api/[controller]")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly IStockRepository stockRepository;

        public StockController(IStockRepository stockRepository)
        {
            this.stockRepository = stockRepository;
        }

        // POST: /api/Stock
        [HttpPost]
        [Authorize(Roles = "Writer")] // Only admins can create/add new stock symbols
        public async Task<IActionResult> CreateStock(CreateStockRequestDto request)
        {
            // Map DTO to Domain Model

            var stock = new Stock
            {
                symbol = request.symbol,
                currentPrice = request.currentPrice,
                timeStamps = request.timeStamps
            };

            await stockRepository.CreateAsync(stock);

            // Map back from Domain Model to DTO

            var response = new StockDto
            {
                id = stock.id,
                symbol = stock.symbol,
                currentPrice = stock.currentPrice,
                timeStamps = stock.timeStamps
            };

            return Ok(response);

        }

        // GET: https://localhost:7090/api/Stock
        [HttpGet]
        public async Task<IActionResult> GetAllStocks()
        {
            var stocks = await stockRepository.GetAllAsync();

            // Map Domain Model to DTO
            var response = new List<StockDto>();
            foreach (var stock in stocks)
            {
                response.Add(new StockDto
                {
                    id = stock.id,
                    symbol = stock.symbol,
                    currentPrice = stock.currentPrice,
                    timeStamps = stock.timeStamps
                });
            }

            return Ok(response);
        }
    }
}
