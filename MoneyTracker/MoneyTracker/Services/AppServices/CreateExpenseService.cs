using MoneyTracker.Models;
using MoneyTracker.Models.Tables;
using MoneyTracker.Services.IAppServices;

namespace Backend.Services.AppService
{
    public class CreateExpenseService : ICreateExpenseService
    {
        private readonly ISqlServerDbContext _storage;
        public CreateExpenseService(ISqlServerDbContext storage) 
        {
            _storage = storage;
        }

        public void CreateExpense(Expense data)
        {
            Expense expense = new Expense
            {
                Type = data.Type,
                Price = data.Price,
                UserId = data.UserId, 
            };

            _storage.Expenses.Add(expense);
            _storage.Save();
        }
    }
}
