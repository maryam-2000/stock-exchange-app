using Microsoft.AspNetCore.Identity;

namespace StockExchangeApplication.API.Repositories.Interface
{
    public interface ITokenRepository
    {
        string CreateJwtToken(IdentityUser user, List<string> roles);
    }
}
