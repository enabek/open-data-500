$(document).ready(function () {

  console.log('cadana data api script loaded');

  $.getJSON('http://api.opendata500.com/api/v1/results/Canada', function(data){
    console.log(data);
  });
  


  



});