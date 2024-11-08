Project Title: Intermediate MERN Stack Machine Test with Web API
Overview
This project is a web application panel created using the MERN stack (MongoDB, Express, React, Node.js). The application consists of a login page, a dashboard, and an employee list. It allows administrators to log in and view employee data. Database interactions and validations are managed via a backend API, with the flexibility to use either MongoDB or MySQL as the database.
Features
1.	Login Page: Allows users to log in using a username and password.
2.	Dashboard: Displays a welcome message, admin details, and a navigation option to the employee list.
3.	Employee List: Admins can view a list of employees, which includes fields like employee ID, image, name, email, mobile number, designation, and salary.
4.	Local Storage Management: Stores the logged-in admin’s username in local storage for session management.
5.	Server-Side Validations: Ensures data integrity on login attempts and employee data entries.
Database Structure
•	Tables:
1.	t_login: Stores user login information.
•	Fields: f_sno, f_userName, f_Pwd
2.	t_Employee: Stores employee information.
•	Fields: f_Id, f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_Salary
API Endpoints
•	Login Endpoint
•	POST /api/login: Verifies user credentials and, if valid, directs to the dashboard.
•	Validations: Server-side validation checks if the input fields are not empty and if the login credentials are correct.
•	Employee Data Endpoint
•	GET /api/employees: Fetches the list of employees from the t_Employee table.
•	Filtering Options: Could include optional query parameters for filtering employees by name, designation, or salary range.
Setup and Installation
1.	Clone the Repository:
bash
Copy code
git clone <repository-url> cd <project-directory> 
2.	Install Dependencies:
bash
Copy code
npm install 
3.	Database Configuration:
•	If using MongoDB: Add your MongoDB URI to the .env file.
•	If using MySQL: Ensure MySQL is installed and running. Configure the database credentials in the .env file and create tables as per the schema above.
4.	Run the Application:
bash
Copy code
npm start 
The app will be available at http://localhost:3000.
Usage
1.	Access the Login Page: Enter valid credentials to log in.
2.	Navigate to the Dashboard: Upon successful login, access the welcome message and navigate to the employee list.
3.	View Employee Details: The employee list displays detailed information about each employee, with options for filtering.
Notes
•	Validations: Both client- and server-side validations are implemented. Server-side validations check input integrity on login and when fetching employee data.
•	Session Management: The admin’s username is stored in local storage, managed on the dashboard.
Technologies Used
•	Frontend: React
•	Backend: Node.js with Express
•	Database: MongoDB or MySQL (configurable)


Contact Information 
Sindhu B H
Sindhubh789@gmail.com
8147082532
