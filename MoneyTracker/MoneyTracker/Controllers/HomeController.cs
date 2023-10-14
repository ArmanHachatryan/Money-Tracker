using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoneyTracker.Models;
using MoneyTracker.Services.IAppServices;
using System;
using System.Collections.Generic;
using System.Linq;

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

        [HttpGet]
        public IActionResult GetData()
        {
            return Json(_storage.Users.ToList());
        }

        //[HttpGet("{id}")]
        //public IActionResult GetMessage(Guid id) 
        //{
        //    var message = _storage.Data.FirstOrDefault(x => x.Id == id);
        //    return Json(message);
        //}

        //[HttpPost]
        //public IActionResult PostData(/*[FromBody] AppData model*/)
        //{
        //    //_sendLetter.SendLetter(model);
        //    _createUser.CreateUser();
        //    return Ok();
        //}

        [HttpPost]
        public IActionResult PostData()
        {
            _createUser.CreateUser();
            return Ok();
        }
    }
}
