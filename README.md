Smart Study Planner 
A robust, client-side web application designed to help students organize subjects, manage schedules, and track academic progress. This project was built using Vanilla JavaScript, HTML5, and CSS3, focusing on a clean UI/UX and efficient data persistence.

Features

Dashboard Overview: A high-level summary of total subjects, pending tasks, and a daily focus view.


Subject Management: Add, edit, and delete subjects with assigned priority levels (High, Medium, Low).


Conflict-Aware Schedule: A daily timetable that prevents double-booking time slots.


Task Manager: Track assignments and exams with specific deadlines and completion status.


Progress Analytics: Visual tracking of task completion rates using a dynamic progress bar.


Theme Customization: Toggle between Light and Dark modes for better accessibility and user preference.


Data Persistence: All data is automatically saved to the browser's LocalStorage, ensuring it remains available after a page refresh or restart.

🛠️ Technical Implementation
Architecture: Built as a Single Page Application (SPA) using a state-driven rendering engine.

Logic:

Uses JSON.parse and JSON.stringify for data serialization.

Implements Array.prototype.some() for schedule conflict detection.

Uses Date.now() for unique ID generation to manage individual list items.

Styling:

Responsive design using CSS Flexbox/Grid for mobile and desktop compatibility.

Custom Google Font pairing (Montserrat and Open Sans) for high readability.

📂 Project Structure
Plaintext
📁 Smart-Study-Planner
├── index.html   # Main application structure & sections
├── style.css    # Responsive design & theme variables
├── script.js   # Application logic & LocalStorage handling
└── README.md    # Project documentation
📝 Setup Instructions
Download or clone the project files.

Open index.html in any modern web browser (Chrome, Firefox, or Edge).

No external libraries or frameworks are required (No NPM, No React).

👤 Author & Contact
Developer: Raghav

Email: raghavissa701@gmail.com
GitHub

LinkedIn
