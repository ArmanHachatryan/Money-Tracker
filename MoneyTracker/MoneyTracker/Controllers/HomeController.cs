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
        private readonly ICreateUserService _createUser;

        public HomeController(ISqlServerDbContext storage, ICreateUserService createUsers)
        {
            _storage = storage;
            _createUser = createUsers;
        }

        //Регистрация пользователя
        [HttpPost("signIn")]
        public IActionResult CreateUser(User data)
        {
            User? user = _storage.Users.FirstOrDefault(p => p.Email == data.Email);
            if (user is null)
            {
                _createUser.CreateUser(data.Email, data.Password);
                return Ok();
            }
            return BadRequest();


        }

        //Авторизация пользователя
        [HttpPost("logIn")]
        public IActionResult Login(User data)
        {
            User? user = _storage.Users.FirstOrDefault(p => p.Email == data.Email && p.Password == data.Password);
            if (user is null) return Unauthorized();

            var claims = new List<Claim> { new Claim(ClaimTypes.Name, data.Email) };
            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    claims: claims,
                    //expires: DateTime.UtcNow.Add(TimeSpan.FromMinutes(2)), // время действия 2 минуты
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new
            {
                access_token = encodedJwt,
                user_id = user.Id
            };

            return Json(response);
        }

        //Только для админа
        [HttpGet("users")]
        public IActionResult GetUsers()
        {
            return Json(_storage.Users.ToList());
        }

        //Создание расхода
        [HttpPost("createExpense")]
        public IActionResult AddCost(Expense data) 
        {
            Expense cost = new Expense
            {
                Type= data.Type,
                Price= data.Price,
                UserId= data.UserId, //вынести 

            };

            _storage.Expenses.Add(cost);
            _storage.Save();
            return Ok();
        }

        //Получение списка расходов
        //[Authorize]
        [HttpGet("expenses")]
        public IActionResult GetData(Guid user_id, string type)
        {
            return Json(_storage.Expenses.Where(x => x.UserId == user_id & x.Type == type).Sum(u => u.Price));
        }
    }
}
