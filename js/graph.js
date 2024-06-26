const ctx = document.getElementById('myChart').getContext('2d');

const data = {
    labels: ['12/23', '01/24', '02/24', '03/24', '04/24', '05/24', '06/24', '07/24', '08/24', '09/24', '10/24', '11/24', '12/24'],
    datasets: [
        {
            label: 'HISTORICAL',
            data: [20000, 25000, 22000, 23000, 35000, 37000, 48000, null, null, null, null, null, null],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            borderWidth: 2
        },
        {
            label: 'FORECASTED',
            data: [null, null, null, null, null, null, 48000, 51000, 53000, 52000, 51000, 55000, 58000],
            borderColor: 'rgba(153, 102, 255, 1)',
            borderDash: [5, 5],
            fill: false,
            borderWidth: 2
        }
    ]
};

const options = {
    responsive: true,
    scales: {
        x: {
            type: 'category',
            title: {
                display: true,
                text: 'Date'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Value'
            }
        }
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels: {
                usePointStyle: false, 
                boxWidth: 20, 
                padding: 20, 
                generateLabels: (chart) => {
                    const { data } = chart;
                    if (data.datasets.length) {
                        return data.datasets.map((dataset, i) => {
                            const meta = chart.getDatasetMeta(i);
                            const style = meta.controller.getStyle(i);
                            return {
                                text: dataset.label,
                                fillStyle: style.borderColor,
                                strokeStyle: style.borderColor,
                                lineWidth: style.borderWidth,
                                hidden: !chart.isDatasetVisible(i),
                                index: i,
                                pointStyle: 'rect'
                            };
                        });
                    }
                    return [];
                }
            }
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
        annotation: {
            annotations: {
                line1: {
                    type: 'line',
                    xMin: '06/24',
                    xMax: '06/24',
                    borderColor: 'rgba(0,0,0,0.5)',
                    borderWidth: 2,
                    borderDash: [6, 6],
                    draggable: true
                }
            }
        }
    },
    interaction: {
        mode: 'index',
        intersect: false,
    }
};

const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});
