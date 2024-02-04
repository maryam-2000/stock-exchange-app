using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StockExchangeApplication.API.Models.Domain;
using StockExchangeApplication.API.Models.DTO;
using StockExchangeApplication.API.Repositories.Interface;

namespace StockExchangeApplication.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository orderRepository;

        public OrderController(IOrderRepository orderRepository)
        {
            this.orderRepository = orderRepository;
        }

        // POST: /api/Orders
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateOrder(CreateOrderRequestDto request)
        {
            // Get User Id from Order repo
            //var userId = orderRepository.GetUserId();

            // Map DTO to Domain Model

            var order = new Order
            {
                stockSymbol = request.stockSymbol,
                orderType = request.orderType,
                quantity = request.quantity,
                userID = request.userID
            };

            await orderRepository.CreateAsync(order);

            // Map back from Domain Model to DTO

            var response = new OrderDto
            {
                id = order.id,
                stockSymbol = order.stockSymbol,
                orderType = order.orderType,
                quantity = order.quantity,
                userID = order.userID
            };

            return Ok(response);

        }

        // GET: https://localhost:7090/api/Orders
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAllOrders()
        {
            var orders = await orderRepository.GetAllAsync();

            // Map Domain Model to DTO
            var response = new List<OrderDto>();
            foreach (var order in orders)
            {
                response.Add(new OrderDto
                {
                    id = order.id,
                    stockSymbol = order.stockSymbol,
                    orderType = order.orderType,
                    quantity = order.quantity,
                    userID = order.userID
                });
            }

           return Ok(response);
        }

        // GET: https://localhost:7090/api/Orders/{userID}
        [HttpGet("{userID}")]
        [Authorize]
        public async Task<IActionResult> GetAllOrdersForUser([FromRoute] string userID)
        {
            var orders = await orderRepository.GetAllAsyncForUserAsync(userID);

            if (orders is null)
            {
                return NotFound();
            }

            // Map Domain Model to DTO
            var response = orders.Select(o => new OrderDto
            {
                id = o.id,
                stockSymbol = o.stockSymbol,
                orderType = o.orderType,
                quantity = o.quantity,
                userID = o.userID,
            }).ToList();

            return Ok(response);
        }

    }
}
