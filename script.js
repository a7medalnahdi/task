
let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function addTask() {
  const task = {
    id: Date.now(),
    title: document.getElementById("title").value,
    requester: document.getElementById("requester").value,
    type: document.getElementById("type").value,
    size: document.getElementById("size").value,
    link: document.getElementById("link").value,
    deadline: document.getElementById("deadline").value,
    department: document.getElementById("department").value,
    status: document.getElementById("status").value,
    description: document.getElementById("description").value
  };
  tasks.push(task);
  saveTasks();
}

function renderTasks() {
  const container = document.getElementById("tasksContainer");
  container.innerHTML = "";
  tasks.forEach(task => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <strong>${task.title}</strong> - ${task.department} <br/>
      الحالة: ${task.status} <br/>
      👤 ${task.requester} | 📐 ${task.size} | 🎨 ${task.type} <br/>
      📅 ${task.deadline} | 🔗 <a href="${task.link}" style="color:skyblue">رابط</a>
    `;
    container.appendChild(card);
  });
}

function showStats() {
  document.getElementById("formSection").style.display = "none";
  document.getElementById("tasksContainer").style.display = "none";
  document.getElementById("statsSection").style.display = "block";
  const stats = {};
  tasks.forEach(task => {
    stats[task.status] = (stats[task.status] || 0) + 1;
  });
  let output = "";
  for (let key in stats) {
    output += `<p>${key}: ${stats[key]}</p>`;
  }
  document.getElementById("stats").innerHTML = output;
}

function goBack() {
  document.getElementById("formSection").style.display = "block";
  document.getElementById("tasksContainer").style.display = "block";
  document.getElementById("statsSection").style.display = "none";
}

document.getElementById("showStats").onclick = showStats;

renderTasks();
