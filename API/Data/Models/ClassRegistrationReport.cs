namespace API.Data.Models;

public sealed class ClassRegistrationReport
{
    public required string Class { get; set; }
    public required string TeacherName { get; set; }
    public int Registrations { get; set; }
    public int NumberPaid { get; set; }
}