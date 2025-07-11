# Employee Directory Web Interface

## Overview

This is a responsive and interactive Employee Directory Web Interface developed using **HTML**, **CSS**, **JavaScript**, and **Freemarker templates**. The application demonstrates front-end development principles such as dynamic rendering, in-memory data handling, client-side filtering/sorting, and responsive design without relying on any backend.

---

## Features

### Dashboard Page

* Displays a grid of employee cards with:

  * Employee ID
  * First Name
  * Last Name
  * Email
  * Department
  * Role
* Edit and Delete buttons for each employee.

### Add/Edit Employee

* Form for adding or editing employees.
* Form fields: First Name, Last Name, Email, Department, Role.
* Validations:

  * Required fields
  * Email format check
* Form overlay for smooth UX.

### Filter / Sort / Search

* Search by name or email.
* Filter by:

  * First Name
  * Department
  * Role
* Sort by:

  * First Name
  * Department

### Pagination

* Options for 10, 25, 50, 100 employees per page.
* Navigable page buttons.

### Responsive Design

* Fully responsive for desktop, tablet, and mobile using Flexbox and media queries.

---

## Project Structure

```
employee-directory/
├── index.ftlh                      # Main Freemarker HTML template
├── js/
│   └── app.js                      # Main JavaScript logic
├── css/
│   └── style.css                   # All styling and responsive rules
├── images/                         # (Optional) For company logo or avatar icons
└── README.md
```

---

## Setup Instructions

### Option 1: Open Locally

1. Clone or download this repository.
2. Open `index.ftlh` or `index.html` in a browser directly **(via Live Server recommended)**.
3. Ensure you have folder structure intact:

   * `/js/app.js`
   * `/css/style.css`

### Option 2: Run with Freemarker (Optional)

* If you want to use real Freemarker rendering:

  * Setup a Java backend
  * Pass employee list as a model attribute
  * Render `index.ftlh` with Freemarker engine

---

## Screenshots (Optional)

Include UI screenshots here (dashboard, form, filters, mobile view).

---

## Challenges Faced

* Integrating pagination logic alongside search and filter.
* Ensuring layout responsiveness across devices.
* Managing DOM updates without any external library/framework.

---

## Future Improvements

* Persist data using `localStorage` or IndexedDB.
* Add avatar/profile images to each employee.
* Enhance form UX with real-time validation.
* Add export (CSV/PDF) and print functionality.

---

## Author

Ramesh Sangem
MCA Graduate (2022)

---

## License

© 2025 Employee Directory App. All Rights Reserved.
