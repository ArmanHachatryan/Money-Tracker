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
        private readonly ICreateExpenseService _createExpense;
        private readonly IAuthService _authService;

        public HomeController(ISqlServerDbContext storage, ICreateUserService createUsers, 
            ICreateExpenseService createExpense, IAuthService authService)
        {
            _storage = storage;
            _createUser = createUsers;
            _createExpense = createExpense;
            _authService = authService;
        }

        //Регистрация пользователя
        [HttpPost("signIn")]
        public IActionResult SignIn(User data)
        {
            User? user = _storage.Users.FirstOrDefault(p => p.Email == data.Email);
            if (user is null)
            {
                _createUser.CreateUser(data.Email, data.Password);
                return Ok();
            }
            return BadRequest();
        }

        //Авторизация пользователя и присвоение токена
        [HttpPost("logIn")]
        public IActionResult LogIn(User data)
        {
            User? user = _storage.Users.FirstOrDefault(p => p.Email == data.Email && p.Password == data.Password);
            if (user is null) return Unauthorized();

            var response = new
            {
                access_token = _authService.GiveTocken(user),
                user_id = user.Id
            };

            return Json(response);
        }

        //Создание расхода
        [Authorize]
        [HttpPost("createExpense")]
        public IActionResult AddExpense(Expense data) 
        {
            _createExpense.CreateExpense(data);
            return Ok();
        }

        //Полученить общую суммы расходов по типу
        [Authorize]
        [HttpGet("expenses")]
        public IActionResult GetSum(Guid user_id, string type)
        {
            return Json(_storage.Expenses.Where(x => x.UserId == user_id & x.Type == type).Sum(u => u.Price));
        }
    }
}
