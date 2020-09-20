$(document).ready(function() {
  $("#language").submit(function(event) {
    event.preventDefault();

    const aa = $("input:radio[name=aa]:checked").val();
    const bb = $("input:radio[name=bb]:checked").val();
    const cc = $("input:radio[name=cc]:checked").val();
    const dd = $("input:radio[name=dd]:checked").val();
    const ee = $("input:radio[name=ee]:checked").val();


  if (aa === 'a' && bb === 'd' && cc === 'g' && dd === 'j' && ee === 'm') {
    $("#result1").show();
    $("#result2").hide();
    $("#result3").hide();
    $("#result4").hide();

  } else if (aa === 'b' && bb === 'e' && cc === 'h' && dd === 'k' && ee === 'n') {
    $("#result2").show();
    $("#result1").hide();
    $("#result3").hide();
    $("#result4").hide();

  } else if (aa === 'c' && bb === 'f' && cc === 'i' && dd === 'l' && ee === 'o') {
    $("#result3").show();
    $("#result1").hide();
    $("#result2").hide();
    $("#result4").hide();

  } else 
    $("#result4").show();
  
    
  });
});


