const API = "http://localhost:5000/api/users";

let editId = null;

// AUTO LOAD USERS
window.onload = loadUsers;

// SHOW MESSAGE
function showMessage(text, type) {
  const msg = document.getElementById("message");
  msg.innerHTML = text;
  msg.className = type;

  setTimeout(() => {
    msg.innerHTML = "";
  }, 2000);
}

// LOAD USERS
async function loadUsers() {
  const container = document.getElementById("container");
  container.innerHTML = "⏳ Loading...";

  try {
    const res = await fetch(API);
    const data = await res.json();

    container.innerHTML = "";

    if (data.length === 0) {
      container.innerHTML = "😕 No users found";
      return;
    }

    data.forEach(user => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        <p>${user.city}</p>

        <button onclick="editUser('${user._id || user.id}', '${user.name}', '${user.email}', '${user.city}')">Edit</button>
        <button onclick="deleteUser('${user._id || user.id}')">Delete</button>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    container.innerHTML = "❌ Failed to load users";
  }
}

// ADD / UPDATE USER
async function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;

  if (!name || !email || !city) {
    showMessage("❌ Please fill all fields", "error");
    return;
  }

  try {
    if (editId) {
      await fetch(`${API}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, city })
      });

      showMessage("✅ User Updated!", "message");
      editId = null;
      document.getElementById("submitBtn").innerText = "Add User";

    } else {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, city })
      });

      showMessage("✅ User Added!", "message");
    }

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";

    loadUsers();

  } catch (err) {
    showMessage("❌ Error saving user", "error");
  }
}

// DELETE USER
async function deleteUser(id) {
  if (!confirm("Are you sure you want to delete this user?")) return;

  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  loadUsers();
}

// EDIT USER
function editUser(id, name, email, city) {
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("city").value = city;

  editId = id;

  document.getElementById("submitBtn").innerText = "Update User";
}