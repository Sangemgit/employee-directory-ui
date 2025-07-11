// js/app.js

let employees = [...mockEmployees];
let filteredEmployees = [...employees];
let currentPage = 1;
let itemsPerPage = 10;

// Initial Render
window.onload = function () {
  renderEmployees();
};

function renderEmployees() {
  const container = document.getElementById("employeeListContainer");
  container.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const paginated = filteredEmployees.slice(start, start + itemsPerPage);

  paginated.forEach((emp) => {
    const card = document.createElement("div");
    card.className = "employee-card";
    card.innerHTML = `
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p><strong>ID:</strong> ${emp.id}</p>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <div class="card-buttons">
        <button class="edit-btn" onclick="editEmployee(${emp.id})">Edit</button>
        <button class="delete-btn" onclick="deleteEmployee(${emp.id})">Delete</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function showForm() {
  document.getElementById("formContainer").style.display = "flex";
  document.getElementById("employeeForm").reset();
  document.getElementById("employeeId").value = "";
  document.getElementById("formTitle").textContent = "Add Employee";
}

function closeForm() {
  document.getElementById("formContainer").style.display = "none";
}

function handleFormSubmit(event) {
  event.preventDefault();
  const id = document.getElementById("employeeId").value;
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const department = document.getElementById("department").value.trim();
  const role = document.getElementById("role").value.trim();

  if (!firstName || !lastName || !email || !department || !role) {
    alert("All fields are required.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Invalid email format.");
    return;
  }

  if (id) {
    const emp = employees.find((e) => e.id == id);
    Object.assign(emp, { firstName, lastName, email, department, role });
  } else {
    const newEmployee = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      department,
      role,
    };
    employees.push(newEmployee);
  }

  filteredEmployees = [...employees];
  closeForm();
  renderEmployees();
}

function editEmployee(id) {
  const emp = employees.find((e) => e.id === id);
  if (!emp) return;

  document.getElementById("employeeId").value = emp.id;
  document.getElementById("firstName").value = emp.firstName;
  document.getElementById("lastName").value = emp.lastName;
  document.getElementById("email").value = emp.email;
  document.getElementById("department").value = emp.department;
  document.getElementById("role").value = emp.role;

  document.getElementById("formTitle").textContent = "Edit Employee";
  document.getElementById("formContainer").style.display = "flex";
}

function deleteEmployee(id) {
  if (!confirm("Are you sure you want to delete this employee?")) return;
  employees = employees.filter((e) => e.id !== id);
  filteredEmployees = [...employees];
  renderEmployees();
}

function toggleFilter() {
  const sidebar = document.getElementById("filterSidebar");
  sidebar.classList.toggle("hidden");
}

function applyFilters() {
  const firstName = document.getElementById("filterFirstName").value.trim().toLowerCase();
  const department = document.getElementById("filterDepartment").value.trim().toLowerCase();
  const role = document.getElementById("filterRole").value.trim().toLowerCase();

  filteredEmployees = employees.filter((emp) => {
    return (
      (firstName ? emp.firstName.toLowerCase().includes(firstName) : true) &&
      (department ? emp.department.toLowerCase().includes(department) : true) &&
      (role ? emp.role.toLowerCase().includes(role) : true)
    );
  });
  currentPage = 1;
  renderEmployees();
  toggleFilter();
}

function clearFilters() {
  document.getElementById("filterFirstName").value = "";
  document.getElementById("filterDepartment").value = "";
  document.getElementById("filterRole").value = "";
  filteredEmployees = [...employees];
  currentPage = 1;
  renderEmployees();
  toggleFilter();
}

function sortEmployees() {
  const sortBy = document.getElementById("sortSelect").value;
  if (sortBy) {
    filteredEmployees.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    renderEmployees();
  }
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  filteredEmployees = employees.filter((emp) => {
    return (
      emp.firstName.toLowerCase().includes(value) ||
      emp.lastName.toLowerCase().includes(value) ||
      emp.email.toLowerCase().includes(value)
    );
  });
  currentPage = 1;
  renderEmployees();
});

function paginate(page) {
  currentPage = page;
  itemsPerPage = parseInt(document.getElementById("itemsPerPage").value);
  renderEmployees();
}

