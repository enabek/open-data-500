$(document).ready(function(){ 
  grabData();
});

$(document).ready(function(){ 
  $('#field-select').on('change', function() { 
  render();
  });

  $('#chart-select').on('change', function() { 
  render();
  });
});
