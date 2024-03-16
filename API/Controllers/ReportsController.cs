using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public sealed class ReportsController : ControllerBase
{
    private readonly IReportsRepository _reportsRepository;

    public ReportsController(IReportsRepository reportsRepository)
    {
        _reportsRepository = reportsRepository;
    }
    
    [HttpGet]
    public async Task<ActionResult> GetReport([FromQuery] int minimumRegistrations = 0)
    {
        var reports = await _reportsRepository.GetClassRegistrationReport(minimumRegistrations);
        return Ok(reports);
    }
}