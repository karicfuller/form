$(document).ready(function() {

  function show_answer(answer) {
  	$("#destination").text(answer);
  }

  function find_destination() {
    var first_name = $("#first-name").val();
    var last_name = $("#last-name").val();
    var age = $("#age").val();
    var weather = $("#weather").val();
    var ocean = $("#ocean").val();
    var place = $("#place").val();
    var nature = $("#nature").val();

  	return "You should go to Hawaii, " + first_name + " " + last_name

 var destination
}

  function find_vacation() {
  	var destination = find_destination();
  	show_answer(destination);
    return false;
  }

  $("button").on("click", find_vacation);

});
