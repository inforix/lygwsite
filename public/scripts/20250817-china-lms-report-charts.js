// Chart for Overall Market Share
function initializeCharts() {
    const ctxMarketShare = document.getElementById('lmsMarketShareChart');
    if (ctxMarketShare) {
        new Chart(ctxMarketShare, {
            type: 'doughnut',
            data: {
                labels: ['超星学习通', '自建平台', '智慧树', '学堂在线/雨课堂', '科大讯飞/其他'],
                datasets: [{
                    label: '主要LMS平台市场份额',
                    data: [58.5, 18.9, 7.5, 9.4, 5.7],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 99, 132, 0.8)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '抽样高校主要LMS平台使用分布 (%)',
                        font: {
                            size: 18
                        }
                    },
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });
    }

    // Chart for Tier Preference
    const ctxTierPreference = document.getElementById('tierPreferenceChart');
    if (ctxTierPreference) {
        new Chart(ctxTierPreference, {
            type: 'bar',
            data: {
                labels: ['985/双一流院校', '211院校', '普通本科/双非院校'],
                datasets: [
                    {
                        label: '超星学习通',
                        data: [40, 65, 85],
                        backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    },
                    {
                        label: '自建平台',
                        data: [35, 15, 5],
                        backgroundColor: 'rgba(75, 192, 192, 0.7)',
                    },
                    {
                        label: '学堂在线/雨课堂',
                        data: [15, 10, 5],
                        backgroundColor: 'rgba(153, 102, 255, 0.7)',
                    },
                    {
                        label: '智慧树/其他',
                        data: [10, 10, 5],
                        backgroundColor: 'rgba(255, 159, 64, 0.7)',
                    }
                ]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            callback: function(value) {
                                return value + '%'
                            }
                        }
                    },
                    y: {
                        stacked: true
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '不同层次院校主要LMS平台选择偏好对比',
                        font: {
                            size: 18
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.x !== null) {
                                    label += context.parsed.x + '%';
                                }
                                return label;
                            }
                        }
                    },
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });
    }
}

// Initialize charts when DOM is loaded
if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCharts);
    } else {
        initializeCharts();
    }
}