using Microsoft.IdentityModel.Tokens;
using MoneyTracker.Authorization;
using MoneyTracker.Models;
using MoneyTracker.Models.Tables;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace MoneyTracker.Services.AppServices
{
    public class AuthService
    {
        public string AuthUser(User? data)
        {
            var claims = new List<Claim> { new Claim(ClaimTypes.Name, data.Email) };
            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    claims: claims,
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
            return encodedJwt;
        }
    }
}
