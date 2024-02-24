using HaveLunch.Enums;

namespace HaveLunch.Models;

public class EmployeeAttendanceRequest
{
    public EmployeeResponse Employee { get; set; }

    public DateTime Date { get; set; }

    public AttendanceStatus Status { get; set; }
}