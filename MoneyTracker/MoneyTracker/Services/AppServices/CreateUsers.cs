using MoneyTracker.Models;
using MoneyTracker.Models.Tables;
using MoneyTracker.Services.IAppServices;

namespace Backend.Services.AppService
{
    public class CreateUsers : ICreateUsers
    {
        private readonly ISqlServerDbContext _storage;
        public CreateUsers(ISqlServerDbContext storage) 
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
                Profile = new UserProfile 
                { Age = 0, Name = "default",  }

            };

            _storage.Users.Add(user);
            _storage.Save();
        }
    }
}
