const alertBox = document.getElementById("alert-box");
const log = document.getElementById("alert-log");
const ctx = document.getElementById("floodChart").getContext("2d");

const floodChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      label: "Flood Alerts",
      data: [],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});

let alertCount = 0;

setInterval(() => {
  const now = new Date().toLocaleTimeString();
  const message = `FLOOD ALERT received at ${now}`;
  alertBox.textContent = "🚨 FLOOD ALERT 🚨";

  const entry = document.createElement("div");
  entry.textContent = message;
  log.prepend(entry);

  alertCount++;
  floodChart.data.labels.push(now);
  floodChart.data.datasets[0].data.push(alertCount);
  floodChart.update();
}, 10000);