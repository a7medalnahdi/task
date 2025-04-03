const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

taskForm.onsubmit = function (e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(taskForm).entries());
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push({ ...data, id: Date.now() });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskForm.reset();
  loadTasks();
};

function loadTasks() {
  if (!taskList) return;
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  taskList.innerHTML = "";
  tasks.forEach(t => {
    const card = document.createElement("div");
    card.className = "bg-gradient-to-br from-slate-700 to-gray-900 p-4 rounded-xl text-white space-y-1 shadow";
    card.innerHTML = `
      <div class="flex justify-between items-center">
        <span class="text-xs bg-white/20 px-2 py-1 rounded-full">${t.status}</span>
        <span class="text-xs bg-white/20 px-2 py-1 rounded-full">${t.department}</span>
      </div>
      <div class="font-bold text-lg">${t.title}</div>
      <div class="text-sm">👤 ${t.requester || '--'}</div>
      <div class="text-sm">📐 ${t.size || '--'}</div>
      <div class="text-sm">🎨 ${t.type || '--'}</div>
      <div class="text-sm">📅 ${t.deadline || '--'}</div>
      <div class="text-sm">🔗 <a href="${t.link}" class="underline">رابط</a></div>
    `;
    taskList.appendChild(card);
  });
}

function toggleMode() {
  document.body.classList.toggle("bg-white");
  document.body.classList.toggle("text-black");
}