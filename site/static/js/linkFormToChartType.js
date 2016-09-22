var field;
var chartType;

$(document).on('change', "#field-select", function(){
  
  var determineUserFieldChoice = function() {
    var choice = $( "#field-select option:selected" ).text();

    if (choice === "Industry") {
      field = "what_industry_best_describes_your_company";
    } else if (choice === "Province") {
      field = "province";
    } else if (choice === "City") {
      field = "city";
    } else if (choice === "Data Type"){
      field = "what_types_of_open_data_does_your_company_use";
    } else {
      field = undefined;
    };
  };
  determineUserFieldChoice();
  console.log(field); 
});

$(document).on('change', "#chart-select", function(){
  var determineUserChartChoice = function() {
    var choice = $( "#chart-select option:selected" ).text();

    if (choice === "Pie Chart") {
      chartType = "pie";
    } else if (choice === "Bar Chart") {
      chartType = "bar"; 
    } else {
      chartType = undefined;
    };
  };
  determineUserChartChoice();
  console.log(chartType); 
});

  
  






