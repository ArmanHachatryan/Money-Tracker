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
                Expenses = new List<Item>() { new Item(Guid.NewGuid(), "Milk", "Eat", 100), new Item(Guid.NewGuid(), "benz", "car", 400) },
                Profile = new UserProfile 
                { Age = 23, Name = "Tom", Login = "login1", Password = "pass1234", }

            };

            _storage.Users.Add(user);
            _storage.Save();
        }
    }
}
