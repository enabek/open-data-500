var field;
var chartType;

$('#field-select').on('change', function () {
  window.determineUserFieldChoice = function() {
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


$('#chart-select').on ('change', function() {
  window.determineUserChartChoice = function() {
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

// var determineToCallChart = function(field, chartType) {

// };

var callChart = function() {
  if (field !== undefined && chartType !== undefined){
    if (chartType === "pie"){
      console.log("inside callChart", field)
      makePieChart(field);
    } else {
      makeBarChart(field);
    };
  };
};





  
  






