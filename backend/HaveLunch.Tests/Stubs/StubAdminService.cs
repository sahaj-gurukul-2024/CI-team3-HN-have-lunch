using HaveLunch.Models;
using HaveLunch.Services;

namespace HaveLunch.Tests.Stubs;

public class StubAdminService : IAdminService
{
    public Task<AdminCountResponse> GetLunchAttendanceCount(DateOnly date)
    {
        if (date == new DateOnly(2023, 5, 25))
        {
            return Task.FromResult(new AdminCountResponse(2));
        }
        else if (date == new DateOnly(2023, 5, 26))
        {
            return Task.FromResult(new AdminCountResponse(1));
        }
        else
        {
            return Task.FromResult(new AdminCountResponse(0));
        }
    }

    public Task<List<EmployeeResponse>> GetLunchAttendanceList(DateOnly date, int page = 1)
    {
        if(date == new DateOnly(2023, 5, 25))
        {
            return Task.FromResult<List<EmployeeResponse>>([
                new EmployeeResponse(1, "Bruce"), 
                new EmployeeResponse(2, "Alfred")
            ]);
        }
        else if(date == new DateOnly(2023, 5, 26))
        {
            return Task.FromResult<List<EmployeeResponse>>([
                new EmployeeResponse(1, "Bruce")
            ]);
        }
        else
        {
            return Task.FromResult<List<EmployeeResponse>>([]);
        }
    }
}
