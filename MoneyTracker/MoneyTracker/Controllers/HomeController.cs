using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MoneyTracker.Authorization;
using MoneyTracker.Models;
using MoneyTracker.Models.Tables;
using MoneyTracker.Services.IAppServices;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace MoneyTracker.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        private readonly ISqlServerDbContext _storage;
        private readonly ICreateUsers _createUser;

        public HomeController(ISqlServerDbContext storage, ICreateUsers createUsers)
        {
            _storage = storage;
            _createUser = createUsers;
        }

        [Authorize]
        [HttpGet]
        public IActionResult GetData()
        {
            return Json(_storage.Users.ToList());
        }

        [HttpPost("create")]
        public IActionResult CreateUser(User data)
        {
            _createUser.CreateUser(data.Email, data.Password);
            return Ok();
        }

        [HttpPost("login")]
        public IActionResult Login(User data) 
        {
            User? user = _storage.Users.FirstOrDefault(p => p.Email == data.Email && p.Password == data.Password);
            if (user is null) return Unauthorized();

            var claims = new List<Claim> { new Claim(ClaimTypes.Name, data.Email) };
            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    claims: claims,
                    expires: DateTime.UtcNow.Add(TimeSpan.FromMinutes(2)), // время действия 2 минуты
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new
            {
                access_token = encodedJwt,
                username = user.Email
            };

            return Json(response);
        }
    }
}
