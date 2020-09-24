$(document).ready(function() {
  $("#formOne").submit(function(event) {

    /*Caps first letter of the name*/
    const inputName = $("input#name").val();
    const firstUpper = inputName.slice(0,1).toUpperCase();
    const restLower = inputName.slice(1,inputName.length).toLowerCase();
    const readyName = firstUpper + restLower;

    const aa = $("input:radio[name=aa]:checked").val();
    const bb = $("input:radio[name=bb]:checked").val();
    const cc = $("input:radio[name=cc]:checked").val();
    const dd = $("input:radio[name=dd]:checked").val();
    const ee = $("input:radio[name=ee]:checked").val();

    if (aa === 'a' && bb === 'd' && cc === 'g' && dd === 'j' && ee === 'm') {
      $("#python").fadeIn();
      $("#ruby").hide();
      $("#swift").hide();
      $("#javascript").hide();
     
    } else if (aa === 'b' && bb === 'e' && cc === 'h' && dd === 'k' && ee === 'n') {
      $("#ruby").fadeIn();
      $("#python").hide();
      $("#swift").hide();
      $("#javascript").hide();
  
    } else if (aa === 'c' && bb === 'f' && cc === 'i' && dd === 'l' && ee === 'o') {
      $("#swift").fadeIn();
      $("#python").hide();
      $("#ruby").hide();
      $("#javascript").hide();
  
    } else {
      $("#python").hide();
      $("#ruby").hide();
      $("#swift").hide();
      $("#javascript").fadeIn();
    }

      $(".name").text(readyName);
      $("#result").show();

    event.preventDefault();
  });
});




