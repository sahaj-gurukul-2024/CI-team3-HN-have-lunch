using HaveLunch.Persistence;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

var connectionString = builder.Configuration.GetConnectionString("PostgresConnection");
builder.Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(connectionString));

builder.Services.AddControllers();

var app = builder.Build();

app.UseCors();
app.UseRouting();

app.MapGet("/health-checkg", () => "Hello World!");

app.MapControllers();

app.Run();
