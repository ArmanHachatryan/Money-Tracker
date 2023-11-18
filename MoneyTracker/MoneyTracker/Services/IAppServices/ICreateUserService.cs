namespace MoneyTracker.Services.IAppServices
{
    public interface ICreateUserService
    {
        void CreateUser(string login, string password);
    }
}
