// Pie Chart
var makePieChart = function(field) {
  var fieldFrequencyData = summaryOfData[field].frequency;
  var piechartColumnsArray = generatePieChartArrays(fieldFrequencyData);
  var chart = renderPieChartC3(piechartColumnsArray);
};

var generatePieChartArrays = function(field) {
  var chartColumns = [];

  for (answer in field) {
    var answer = answer;
    var frequency = field[answer];
    var columnArray = generatePieChartColumn(answer, frequency);
    chartColumns.push(columnArray);
  }

  return chartColumns;
};

var generatePieChartColumn = function(answer, frequency) {
  var column = [answer];

  for (var i = 1; i <= frequency; i++) {
    column.push(1);
  }

  return column;
};

var renderPieChartC3 = function(chartData) {
  var chart = c3.generate({
    data: {
      columns: chartData,
      type: 'pie',
    },
    size: {
      height: 550
    }
  });

  return chart;
};

// Bar Chart
var makeBarChart = function(field) {
  var fieldFrequencyData = summaryOfData[field].frequency;
  var barchartColumnsArray = generateBarChartArrays(fieldFrequencyData);
  var chart = renderBarChartC3(barchartColumnsArray);
};

var generateBarChartArrays = function(field) {
  var chartColumns = [];
  
  for (answer in field) {
    var answer = answer;
    var frequency = field[answer];
      chartColumns.push([answer, frequency]);
  };

  return chartColumns;
};

var renderBarChartC3 = function(chartData) {
  var chart = c3.generate({
    data: {
      columns: chartData,
      type: 'bar'
    },
    size: {
      height: 550
    }
  });

  return chart;
};