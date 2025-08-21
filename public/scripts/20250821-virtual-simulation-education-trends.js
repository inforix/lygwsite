function initializeCharts() {
    const ctx = document.getElementById('disciplineChart').getContext('2d');
    // 数据基于对参考资料中提及的各高校获批案例的归纳统计，为示意数据
    const data = {
        labels: ['工学', '医学', '理学', '农学', '经济管理学', '新文科（法、艺等）', '交叉学科'],
        datasets: [{
            label: '虚拟仿真教学创新实验室学科分布',
            data: [35, 25, 12, 10, 8, 5, 5], // 百分比示意
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(199, 199, 199, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(199, 199, 199, 1)'
            ],
            borderWidth: 1
        }]
    };
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '虚拟仿真教学创新实验室学科分布趋势示意图 (2020-2025)',
                    font: {
                        size: 18
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += context.parsed + '%';
                            }
                            return label;
                        }
                    }
                }
            }
        },
    };
    new Chart(ctx, config);
};

// Initialize charts when DOM is loaded
if (typeof window !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeCharts);
    } else {
      initializeCharts();
    }
}
