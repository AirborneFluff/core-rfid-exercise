using API.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public sealed class DataContext : DbContext
{
    public DbSet<ClassRegistrationReport> ClassRegistrationReports => Set<ClassRegistrationReport>();
    
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<ClassRegistrationReport>()
            .HasNoKey();
    }
}