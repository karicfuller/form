<!DOCTYPE html>
<html>
  <head>
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="css/styles.css" rel="stylesheet" type="text/css">
    <script src="js/jquery-3.3.1.js"></script>
    <script src="js/scripts.js"></script>
    <title>Make an Appointment</title>
  </head>
  <body>
    <div class="container">
      <h1>Enter Your Info to Make an Appointment</h1>
      <div id="blanks"
        <form>
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input id="firstName" class="form-control" type="text">
          </div>

          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input id="lastName" class="form-control" type="text">
          </div>

          <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input id="phoneNumber" class="form-control" type="text">
          </div>

          <div class="form-group">
            <label for="emailAddress">Email Address</label>
            <input id="emailAddress" class="form-control" type="text">
          </div>

          <button type="submit" class="btn">Show me the story!</button>
        </form>
      </div>

    <div id="story">
      <h1>We Will Contact You!</h1>
      <p>Hi there <span class="firstName"></span> <span class="lastName"></span> thanks for your interest! We will contact you at your email address,<span class="emailAddress"></span> within the next 24 hours. If we are unable to reach you at <span class="emailAddress"></span> we will give you a call at <span class="phoneNumber"></span>.</p>
    </div>
  </body>
</html>












</html>
