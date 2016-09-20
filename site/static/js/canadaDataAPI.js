$(document).ready(function () {

  $.getJSON('http://api.opendata500.com/api/v1/results/Canada', function(CanadianAPIListOfJSON) {
    
    var dataParser = function(array, key){
      // make array that holds all the raw data
      var rawData = [];
      array.forEach(function(item){
        rawData.push(item[key]);
      });
      return rawData;
    };

    var getFrequency = function(listRawData) {
      // make a hash that has the frequency of each unique value in the list of raw data
      var uniqueValueFrequency = new Object;

      listRawData.forEach(function(element) {
        if (uniqueValueFrequency[element] === undefined) {
          uniqueValueFrequency[element] = 1;
        } else {
          uniqueValueFrequency[element] += 1;
        }});

      return uniqueValueFrequency;
    };

    // var fieldNames = Object.keys(CanadianAPIListOfJSON[0]);

    var getRawCountAndFrequencyOfAllItems = function(listOfJSON, field) {
      // returning an object that has two pieces of summarized data on it
      var fieldSummary = {};

      // gather data
      var listOfRawData = dataParser(listOfJSON, field);
      var frequencyData = getFrequency(listOfRawData);
      // add to fieldSummar
      fieldSummary.rawData = listOfRawData;
      fieldSummary.frequency = frequencyData;

      return fieldSummary;
    };

    // a function all calls B for each field in A

    var getAllDataSummary = function(listOfJSON) {
      var fieldNames = Object.keys(listOfJSON[0]);
      var overallData = {};

      fieldNames.forEach(function(field) {
        var fieldSummary = getRawCountAndFrequencyOfAllItems(listOfJSON, field);
        overallData[field] = fieldSummary;
      });
      return overallData;
    }

    console.log(getAllDataSummary(CanadianAPIListOfJSON));
  });
});

