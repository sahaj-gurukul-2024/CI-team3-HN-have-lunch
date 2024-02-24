using Microsoft.EntityFrameworkCore;

namespace HaveLunch.Persistence;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
}