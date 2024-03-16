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
- To be able to accommodate the required fields (in particular the countable columns), we must retrieve all rows in ClassRegistrations.
- We then have to join in our other tables to get the additional information from Class and Teacher. We also need to ensure all our Classes are included, so we use a RIGHT JOIN to include all classes
- After that, it's a simple matter of selecting the 2 static fields (Class Name and Teach Name), as well as the dynamic fields.
- Finally, we have to group the results by Class and Teacher.
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
- To produce a procedure, we just wrap this query as follows...
```
CREATE PROCEDURE ClassRegistrationReport
AS
<QUERY HERE>
GO
```
- Finally, we can call this procedure now as `EXEC ClassRegistrationReport`

#### Create WebAPI ####
- Creating the scaffolding for a dotnet webapi can be done through the Rider UI, selecting create new project and choosing .NET web API with controllers
- Then I proceeded to install the NuGet packages required for Entity Framework to facilitate my connection to the database.
- I then implemented a DataContext with a DbSet of type 'ClassRegistrationsReport', which is modelled off the original spec
- Following the repository pattern, I created an interface for a reports repository and implemented it. 
- To have this repository available I had to create a scoped service for use with dependency injection.
- Finally, adding a controller allows the API to be accessible without any authentication.

#### Create SPA ####
My familiarity with Angular means that will be my choice of SPA.
- I begin using the Angular CLI `ng new client`.
- Now my API must accept requests from cross origins during development, so I add a CORS policy to the API.
- To check everything works, I create a simple service that sends a HTTP GET request to the API.
- For my choice of styling, I like to use Tailwind CSS, so I implement this.
- Finally, using `ng g c <component-name>` I can add my table component which contains the logic to retrieve and display the data.


#### Create Second Stored Procedure ####
- Similar to the previous one, we have the SQL query as before. However, this time we must include a clause which filters on the COUNT() aggregate.
As we cannot use WHERE with aggregates, we must use HAVING as follows
`HAVING COUNT(*) >= @MinimumRegistrations`
- As this has to be optional, we simply put in a default value of 0.
```
CREATE PROCEDURE ClassRegistrationReport2 @MinimumRegistrations INT = 0
AS
<SQL QUERY...>
HAVING COUNT(*) >= @MinimumRegistrations
GO
```
- We can call this procedure as `EXEC ClassRegistrationReport2 @MinimumRegistrations = 1`