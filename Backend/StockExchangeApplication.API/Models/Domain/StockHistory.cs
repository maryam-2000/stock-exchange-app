using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace StockExchangeApplication.API.Models.Domain
{
    public class StockHistory
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; } // Assuming you want an ID for each history entry
        public string symbol { get; set; }
        public DateTime date { get; set; }
        public decimal closingPrice { get; set; }
        public int volume { get; set; }
    }
}
