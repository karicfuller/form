var add = function(weather, place) {
    return weather + place;
  }



$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    event.preventDefault();
    var weather = parseInt($("#weather").val());
    var place = parseInt($("#place").val());
    console.log(weather);
    console.log(place);
    var result = add(weather + place);

    if (result >= 4) {
      $('#vacation3').show();
    } else if ((result < 4) && (result >= 3)) {
      $('#vacation2').show();
    } else {
      $('#vacation1').show();
    }
  });


});
