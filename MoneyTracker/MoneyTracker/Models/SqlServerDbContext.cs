using Microsoft.EntityFrameworkCore;
using MoneyTracker.Models;
using MoneyTracker.Models.Tables;

namespace MoneyTracker.DataBase
{
    public class SqlServerDbContext : DbContext, ISqlServerDbContext
    {
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Expense> Expenses { get; set; } = null!;
        public SqlServerDbContext(DbContextOptions<SqlServerDbContext> options)
            : base(options)
        {
            //Database.EnsureDeleted();
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();
        }

        public void Save()
        {
            SaveChanges();
        }
    }
}
