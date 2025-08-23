function initializeCharts() {
    
    // 高校信息化规划焦点演进雷达图
    const planEvolutionCtx = document.getElementById('planEvolutionChart');
    if (planEvolutionCtx) {
        new Chart(planEvolutionCtx, {
            type: 'radar',
            data: {
                labels: ['AI赋能', '数据资产化', '深度融合', '基础设施建设', '组织与机制变革', '安全与韧性'],
                datasets: [{
                    label: '"十四五"时期',
                    data: [4, 5, 6, 9, 4, 7],
                    backgroundColor: 'rgba(26, 115, 232, 0.2)',
                    borderColor: 'rgba(26, 115, 232, 0.8)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(26, 115, 232, 1)',
                    pointBorderColor: 'rgba(26, 115, 232, 1)',
                    pointRadius: 5
                }, {
                    label: '"十五五"时期 (预测)',
                    data: [9, 8, 8, 7, 7, 9],
                    backgroundColor: 'rgba(255, 127, 80, 0.2)',
                    borderColor: 'rgba(255, 127, 80, 0.8)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(255, 127, 80, 1)',
                    pointBorderColor: 'rgba(255, 127, 80, 1)',
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '高校信息化"十四五"与"十五五"规划焦点对比',
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
                                    label += context.parsed.r + '/10';
                                }
                                return label;
                            },
                            afterBody: function(tooltipItems) {
                                const label = tooltipItems[0].label;
                                const datasets = tooltipItems.map(item => item.dataset.label);
                                
                                let description = '';
                                if (label === 'AI赋能') {
                                    description = '从零星试点到全面渗透教学、科研、管理全过程';
                                } else if (label === '数据资产化') {
                                    description = '从数据治理到数据资产运营和价值挖掘';
                                } else if (label === '深度融合') {
                                    description = '打破技术与业务"两张皮"，实现深度协同';
                                } else if (label === '基础设施建设') {
                                    description = '从大规模网络建设到智能算力中心为重点';
                                } else if (label === '组织与机制变革') {
                                    description = '技术变革推动组织架构和管理机制重塑';
                                } else if (label === '安全与韧性') {
                                    description = '构建主动、纵深、高韧性的安全保障体系';
                                }
                                
                                return description ? [description] : [];
                            }
                        }
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 10,
                        min: 0,
                        ticks: {
                            stepSize: 2,
                            font: {
                                size: 12
                            }
                        },
                        pointLabels: {
                            font: {
                                size: 13
                            },
                            color: '#333'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        angleLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
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