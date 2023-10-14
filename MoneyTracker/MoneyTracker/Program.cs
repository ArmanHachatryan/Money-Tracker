using Backend.Services.AppService;
using Microsoft.EntityFrameworkCore;
using MoneyTracker.DataBase;
using MoneyTracker.Models;
using MoneyTracker.Services.IAppServices;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.

//db
string connection = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ISqlServerDbContext, SqlServerDbContext>(options => options.UseSqlServer(connection));
builder.Services.AddTransient<ICreateUsers, CreateUsers>();

builder.Services.AddCors(c =>
{
    c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
