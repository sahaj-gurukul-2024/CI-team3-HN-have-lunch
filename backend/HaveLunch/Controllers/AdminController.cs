using HaveLunch.Services;
using Microsoft.AspNetCore.Mvc;

namespace HaveLunch.Controllers;

[ApiController]
[Route("admin")]
public class AdminController(IAdminService adminService) : Controller
{
    [HttpGet]
    public async Task<IActionResult> GetLunchAttendanceCount(string date = "")
    {
        try
        {
            var dateOnly = DateOnly.Parse(date);
            return Ok(await adminService.GetLunchAttendanceCount(dateOnly));
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("list")]
    public async Task<IActionResult> GetLunchAttendanceList(string date, int page = 1)
    {
        try
        {
            var dateOnly = DateOnly.Parse(date);
            return Ok(await adminService.GetLunchAttendanceList(dateOnly, page));
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}