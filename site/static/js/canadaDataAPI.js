$(document).ready(function () {

  $.getJSON('http://api.opendata500.com/api/v1/results/Canada', function(CanadianAPIListOfJSON) {
    
    var dataParser = function(listOfJSON, field){
      // Make array that holds all the raw data
      var rawData = [];
      listOfJSON.forEach(function(element){
        rawData.push(element[field]);
      });

      return rawData;
    };

    var getFrequency = function(listOfRawData) {
      // Make hash that has the frequency of each unique value in the list of raw data
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
      // Return object that has two pieces of summarized data on it
      var fieldSummary = {};

      // Gather data
      var listOfRawData = dataParser(listOfJSON, field);
      var frequencyData = getFrequency(listOfRawData);
      
      fieldSummary.rawData = listOfRawData;
      fieldSummary.frequency = frequencyData;

      return fieldSummary;
    };

    // Function to call summary functions for each field in list
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

