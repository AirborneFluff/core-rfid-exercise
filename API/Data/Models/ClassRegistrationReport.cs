using System.ComponentModel.DataAnnotations.Schema;

namespace API.Data.Models;

public sealed class ClassRegistrationReport
{
    public required string Class { get; set; }
    
    [Column("Teacher Name")]
    public required string TeacherName { get; set; }
    
    public int Registrations { get; set; }
    
    [Column("Number Paid")]
    public int NumberPaid { get; set; }
}