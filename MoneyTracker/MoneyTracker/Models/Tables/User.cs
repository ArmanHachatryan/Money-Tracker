using Microsoft.EntityFrameworkCore;

namespace MoneyTracker.Models.Tables
{
    public class User
    {
        public Guid Id { get; set; }
        public List<Item>? Expenses { get; set; }
        public UserProfile? Profile { get; set; }
    }

    public class UserProfile
    {
        public string? Login { get; set; }
        public string? Password { get; set; }
        public string? Name { get; set; }
        public int Age { get; set; }     
    }

    public class Item
    {
        public Item(Guid id, string name, string type, int price)
        {
            Id = id;
            Name = name;
            Type = type;
            Price = price;

        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; } //можно еще и enum

        public int Price { get; set; }
    }

}
