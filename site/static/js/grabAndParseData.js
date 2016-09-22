var summaryOfData;

var grabData = function() {
  $.getJSON('http://api.opendata500.com/api/v1/results/Canada', function(CanadianAPIListOfJSON) {
    summaryOfData = getAllDataSummary(CanadianAPIListOfJSON);

    // makePieChart('province');
    makeBarChart('province');
  });
};

// var makePieChart = function(field) {
//   var fieldFrequencyData = summaryOfData[field].frequency;
//   var piechartColumnsArray = generatePieChartArrays(fieldFrequencyData);
//   console.log('piechartColumnsArray is: ', piechartColumnsArray);
//   var chart = renderPieChartC3(piechartColumnsArray);
// };

var makeBarChart = function(field) {
  var fieldFrequencyData = summaryOfData[field].frequency;
  console.log(fieldFrequencyData);
  var barchartColumnsArray = generateBarChartArrays(fieldFrequencyData);

  console.log('barchartColumnsArray is:', barchartColumnsArray);
  var chart = renderBarChartC3(barchartColumnsArray);
};

var generateBarChartArrays = function(field) {
  var chartColumns = [];
  console.log(field);

  for (answer in field) {
    var answer = answer;
    var frequency = field[answer];
      chartColumns.push([answer, frequency]);
  }
  console.log(chartColumns);

  return chartColumns;
};


// var generatePieChartArrays = function(field) {
//   var chartColumns = [];

//   for (answer in field) {
//     var answer = answer;
//     var frequency = field[answer];
//     var columnArray = generatePieChartColumn(answer, frequency);
//     chartColumns.push(columnArray);
//   }

//   return chartColumns;
// };

// var generatePieChartColumn = function(answer, frequency) {
//   var column = [answer];

//   for (var i = 1; i <= frequency; i++) {
//     column.push(1);
//   }

//   return column;
// }

// var renderPieChartC3 = function(chartData) {
//   var chart = c3.generate({
//     data: {
//     columns: chartData,
//     type: 'pie'
//     }
//   });

//   return chart;
// }

var renderBarChartC3 = function(chartData) {
  var chart = c3.generate({
    data: {
      columns: chartData,
      type: 'bar'
    }
  });
  return chart;
};








var dataParser = function(listOfJSON, field){
  var rawData = [];
  listOfJSON.forEach(function(element){
    rawData.push(element[field]);
  });

  return rawData;
};

var getFrequency = function(listOfRawData) {
  var uniqueValueFrequency = new Object;

  listOfRawData.forEach(function(element) {
    if (uniqueValueFrequency[element] === undefined) {
      uniqueValueFrequency[element] = 1;
    } else {
      uniqueValueFrequency[element] += 1;
    }});

  return uniqueValueFrequency;
};

var getRawCountAndFrequencyOfAllItems = function(listOfJSON, field) {
  var fieldSummary = {};

  var listOfRawData = dataParser(listOfJSON, field);
  var frequencyData = getFrequency(listOfRawData);
  
  fieldSummary.rawData = listOfRawData;
  fieldSummary.frequency = frequencyData;

  return fieldSummary;
};

var getAllDataSummary = function(listOfJSON) {
  var fieldNames = Object.keys(listOfJSON[0]);
  var overallData = {};

  fieldNames.forEach(function(field) {
    var fieldSummary = getRawCountAndFrequencyOfAllItems(listOfJSON, field);
    overallData[field] = fieldSummary;
  });

  return overallData;
};

// var attachDataFromDropdown = function() {
//   console.log('inside attachDataButtons');
//   makePieChart();
// };



$(document).ready(function(){ 
  grabData();
});