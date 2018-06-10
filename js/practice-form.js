$(document).ready(function() {

  function show_answer(answer) {
  	$("#destination").text(answer);
  }

  function find_destination() {
    var first_name = $("#first-name").val();
    var last_name = $("#last-name").val();
    var age = parseInt($("#age").val());
    var weather = $("#weather").val();
    var ocean = $("#ocean").val();
    var place = $("#place").val();
    var nature = $("#nature").val();


//Front-end logic

    if  (ocean === "1" && place === "1") {
      var destination = "Los Angeles";
      return "You should go to Los Angeles, " + first-name + " " + last-name
    } else if (age > "21") {
      var destination = "Oregon";
      return "You should go to Oregon, but don't party too hard, " + " " + first-name + " " + last-name
    }

    if  (weather === "2" && place === "2") {
      var destination = "Santa Barbara";
      return "You should go to Santa Barbara, " + first-name + " " + last-name
    }
  }

  function find_vacation() {
  	var destination = find_destination();
  	show_answer(destination);
  }

  $("button").on("click", find_vacation);

    event.preventDefault();
});
