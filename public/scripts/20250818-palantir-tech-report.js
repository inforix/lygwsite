function initializeCharts() {
  const ctx = document.getElementById("swissReRoiChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "年化投资回报率 (ROI)",
        "承保人效率提升",
        "数据工程师生产力提升",
        "报告时间缩短",
      ],
      datasets: [
        {
          label: "提升百分比 (%)",
          data: [170, 30, 50, 75], // 70-80% reduction, using average 75%
          backgroundColor: [
            "rgba(26, 115, 232, 0.7)",
            "rgba(255, 159, 64, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
          ],
          borderColor: [
            "rgba(26, 115, 232, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y",
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return value + "%";
            },
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Swiss Re 实施 Palantir Foundry 关键效益指标",
          font: { size: 18 },
        },
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.dataset.label + ": " + context.raw + "%";
            },
          },
        },
      },
      maintainAspectRatio: false,
    },
  });

  const ctxMarket = document.getElementById("marketShareChart").getContext("2d");
  if (ctxMarket) {
  new Chart(ctxMarket, {
    type: "bar",
    data: {
      labels: ["Databricks", "Palantir"],
      datasets: [
        {
          label: "大数据分析市场份额 (%)",
          data: [15.75, 1.53],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return value + "%";
            },
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "大数据分析市场份额对比 (来源: 6sense)",
          font: { size: 18 },
        },
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return "市场份额: " + context.raw + "%";
            },
          },
        },
      },
      maintainAspectRatio: false,
    },
  });
    }
}

// Initialize charts when DOM is loaded
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeCharts);
  } else {
    initializeCharts();
  }
}
