using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace StockExchangeApplication.API.Models.Domain
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string stockSymbol { get; set; }
        public string orderType { get; set; } // (buy/sell)
        public int quantity { get; set; }
        public string userID { get; set; } // User ID who made the order
    }
}
