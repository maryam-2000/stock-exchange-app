using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace StockExchangeApplication.API.Models.DTO
{
    public class StockDto
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string symbol { get; set; }
        public decimal currentPrice { get; set; }
        public DateTime timeStamps { get; set; }
    }
}
