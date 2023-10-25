using Microsoft.EntityFrameworkCore;

namespace MoneyTracker.Models.Tables
{
    public class User
    {
        public int Id { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public UserProfile? Profile { get; set; }
    }

    public class UserProfile
    {
        public string? Name { get; set; }
        public int Age { get; set; }     
    }
}
