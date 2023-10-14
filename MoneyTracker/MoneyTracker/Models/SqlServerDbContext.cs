using Microsoft.EntityFrameworkCore;
using MoneyTracker.Models;
using MoneyTracker.Models.Tables;

namespace MoneyTracker.DataBase
{
    public class SqlServerDbContext : DbContext, ISqlServerDbContext
    {
        public DbSet<User> Users { get; set; } = null!;
        public SqlServerDbContext(DbContextOptions<SqlServerDbContext> options)
            : base(options)
        {
            //Database.EnsureDeleted();
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().OwnsOne(u => u.Profile, p =>
            {
                p.OwnsOne(c => c.Expenses);
            });

        }

        public void Save()
        {
            SaveChanges();
        }
    }
}
