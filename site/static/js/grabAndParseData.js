var grabData = function() {
  console.log('about to run api call');
  $.getJSON('http://api.opendata500.com/api/v1/results/Canada', function(CanadianAPIListOfJSON) {
    console.log('api call done');
    var summaryOfData = getAllDataSummary(CanadianAPIListOfJSON);
    console.log(summaryOfData);
  });
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


var attachDataToButtons = function() {
  console.log('inside attachDataButtons');
  makePieChart();
};

var makePieChart = function() {

  console.log('inside makePieChart')
};

$(document).ready(function(){ 
  grabData();
});