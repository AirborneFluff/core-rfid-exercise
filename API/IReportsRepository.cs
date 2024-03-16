using API.Data.Models;

namespace API;

public interface IReportsRepository
{
    Task<List<ClassRegistrationReport>> GetClassRegistrationReport();
}