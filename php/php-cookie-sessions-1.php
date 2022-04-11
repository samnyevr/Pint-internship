<?php 

  // starting session 
  session_start();

  if(isset($_POST['name'])) {
    $_SESSION['name'] = $_POST['name'];
  }

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PHP Sessions</title>
</head>
<body>
  <h1 style="text-align:center">PHP Sessions Page1</h1>
  <hr />
  <p>
    <b>Name: </b>
    <?php 
      if(isset($_SESSION['name'])) {
        echo $_SESSION['name'];
       }
      else {
        echo "You do not have a name set";
      }
    ?></p>
  <a href="./php-cgiform.php">CGI Form</a>
  <br />
  <a href="./php-cookie-sessions-2.php">Session Page 2</a>
  
  <form style="margin-top:30px" action="./php-cookie-session-destroyed.php" method="GET">
    <button type="submit">Destroy Session</button>
  </form>
</body>
</html>