# User Management Interface Readme
This project is a simple User Management Interface built using React. It serves as a demonstration of several key features, including JSON-based content rendering, client-side sorting, elastic filtering, user state toggling, user addition and removal, basic form validation, and routing to a User Settings Screen.

## Getting Started
To run this project locally, follow these steps:

### Clone the repository:

```bash
git clone <https://github.com/metwally-saif/flat-rock-task>
```

### Install the required packages:
```bash
npm install
```
### Start the JSON server:

```bash
json-server --watch src\data\users.json --port 3001
```
### Start the development server:

```bash
npm run dev
```
Open your web browser and visit http://localhost:3000 to access the User Management Interface.

Features
1. JSON-Based Content
The table content is populated from a JSON file (src\data\users.json).
2. Client-Side Sorting
Click on column headers to sort the table data by that column in ascending or descending order.
3. Elastic Filtering
Utilize the search input to dynamically filter table rows based on user input.
4. User State Toggling
Toggle the user state (On/Off) for individual users with a simple checkbox.
5. Adding and Removing Users
Add new users to the table and remove existing users as needed.
6. Simple Form Validation
Perform basic validation on form fields and forms to ensure data accuracy.
7. Routing to User Settings Screen
Navigate to the User Settings Screen to view and manage custom permission sets for users.
Notes
This project is designed to showcase various React features and may be extended or customized as needed for your specific use case.

Be sure to customize the project's functionality, styling, and form validation to meet your requirements.

Additional features and improvements can be added to enhance the User Management Interface as per your project goals.
