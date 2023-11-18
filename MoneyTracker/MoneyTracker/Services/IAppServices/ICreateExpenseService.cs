using MoneyTracker.Models.Tables;

namespace MoneyTracker.Services.IAppServices
{
    public interface ICreateExpenseService
    {
        void CreateExpense(Expense data);
    }
}
