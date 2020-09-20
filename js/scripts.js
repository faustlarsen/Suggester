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

  } else if (aa === 'b') {
    $("#result2").show();
    
  

  });
});


