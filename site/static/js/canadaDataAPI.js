$(document).ready(function () {

  $.getJSON('http://api.opendata500.com/api/v1/results/Canada', function(CanadianAPIListOfJSON) {
    
    var dataParser = function(array){
      var rawCity = [];
      array.forEach(function(item){
        rawCity.push(item.city);
        // console.log(item.city);
      });
      return rawCity;
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

    var rawCity = dataParser(CanadianAPIListOfJSON);

    var cityFrequency = getFrequency(rawCity);

    function sumValuesForCorrectness( obj ) {
      var sum = 0;
      for( var el in obj ) {
        if( obj.hasOwnProperty( el ) ) {
      sum += parseFloat( obj[el] );
      }
    }
    return sum;
    }

    var totalCities = sumValuesForCorrectness(cityFrequency);   
    console.log(totalCities); 
  });

});







// dataArray.forEach(function(item){
//   if (item.how_important_is_open_data_to_your_company === "Very Important" || "Très importantes") {
//     var veryImportant = [];
//     veryImportant.push(item);
//   } else if (item.how_important_is_open_data_to_your_company === "Important") {
//     var important = [];
//     important.push(item);
//   } else {
//     var notAsImportant = [];
//     notAsImportant.push(item);
//   };
// });
