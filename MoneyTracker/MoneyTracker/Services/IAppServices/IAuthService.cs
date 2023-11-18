using MoneyTracker.Models.Tables;

namespace MoneyTracker.Services.IAppServices
{
    public interface IAuthService
    {
        string GiveTocken(User data);
    }
}
