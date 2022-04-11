<?php 
  if(count($_POST)){
    foreach ($_POST as $key => $value) {
      echo "Your Post Request $key : $value";
    }
  }
?>