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
    public async Task<ActionResult> GetReport()
    {
        var reports = await _reportsRepository.GetClassRegistrationReport();
        return Ok(reports);
    }
}