
let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
let showArchive = false;

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

function deleteTask(id) {
  if (confirm("هل تريد حذف الطلب؟")) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
  }
}

function toggleArchive() {
  showArchive = !showArchive;
  document.getElementById("archiveToggle").textContent = showArchive ? "🔙 رجوع للطلبات" : "📦 عرض الأرشيف";
  renderTasks();
}

function renderTasks() {
  const container = document.getElementById("tasksContainer");
  container.innerHTML = "";

  const filtered = tasks.filter(t =>
    showArchive ? ["منجز", "ملغي"].includes(t.status) : !["منجز", "ملغي"].includes(t.status)
  );

  filtered.forEach(t => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <strong>${t.title}</strong><br/>
      👤 ${t.requester} | 📐 ${t.size} | 🎨 ${t.type}<br/>
      🏷️ ${t.department} | 🗓️ ${t.deadline} | 📎 <a href="${t.link}" style="color:skyblue">رابط</a><br/>
      🧾 ${t.description || ''}<br/>
      <span style="color:#ccc;">الحالة: ${t.status}</span><br/>
      ${!showArchive ? `<button onclick="deleteTask(${t.id})">🗑️ حذف</button>` : ''}
    `;
    container.appendChild(card);
  });
}

renderTasks();
