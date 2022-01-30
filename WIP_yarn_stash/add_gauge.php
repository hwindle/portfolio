<?php
  require_once('db_login.php');

  if (!empty($_POST['add'])) {
    $sql = 'INSERT INTO yarn_weight (weight) VALUES (:weight)';
    $pdo_statement = $pdo_conn->prepare($sql);
    $result = $pdo_statement->execute(array(':weight'=>$_POST['weight']));
  }

?>

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Yarn and String | Home</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body class="wrapper">
      <header>
        <h1 id="big-title">Yarn and String</h1>
        <h2>Add Yarn Weight</h2>
      </header>
      <nav>
        <ul>
          <li><a href="./index.php">Home</a></li>
          <li><a href="./search.php" target="blank">Search Yarn</a></li>
          <li><a href="./delete.php" target="blank">Delete Yarn</a></li>
          <li><a href="./add_yarn.php" target="blank">Add Yarn</a></li>
          <li><a href="./add_gauge.php" target="blank">Add Gauge</a></li>
          <li><a href="./add_brand.php" target="blank">Add Brand</a></li>
          <li><a href="./add_yarn_name.php" target="blank">Add Yarn Name</a></li>
          <li><a href="./add_fibre_type.php" target="blank">Add Fibre Type</a></li>
        </ul>
      </nav>
      <section id="content">

        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
          <p class="form-row">
            <label for="weight">Gauge/weight: </label>
            <input type="text" name="weight" id="weight" required />
          </p>
          <p class="submit-btn-row">
            <input name="add" type="submit" value="Add" />
          </p>
        </form>
        <div class="errors">
          <?php
          if (!empty($_POST['add']) && empty($result)) {
            echo '<p>pdo error on line 10</p>';
          } else {
            echo '<p>Database entry added</p>';
          }
          ?>
        </div>

      </section>
      <footer>
        <p>Made by me, &copy; Hazel Windle 2018 </p>
      </footer>
      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/main.js"></script>
    </body>
</html>
