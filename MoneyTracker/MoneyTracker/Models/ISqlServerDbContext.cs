using Microsoft.EntityFrameworkCore;
using MoneyTracker.Models.Tables;

namespace MoneyTracker.Models
{
    public interface ISqlServerDbContext
    {
        DbSet<User> Users { get; set; }

        DbSet<Expense> Expenses { get; set; }

        void Save();
    }
}
