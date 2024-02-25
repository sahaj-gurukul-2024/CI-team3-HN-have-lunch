using HaveLunch.Models;
using HaveLunch.Services;

namespace HaveLunch.Tests.Stubs;

public class StubEmployeeService : IEmployeeService
{
    public Task<EmployeeResponse> LoginAsync(EmployeeLoginModel model)
    {
        return Task.FromResult(new EmployeeResponse(model.Id, model.Name));
    }
}