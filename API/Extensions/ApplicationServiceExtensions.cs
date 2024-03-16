using API.Data;
using API.Data.Repositories;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions;

public static class ApplicationServiceExtensions
{
    public static void AddDataServices(this WebApplicationBuilder builder)
    {
        builder.Services.AddDbContext<DataContext>(
            o => o.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
        
        builder.Services.AddScoped<IReportsRepository, ReportsRepository>();
    }
}