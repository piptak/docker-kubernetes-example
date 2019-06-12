using Microsoft.EntityFrameworkCore;
using RandomDataProject.Entities;

namespace RandomDataProject
{
    public class AppContext : DbContext
    {
        public AppContext(DbContextOptions<AppContext> options) : base(options)
        {}

        public DbSet<RandomTable> RandomTables { get;set; }
    }
}