🚀 User Management API
A simple and efficient Backend API built using Node.js and Express.js to manage user data. This project demonstrates core backend concepts like API creation, request handling, and CRUD operations.

📌 Features
✅ Get all users (GET)
✅ Add a new user (POST)
✅ Delete a user (DELETE)
✅ Basic data validation
✅ RESTful API structure
🛠️ Tech Stack
Node.js
Express.js
Postman (for API testing)
📂 Project Structure
project2/
│-- server.js
│-- package.json
│-- package-lock.json
⚙️ Installation & Setup
Clone the repository:
git clone https://github.com/your-username/user-management-api.git
Navigate to the project folder:
cd user-management-api
Install dependencies:
npm install
Run the server:
npx nodemon server.js
🌐 API Endpoints
🔹 Get all users
GET /users
🔹 Add a new user
POST /users
Body:

{
  "name": "Anjali",
  "email": "anjali@gmail.com"
}
🔹 Delete a user
DELETE /users/:id
🧪 Testing
Use Postman to test the API endpoints:

Send GET, POST, DELETE requests
Check responses in JSON format
📈 Learning Outcomes
Understanding of backend development
API creation and routing
Handling client-server communication
Data validation and response handling
🙌 Author
Anjali Sharma B.Tech CSE Student | Aspiring Software Engineer

⭐ Future Improvements
Add PUT (Update user)
Connect with database (MongoDB)
Add authentication (Login/Signup)
📌 Note
This project is built for learning and demonstration purposes as part of a Full Stack Development internship.


