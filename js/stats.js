//function createChart(ctx) {
var ctx = $("#chart");
var mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [
            {
                label: "Published Photos",
                borderColor: "#000",
                fillColor: "#000",
                strokeColor: "#ACC26D",
                pointColor: "#fff",
                pointHitRadius: 20,
                pointStrokeColor: "#9DB86D",
                data: [36, 11, 54, 112, 7, 17, 7, 6, 17, 40, 24, 21, 33, 13, 12, 28, 11, 20, 20, 42, 15, 11, 13, 9],
                type: 'line'
            },
            {
                label: "Total Photos",
                borderColor: "#000",
                fillColor: "#000",
                strokeColor: "#ACC26D",
                pointColor: "#fff",
                pointHitRadius: 20,
                pointStrokeColor: "#9DB86D",
                data: [257, 126, 344, 605, 74, 94, 48, 75, 93, 375, 255, 170, 210, 42, 55, 106, 88, 94, 110, 209, 57, 61, 37, 43],
                type: 'line'
            },
            {
                label: 'Wall Street Journal Articles',
                backgroundColor: "#fff",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
            }, {
                label: 'The Washington Post Articles',
                backgroundColor: "#393949",
                data: [2, 1, 3, 10, 0, 4, 0, 1, 0, 1, 1, 1, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
            }, {
                label: 'New York Times Articles',
                backgroundColor: "#2f3f4f",
                data: [3, 2, 5, 10, 1, 2, 1, 1, 1, 3, 4, 1, 3, 0, 2, 1, 0, 5, 2, 2, 1, 0, 2, 0]
            }, {
                label: 'CNN Articles',
                backgroundColor: "#627c85",
                data: [2, 2, 12, 26, 1, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 2, 1, 0, 10, 3, 0, 4, 1, 0]
            }, {
                label: 'NBC Articles',
                backgroundColor: "#779cab",
                data: [2, 0, 4, 6, 0, 2, 2, 1, 2, 3, 3, 4, 1, 0, 2, 2, 1, 1, 3, 4, 0, 0, 0, 0]
            }, {
                label: 'Fox News Articles',
                backgroundColor: "#9babb1",
                data: [9, 2, 8, 9, 0, 2, 0, 2, 1, 4, 2, 5, 11, 6, 2, 8, 3, 6, 7, 13, 5, 3, 5, 2]
            }, {
                label: 'The Guardian Articles',
                backgroundColor: "#a8c0c9",
                data: [7, 6, 16, 53, 5, 6, 0, 3, 8, 21, 15, 9, 6, 4, 2, 3, 1, 0, 5, 11, 2, 2, 1, 0]
            }, {
                label: 'BBC Articles',
                backgroundColor: "#bddddd",
                data: [17, 1, 10, 47, 2, 3, 1, 3, 7, 8, 15, 3, 14, 1, 1, 3, 1, 3, 7, 4, 2, 2, 0, 0]
            }],
        labels: ["June", "", "", "Sept", "", "", "Dec", "", "", "Mar", "", "", "June", "", "", "Sept", "", "", "Dec", "", "", "Mar", "", ""],
    },
    options: {
        legend: {
            position: "right"
        },
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0
                },
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                stacked: true

            }]
        }
    }
});
