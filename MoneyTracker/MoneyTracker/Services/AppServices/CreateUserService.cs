using MoneyTracker.Models;
using MoneyTracker.Models.Tables;
using MoneyTracker.Services.IAppServices;

namespace Backend.Services.AppService
{
    public class CreateUserService : ICreateUserService
    {
        private readonly ISqlServerDbContext _storage;
        public CreateUserService(ISqlServerDbContext storage) 
        {
            _storage = storage;
        }

        //Регистрация
        public void CreateUser(string email, string password)
        {
            User user = new User
            {
                Email = email,
                Password = password,
            };

            _storage.Users.Add(user);
            _storage.Save();
        }
    }
}
