var add = function(weather, place, season, money, food) {
    return weather + place + season + money + food;
  }

$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    event.preventDefault();
    var weather = parseInt($("#weather").val());
    var place = parseInt($("#place").val());
    var season = parseInt($("#season").val());
    var money = parseInt($("#money").val());
    var food = parseInt($("#food").val());
    var result = weather + place + season + money + food;


    if (result == 0) {
      $('#vacation0').show();
    } else if (result >= 12) {
      $('#vacation3').show();
    } else if ((result <= 11) && (result >= 6)) {
      $('#vacation2').show();
    } else {
      $('#vacation1').show();
    }
  });

});
