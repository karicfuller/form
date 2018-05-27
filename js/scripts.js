$(document).ready(function() {
  $("#blanks form").submit(function (event) {
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var phoneNumber = $("input#phoneNumber").val();
    var emailAddress = $("input#emailAddress").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".phoneNumber").text(phoneNumberInput);
    $(".emailAddress").text(phoneNumberInput);

    $("#story").show();

    event.preventDefault();
  });
});
