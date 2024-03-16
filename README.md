# core-rfid-exercise
An exercise given by CoreRFID to demonstrate skills in SQL, .NET and SPA development


## Tasks ##
- Setup SQL database using backup file
- Create Stored Procedure called 'ClassRegistrationReport'
- Create .NET Core API project which connected to SQL Database and executes the procedure
- Create SPA in Angular which display's the data

### Additional Tasks ###
- Create duplicate procedure which accepts filter parameter
- Modify SPA to allow filter parameter to be passed in

## Progress ##
#### Choose SQL Database flavour ####
As this project is simply a development test, I will use whatever SQL database I have installed.
There are no specific requirements here, so I will be using Microsoft SQL Server 2019 Express.

#### Create Stored Procedure ####
1. To be able to accomodate the required fields (in particular the countable collumns), we must retrieve all rows in ClassRegistrations.
2. We then have to join in our other tables to get the additional information from Class and Teacher. We also need to ensure all our Classes are included, so we use a RIGHT JOIN to include all classes
3. After that, it's a simple matter of selecting the 2 static fields (Class Name and Teach Name), as well as the dynamic fields.
4. Finally, we have to group the results by Class and Teacher.
This query would look like this...
```
SELECT
	Class.ClassName as [Class],
	Teacher.TeacherName as [Teacher Name],
	Count(*) as [Registrations],
	Count(IIF(ClassRegistration.HasPaidFees = 1, 1, null)) as [Number Paid]
FROM ((ClassRegistration
	RIGHT JOIN Class on Class.Class_ID = ClassRegistration.Class_ID)
	JOIN Teacher on Teacher.Teacher_ID = Class.Teacher_ID)
GROUP BY Class.ClassName, Teacher.TeacherName
```
5. To produce a procedure, we just wrap this query as follows...
```
CREATE PROCEDURE ClassRegistrationReport
AS
<QUERY HERE>
GO
```
6. Finally, we can call this procedure now as `EXEC ClassRegistrationReport`

#### Create WebAPI ####
1. Creating the scaffolding for a dotnet webapi can be done through the Rider UI, selecting create new project and choosing .NET web API with controllers
2. Then I proceeded to install the NuGet packages required for Entity Framework to facilitate my connection to the database.
3. I then implemented a DataContext with a DbSet of type 'ClassRegistrationsReport', which is modelled off the original spec
4. Following the repository pattern, I created an interface for a reports repository and implemented it.
5. To have this repository available I had to create a scoped service for use with dependency injection.
6. Finally, adding a controller allows the API to be accessible without any authentication.
