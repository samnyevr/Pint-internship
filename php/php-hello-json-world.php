<?php
    $date_array = getdate();
    $arr = array(
        "message" => "Hello World from PHP!",
        "date" => "Today's date is {$date_array["year"]}-{$date_array["mon"]}-{$date_array["mday"]}",
        "ipAddress" => "{$_SERVER['REMOTE_ADDR']}");
    echo json_encode($arr)
?>