function initializeCharts() {
    
    const ctx = document.getElementById('globalComparisonChart').getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['政策驱动强度', '规模化与速度', '应用场景广度', '底层技术创新', '开放生态构建', '跨国协同合作', '伦理与标准关注'],
                datasets: [{
                    label: '中国模式',
                    data: [9, 9, 8, 6, 5, 4, 6],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)'
                }, {
                    label: '北美模式',
                    data: [4, 6, 7, 9, 9, 5, 8],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)'
                }, {
                    label: '欧洲模式',
                    data: [7, 5, 6, 5, 6, 9, 9],
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(255, 206, 86, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '全球主要区域智慧教室建设模式特征对比',
                        font: { size: 18 }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.r !== null) {
                                    label += context.parsed.r;
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 10,
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        },
                        ticks: {
                            stepSize: 2
                        }
                    }
                }
            }
        });
    }

    const roiCtx = document.getElementById('roiChart').getContext('2d');
    if (roiCtx) {
        new Chart(roiCtx, {
            type: 'bar',
            data: {
                labels: ['对学生', '对教师', '对学校'],
                datasets: [{
                    label: '可量化收益指标',
                    data: [4, 3, 4], // 示例数据，代表指标数量
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '智慧教室投资回报(ROI)多元评估框架',
                        font: { size: 18 }
                    },
                    tooltip: {
                        callbacks: {
                            title: function(tooltipItems) {
                                const title = tooltipItems[0].label;
                                if (title === '对学生') return '对学生的价值 (核心产出)';
                                if (title === '对教师') return '对教师的价值 (效率与满意度)';
                                if (title === '对学校') return '对学校的价值 (声誉与效能)';
                                return title;
                            },
                            afterBody: function(tooltipItems) {
                                const title = tooltipItems[0].label;
                                if (title === '对学生') return ['- 学习投入度提升', '- 课程通过率提高', '- 毕业率改善', '- 就业竞争力增强'];
                                if (title === '对教师') return ['- 备课/批改时间缩短', '- 教学创新能力提升', '- 职业满意度提高'];
                                if (title === '对学校') return ['- 教学质量排名提升', '- 品牌声誉增强', '- 管理效能优化', '- 资源利用率提高'];
                                return '';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '指标维度丰富度 (示例)'
                        }
                    }
                }
            }
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
  