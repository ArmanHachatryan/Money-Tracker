namespace MoneyTracker.Models.Tables
{
    public class Cost
    {
        public int Id { get; set; }
        public string? Type { get; set; } //enum
        public double Price { get; set; }
        public int UserId { get; set; }
    }
}
