using System.Text.Json.Serialization;

namespace HaveLunch.Enums;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum AttendanceStatus : byte
{
    YES,
    NO,
    NOT_SPECIFIED
}