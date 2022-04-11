<html>
  <head>
    <title>Hello PHP World</title>
    <style>
      h1 {
        text-align: center
      }
    </style>
  </head>
  <body>
    <h1>Hello PHP World</h1>
    <hr />
    <?php
        $date_array = getdate();
        echo "Hello World from PHP! <br />";
        echo "Today's date is {$date_array['year']}-{$date_array['mon']}-{$date_array['mday']} <br />";
        echo "Your IP address is {$_SERVER['REMOTE_ADDR']} <br />";
    ?>
  </body>
</html>