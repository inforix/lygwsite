function initializeCourseCharts() {
    // Chart for Total Distribution
    const ctxTotal = document.getElementById('chart-total-distribution');
    if (ctxTotal) {
        new Chart(ctxTotal, {
            type: 'bar',
            data: {
                labels: ['首批 (2019)', '第二批 (2021)', '第三批 (2023)'],
                datasets: [
                    {
                        label: '线上一流课程',
                        data: [1873, 1095, 1000],
                        backgroundColor: 'rgba(255, 99, 132, 0.7)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: '线下一流课程',
                        data: [1463, 2076, 1842],
                        backgroundColor: 'rgba(54, 162, 235, 0.7)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    },
                    {
                        label: '线上线下混合式',
                        data: [868, 1800, 2206],
                        backgroundColor: 'rgba(255, 206, 86, 0.7)',
                        borderColor: 'rgba(255, 206, 86, 1)',
                        borderWidth: 1
                    },
                    {
                        label: '虚拟仿真实验',
                        data: [728, 472, 500],
                        backgroundColor: 'rgba(75, 192, 192, 0.7)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    },
                    {
                        label: '社会实践',
                        data: [184, 451, 451],
                        backgroundColor: 'rgba(153, 102, 255, 0.7)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        stacked: true,
                        title: {
                            display: true,
                            text: '课程数量（门）'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '三批次国家级一流本科课程类型分布',
                        font: {
                            size: 18
                        }
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Chart for Top Universities (horizontal bar chart)
    const ctxTopUniv = document.getElementById('chart-top-universities');
    if (ctxTopUniv) {
        new Chart(ctxTopUniv, {
            type: 'bar',
            data: {
                labels: ['浙江大学', '四川大学', '武汉大学', '吉林大学', '北京大学', '清华大学', '哈尔滨工业大学', '中南大学', '上海交通大学', '山东大学', '中山大学', '南京大学', '西安交通大学', '同济大学', '南开大学'],
                datasets: [{
                    label: '课程总数',
                    data: [221, 212, 207, 199, 198, 189, 171, 169, 168, 167, 159, 151, 147, 139, 138],
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '课程数量'
                        }
                    },
                    y: {
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '国家级一流本科课程入选数量排名前15高校',
                        font: {
                            size: 18
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    // Chart for Platform Distribution (pie chart)
    const ctxPlatform = document.getElementById('chart-platform-distribution');
    if (ctxPlatform) {
        new Chart(ctxPlatform, {
            type: 'doughnut',
            data: {
                labels: ['爱课程（中国大学 MOOC）', '学堂在线', '智慧树网', '学银在线', '人卫慕课', '其他平台'],
                datasets: [{
                    data: [1850, 850, 780, 250, 100, 138],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
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
                        text: '主要线上课程平台分布',
                        font: {
                            size: 18
                        }
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Chart for Subject Distribution (horizontal bar chart)
    const ctxSubject = document.getElementById('chart-subject-distribution');
    if (ctxSubject) {
        new Chart(ctxSubject, {
            type: 'bar',
            data: {
                labels: ['工学', '医学', '管理学', '理学', '经济学', '文学', '法学', '农学', '艺术学', '教育学', '历史学', '哲学', '军事学'],
                datasets: [{
                    label: '课程数量',
                    data: [3500, 2450, 2200, 2100, 1450, 1300, 1100, 980, 850, 680, 450, 250, 210],
                    backgroundColor: 'rgba(75, 192, 192, 0.7)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '课程数量'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '一流课程学科门类分布',
                        font: {
                            size: 18
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    // For Province Distribution - Chart.js doesn't support maps, so we'll create a simple bar chart
    const ctxProvince = document.getElementById('chart-province-distribution');
    if (ctxProvince) {
        new Chart(ctxProvince, {
            type: 'bar',
            data: {
                labels: ['北京市', '江苏省', '上海市', '湖北省', '四川省', '陕西省', '浙江省', '广东省', '湖南省', '山东省', '黑龙江', '河南省', '辽宁省', '吉林省', '天津', '安徽省', '江西省', '福建省'],
                datasets: [{
                    label: '课程总数',
                    data: [1887, 1235, 1021, 956, 898, 855, 812, 798, 742, 713, 611, 646, 589, 563, 465, 488, 472, 449],
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '课程数量'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: '国家级一流本科课程地域分布（前18省份）',
                        font: {
                            size: 18
                        }
                    },
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

// Initialize charts when DOM is loaded
if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCourseCharts);
    } else {
        initializeCourseCharts();
    }
}