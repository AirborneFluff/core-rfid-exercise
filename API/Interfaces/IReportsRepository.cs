using API.Data.Models;

namespace API;

public interface IReportsRepository
{
    Task<List<ClassRegistrationReport>> GetClassRegistrationReport();
    Task<List<ClassRegistrationReport>> GetClassRegistrationReport(int minimumRegistrations);
}