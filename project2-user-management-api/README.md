# 🚀 User Management API

A simple and efficient **Backend API** built using **Node.js and Express.js** to manage user data.
This project demonstrates core backend concepts like API creation, request handling, and CRUD operations.

---

## ✨ Features

* ✅ Get all users (GET)
* ✅ Add a new user (POST)
* ✅ Delete a user (DELETE)
* ✅ Basic data validation
* ✅ RESTful API structure

---

## 🛠 Tech Stack

* Node.js
* Express.js
* Postman (for API testing)

---

## 📂 Project Structure

```
server.js  
package.json  
package-lock.json  
```

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/your-username/user-management-api.git
cd user-management-api
npm install
npx nodemon server.js
```

---

## 🌐 API Endpoints

### 🔹 Get all users

```
GET /users
```

### 🔹 Add a new user

```
POST /users
```

**Body:**

```json
{
  "name": "Anjali",
  "email": "anjali@gmail.com"
}
```

### 🔹 Delete a user

```
DELETE /users/:id
```

---

## 🧪 Testing

Use **Postman** to test the API endpoints by sending GET, POST, and DELETE requests.

---

## 📚 Learning Outcomes

* Backend development fundamentals
* API creation and routing
* Client-server communication
* Data validation and response handling

---

## 👩‍💻 Author

**Anjali Sharma**
B.Tech CSE Student | Aspiring Software Engineer

---

## 🚀 Future Improvements

* Add PUT (Update user)
* Connect with MongoDB
* Add Authentication (Login/Signup)

---

⭐ This project is built for learning and demonstration purposes as part of a Full Stack Development Internship.
