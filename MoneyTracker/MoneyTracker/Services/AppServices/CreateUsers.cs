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
        public void CreateUser()
        {
            User user = new User
            {
                Id = Guid.NewGuid(),
                Login = "login1",
                Password = "pass1234",
                Profile = new UserProfile 
                { Age = 23, Name = "Tom", Expenses = new List<Item>() { new Item("Milk", "Eat", 100), new Item("Bread", "Eat", 50)}  }

            };

            _storage.Users.Add(user);
            _storage.Save();
        }
    }
}
