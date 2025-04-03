
document.addEventListener("DOMContentLoaded", () => {
  const statsDiv = document.getElementById("stats");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const statusCounts = {};
  const departmentCounts = {};

  tasks.forEach(task => {
    statusCounts[task.status] = (statusCounts[task.status] || 0) + 1;
    departmentCounts[task.department] = (departmentCounts[task.department] || 0) + 1;
  });

  const makeBox = (title, count) => {
    const box = document.createElement("div");
    box.className = "bg-[#1f2937] p-4 rounded-xl shadow text-center";
    box.innerHTML = `<h2 class="text-lg font-bold mb-2">${title}</h2><p class="text-2xl font-extrabold text-orange-400">${count}</p>`;
    return box;
  };

  for (const key in statusCounts) {
    statsDiv.appendChild(makeBox(`الحالة: ${key}`, statusCounts[key]));
  }

  for (const key in departmentCounts) {
    statsDiv.appendChild(makeBox(`القسم: ${key}`, departmentCounts[key]));
  }
});
