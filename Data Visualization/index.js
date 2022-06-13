google.charts.load('current', { 'packages': ['corechart'] });
function myChart(year) {
    google.charts.setOnLoadCallback(drawChart(year));
}

function drawChart(year) {
    // console.log(year);
    console.log(`${year}.csv`);
    $.get(`${year}.csv`, function (data) {
        // console.log(`${year}`);
        var myData = $.csv.toArrays(data, { onParseValue: $.csv.hooks.castToScalar });
        var dt = new google.visualization.arrayToDataTable(myData);
        var view = new google.visualization.DataView(dt);
        view.setColumns([0, 1]);

        var option = {
            'title': `Fruits Sold in year ${year}`, 'width': 550, 'height': 475, 'colors': ['brown'],
        };
        var options = {
            'title': `Fruits Sold in year ${year}`, 'width': 550, 'height': 475, 'pieHole': 0.4
        };
        var chart = new google.visualization.LineChart(document.getElementById('barChart'));
        var chart2 = new google.visualization.PieChart(document.getElementById('pieChart'));
        chart.draw(view, option);
        chart2.draw(view, options);
    });
}