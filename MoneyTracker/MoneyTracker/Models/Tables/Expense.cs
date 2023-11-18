namespace MoneyTracker.Models.Tables
{
    public class Expense
    {
        public int Id { get; set; }
        public Guid UserId { get; set; }
        public string Type { get; set; } //enum
        public double Price { get; set; }

    }
}
