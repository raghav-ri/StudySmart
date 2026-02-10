// Data Storage
let appData = JSON.parse(localStorage.getItem('studyPlanner')) || {
    subjects: [],
    schedule: [],
    tasks: []
};

// Persistence [cite: 19, 20]
function saveData() {
    localStorage.setItem('studyPlanner', JSON.stringify(appData));
    updateDashboard();
    renderSubjects();
    renderTasks();
    renderSchedule();
    updateAnalytics();
}

// Section Navigation
function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// B. Subject Management [cite: 13]
function addSubject() {
    const name = document.getElementById('sub-name').value;
    const priority = document.getElementById('sub-priority').value;
    if (name) {
        appData.subjects.push({ id: Date.now(), name, priority });
        document.getElementById('sub-name').value = '';
        saveData();
    }
}

function renderSubjects() {
    const list = document.getElementById('subject-list');
    const select = document.getElementById('sched-sub-list');
    list.innerHTML = '';
    select.innerHTML = '';
    appData.subjects.forEach(sub => {
        list.innerHTML += `<div class="card">${sub.name} (${sub.priority}) 
            <button onclick="deleteItem('subjects', ${sub.id})" style="background:red">Delete</button></div>`;
        select.innerHTML += `<option value="${sub.name}">${sub.name}</option>`;
    });
}

// C. Schedule Planner [cite: 14]
function addSchedule() {
    const time = document.getElementById('sched-time').value;
    const subject = document.getElementById('sched-sub-list').value;
    if (time && subject) {
        // Simple Conflict Handling [cite: 14]
        if (appData.schedule.some(s => s.time === time)) {
            alert("Time slot already assigned!");
            return;
        }
        appData.schedule.push({ id: Date.now(), time, subject });
        saveData();
    }
}

function renderSchedule() {
    const display = document.getElementById('schedule-display');
    display.innerHTML = '';
    appData.schedule.sort((a,b) => a.time.localeCompare(b.time)).forEach(s => {
        display.innerHTML += `<div class="card">${s.time} - ${s.subject}</div>`;
    });
}

// D. Task Manager [cite: 15]
function addTask() {
    const desc = document.getElementById('task-desc').value;
    const date = document.getElementById('task-date').value;
    if (desc && date) {
        appData.tasks.push({ id: Date.now(), desc, date, done: false });
        saveData();
    }
}

function renderTasks() {
    const display = document.getElementById('task-display');
    display.innerHTML = '';
    appData.tasks.forEach(t => {
        display.innerHTML += `
            <div class="card">
                <input type="checkbox" ${t.done ? 'checked' : ''} onclick="toggleTask(${t.id})">
                ${t.desc} - <strong>${t.date}</strong>
            </div>`;
    });
}

function toggleTask(id) {
    const task = appData.tasks.find(t => t.id === id);
    task.done = !task.done;
    saveData();
}

// E. Analytics [cite: 16]
function updateAnalytics() {
    const total = appData.tasks.length;
    const done = appData.tasks.filter(t => t.done).length;
    const rate = total === 0 ? 0 : Math.round((done / total) * 100);
    document.getElementById('completion-rate').innerText = rate;
    document.getElementById('progress-fill').style.width = rate + '%';
}

// A. Dashboard Update [cite: 12]
function updateDashboard() {
    document.getElementById('dash-sub-count').innerText = appData.subjects.length;
    document.getElementById('dash-task-count').innerText = appData.tasks.filter(t => !t.done).length;
}

function deleteItem(type, id) {
    appData[type] = appData[type].filter(item => item.id !== id);
    saveData();
}

function resetData() {
    if(confirm("Clear all data?")) {
        appData = { subjects: [], schedule: [], tasks: [] };
        saveData();
    }
}
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Save the preference to localStorage
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('themePreference', isDark ? 'dark' : 'light');
}

// Initialization
window.onload = saveData;
