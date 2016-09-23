fieldMap = {
  "City": "city",
  "Industry": "what_industry_best_describes_your_company",
  "Province": "province",
  "Data Type": "which_municipal_open_data_you_use_the_most"
};

var callChart = function(field, chartType) {
  if (chartType === "Pie Chart"){
    makePieChart(field);
  } else {
    makeBarChart(field);
  };
};

var render = function() {
  var field = $("#field-select").find("option:selected").text();
  var chart = $("#chart-select").find("option:selected").text();

  if (field !== "1. SELECT FIELD:" && chart !== "2. SELECT CHART:") {
    console.log(fieldMap[field]);
    callChart(fieldMap[field], chart);
  };
};

  







