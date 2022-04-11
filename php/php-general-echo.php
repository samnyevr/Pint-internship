<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>General Request Echo</title>
</head>
<body>
  <h1 style="text-align:center">General Request Echo</h1>
  <hr />
  <p>
    <b>Request Method</b>
    <?php echo $_SERVER['REQUEST_METHOD']?>
  </p>
  <p>
    <b>Protocol: </b>
    <?php echo $_SERVER['SERVER_PROTOCOL']?>
  </p>
  <p>
    <b>Query: </b>
    <?php 
      if(array_key_exists('QUERY_STRING', $_SERVER))
          echo $_SERVER['QUERY_STRING'];
    ?>
  </p>
  <p>
    <b>Message Body: </b>
    <ul>
      <?php foreach ($_POST as $key => $value): ?>
      <li><?php  echo "$key : $value"; ?></li>
      <?php endforeach ?>
    </ul>
  </p>
</body>
</html>