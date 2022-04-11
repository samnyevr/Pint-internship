<?php 

  session_start();
  
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PHP Sessions</title>
  </head>
  <body>
    <h1 style="text-align:center">PHP Sessions Page2</h1>
    <hr />
    <p><b>Name: </b>
    <?php 
      if(isset($_SESSION['name'])) {
        echo $_SESSION['name'];
       }
       else {
        echo "You do not have a name set";
      } ?></p>
    <a href="./php-cgiform.php">CGI Form</a>
    <br />
    <a href="php-cookie-sessions-1.php">Session Page 1</a>
    <form style="margin-top:30px" action="./php-cookie-session-destroyed.php" method="GET">
      <button type="submit">Destroy Session</button>
    </form>
  </body>
</html>