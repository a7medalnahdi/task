
const app = document.getElementById('app');
const stats = {
  "إجمالي الطلبات": 6,
  "طلبات منجزة": 2,
  "طلبات غير منجزة": 2,
  "طلبات معلقة": 1,
  "طلبات قيد العمل": 1
};

app.innerHTML = `
  <h1>إحصائيات الطلبات</h1>
  <div>
    ${Object.entries(stats).map(([key, val]) => `
      <div class="card">
        <strong>${key}:</strong> ${val}
      </div>
    `).join('')}
  </div>
`;
