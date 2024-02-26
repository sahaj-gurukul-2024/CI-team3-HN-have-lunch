using HaveLunch.Enums;
using HaveLunch.Models;
using HaveLunch.Services;

namespace HaveLunch.Tests.Stubs;

public class StubEmployeeAttendanceService : IEmployeeAttendanceService
{
    public Task<EmployeeAttendanceResponse> CreateOrUpdateEmployeeAttendance(EmployeeAttendanceRequest request)
    {
        if(request.Status == AttendanceStatus.NOT_SPECIFIED)
        {
            throw new Exception("Invalid Attendance Status");
        }
        if(request.Employee.Id == 1)
        {
            return Task.FromResult(new EmployeeAttendanceResponse
            {
                Id = 1,
                EmployeeId = request.Employee.Id,
                EmployeeName = "Bruce",
                Date = request.Date,
                Status = request.Status
            });
        }
        return Task.FromResult(new EmployeeAttendanceResponse
            {
                Id = 2,
                EmployeeId = request.Employee.Id,
                EmployeeName = "Bruce",
                Date = request.Date,
                Status = request.Status
            });
    }

    public Task<EmployeeAttendanceResponse> GetEmployeeAttendanceDetail(int employeeId, DateOnly date)
    {
        var response = new EmployeeAttendanceResponse
        {
            Status = AttendanceStatus.NOT_SPECIFIED,
            Date = date
        };
        if (employeeId == 1)
        {
            response.Id = 1;
            response.EmployeeId = 1;
            response.EmployeeName = "Bruce";
            if(date == new DateOnly(2023, 5, 25) || date == new DateOnly(2023, 5, 26))
            {
                response.Status = AttendanceStatus.YES;
            }
        }
        else if (employeeId == 2)
        {
            response.Id = 2;
            response.EmployeeId = 2;
            response.EmployeeName = "Alfred";
            if(date == new DateOnly(2023, 5, 25))
            {
                response.Status = AttendanceStatus.YES;
            }
            else if(date == new DateOnly(2023, 5, 26))
            {
                response.Status = AttendanceStatus.NO;
            }
        } 
        else 
        {
            throw new Exception("Employee Not Found!");
        }
        return Task.FromResult(response);
    }

    public Task<List<EmployeeAttendanceResponse>> GetEmployeeAttendanceHistory(int employeeId, int page = 1)
    {
        if(employeeId == 1)
        {
            List<EmployeeAttendanceResponse> responses = [
                new () { Id = 1, EmployeeId = 1, EmployeeName = "Bruce", Date = new DateOnly(2023, 5, 25), Status = AttendanceStatus.YES },
                new () { Id = 2, EmployeeId = 1, EmployeeName = "Bruce", Date = new DateOnly(2023, 5, 26), Status = AttendanceStatus.NO }
            ];
            return Task.FromResult(responses);
        }
        throw new Exception("Employee Not Found!");
    }
}