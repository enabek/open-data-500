$(document).ready(function () {

  $.getJSON('http://api.opendata500.com/api/v1/results/Canada', function(data){
    var dataArray = data;
    var totalCompanies = dataArray.length;

    dataArray.forEach(function(item){
      // console.log(item);

      if (item.how_important_is_open_data_to_your_company === "Very Important" || "Très importantes") {
        var veryImportant = [];
        veryImportant.push(item);
      } else if (item.how_important_is_open_data_to_your_company === "Important") {
        var important = [];
        important.push(item);
      } else {
        var notAsImportant = [];
        notAsImportant.push(item);
      };

    });

  });
  
});