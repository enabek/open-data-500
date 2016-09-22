// var field;
// var chartType;

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
      field = "which_municipal_open_data_you_use_the_most";
    } else {
      field = undefined;
    };
  };

  determineUserFieldChoice();
  console.log("inside determineUserFieldChoice: ", field); 
  return field
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
  console.log("inside determineUserChartChoice: ", chartType); 
  return chartType
});


var callChart = function() {
  console.log("inside callChart");

  // var field = determineUserFieldChoice();
  // var chartType = determineUserChartChoice();

  if (field !== undefined && chartType !== undefined){
    if (chartType === "pie"){
      if (field === "what_industry_best_describes_your_company" || field === "what_types_of_open_data_does_your_company_use"){
        $("#chart").addClass("expand");
        $("<svg>").addClass("expand");
      };
      console.log("inside callChart", field)
      makePieChart(field);
    } else {
      makeBarChart(field);
    };
  };
};




  
  






