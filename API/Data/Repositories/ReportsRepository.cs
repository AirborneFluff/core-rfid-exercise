using API.Data.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace API.Data.Repositories;

public sealed class ReportsRepository : IReportsRepository
{
    private readonly DataContext _context;

    public ReportsRepository(DataContext context)
    {
        _context = context;
    }
    
    public Task<List<ClassRegistrationReport>> GetClassRegistrationReport()
    {
        return _context.ClassRegistrationReports
            .FromSqlRaw("exec ClassRegistrationReport")
            .ToListAsync();
    }
}