$(document).ready(function() {
  $("#language").submit(function(event) {
    event.preventDefault();
    
    const code = $("input:radio[name=code]:checked").val();
  if (code === "a","d","g","j","m") {
    $("#result2").hide();
    $("#result3").hide();
    $("#result4").hide();
    $("#result1").show();
  } else if (code === "b","e","h","k","n") {
    $("#result1").hide();
    $("#result3").hide();
    $("#result4").hide();
    $("#result2").show();
  } else if (code === "c","f","i","l","o") {   
    $("#result1").hide();
    $("#result2").hide();
    $("#result4").hide();
    $("#result3").show();
  } else 
    $("#result1").hide();
    $("#result2").hide();
    $("#result3").hide();
    $("#result4").show();
  });
});


