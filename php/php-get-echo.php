<html>
  <head>
    <title>GET Request Echo</title>
  </head>
  <body>
    <h1 style="text-align:center;">GET Request Echo</h1>
    <hr />
    <p>
      <b>Query String: </b>
      <?php 
        if(array_key_exists('QUERY_STRING', $_SERVER))
          echo $_SERVER['QUERY_STRING']; ?>
    </p>
    <?php if (count($_GET) > 0): ?>
      <ul>
        <?php foreach ($_GET as $key => $value): ?> 
          <li> <?php echo "<b>$key:</b> $value<br />"; ?></li>
        <?php endforeach ?>
      </ul>
    <?php endif ?>
  </body>
</html>