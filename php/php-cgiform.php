<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CGI Form</title>
  </head>
  <body>
    <h1 style="text-align:center">Session Test</h1>
    <hr />
    <form action="./php-cookie-sessions-1.php" method="POST">
      <label>CGI using: 
        <select name="CGIOption" id="CGIOption" >
          <option value="cookie">PHP (Cookie)</option>
          <option value="url">PHP (URL)</option>
        </select>
        </option>  
      </label>
      <br />
      <label for="">What is your name? 
        <input type="text" name="name"/>
      </label>
      <br />
      <button style="margin-top:30px;" type="submit">Test Sessioning</button>
    </form>
    <script>
      let form = document.forms[0];
      form.addEventListener("submit", (e) => {
        form.action = `./php-${form.elements.CGIOption.value}-sessions-1.php`;
      })
    </script>
  </body>
</html>
