using HaveLunch.Enums;

namespace HaveLunch.Models;

public class EmployeeAttendanceRequest
{
    public EmployeeResponse Employee { get; set; }

    public DateOnly Date { get; set; }

    public AttendanceStatus Status { get; set; }
}