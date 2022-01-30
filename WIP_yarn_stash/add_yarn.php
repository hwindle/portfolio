<?php
  require_once('db_login.php');


  if (!empty($_POST['add'])) {
    $sql = 'INSERT INTO yarn (brand_id, yarn_name_id, put_up_id,
      yarn_weight_id, notes, handspun, fibres_id, metres_per_ball,
      price_gbp, ball_weight) VALUES
      (:brand_id, :yarn_name_id, :put_up_id, :yarn_weight_id, :notes,
        :handspun, :fibres_id, :metres_per_ball, :price_gbp, :ball_weight)';
    $pdo_statement = $pdo_conn->prepare($sql);

    $cleanNotes = preg_replace('/[^a-zA-Z0-9 ,-]/', '', $_POST['notes']);
    $cleanMetresPerBall = preg_replace('/\D/', '', $_POST['metres_per_ball']);
    //$cleanNoBalls = preg_replace('/\D/', '', $_POST['no_balls']);
    $result = $pdo_statement->execute(array(':brand_id'=>$_POST['brand_id'],
                                        ':yarn_name_id'=>$_POST['yarn_name_id'],
                                        ':put_up_id'=>$_POST['put_up_id'],
                                        ':yarn_weight_id'=>$_POST['weights_id'],
                                        ':notes'=>$cleanNotes,
                                        ':handspun'=>$_POST['handspun'],
                                        ':fibres_id'=>$_POST['fibres_id'],
                                        ':metres_per_ball'=>$cleanMetresPerBall,
                                        ':price_gbp'=>floatval($_POST['price']),
                                        ':ball_weight'=>$_POST['ball_weight']));
    /* find a way to rewrite execute statement */

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
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/jquery.chained.js"></script>
      <script src="js/main.js"></script>
    </head>
    <body class="wrapper">
      <header>
        <h1 id="big-title">Yarn and String</h1>
        <h2>Add Yarn</h2>
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
            <label for="brand_id">Brand: </label>
            <select name="brand_id" id="brand_id">
              <?php
                $pdo_brands = $pdo_conn->prepare('SELECT * FROM brand');
                $pdo_brands->execute();
                $brands = $pdo_brands->fetchAll(PDO::FETCH_ASSOC);
                foreach ($brands as $row) {
                  echo '<option value="' . $row['brand_id'] . '">';
                  echo $row['brand_name'] . '</option>';
                }
              ?>
            </select>
            <label for="yarn_name">Yarn Name: </label>
            <select name="yarn_name_id" id="yarn_name" class="">
              <?php
                $pdo_yarns = $pdo_conn->prepare('SELECT * FROM yarn_name');
                $pdo_yarns->execute();
                $yarn_name = $pdo_yarns->fetchAll(PDO::FETCH_ASSOC);
                foreach ($yarn_name as $row) {
                  echo '<option value="' . $row['yarn_name_id'] . '"
                   data-chained="' . $row['brand_id'] . '">';
                  echo $row['yarn_name'] . '</option>';
                }
              ?>
            </select>
          </p>
          <p class="form-row">
            <label for="put_up">Put Up: </label>
            <select name="put_up_id" id="put_up" class="">
              <?php
                $pdo_yarns = $pdo_conn->prepare('SELECT * FROM put_up');
                $pdo_yarns->execute();
                $put_up = $pdo_yarns->fetchAll(PDO::FETCH_ASSOC);
                foreach ($put_up as $row) {
                  echo '<option value="' . $row['put_up_id'] . '">';
                  echo $row['name'] . '</option>';
                }
              ?>
            </select>
          </p>
          <p class="form-row">
            <label for="notes">Notes: </label>
            <textarea name="notes" id="notes"></textarea>
            <label for="handspun">Handspun:</label>
            <input type="checkbox" name="handspun" id="handspun" />
          </p>
          <p class="form-row">
            <label for="fibres_id">Fibres: </label>
            <select name="fibres_id" id="fibres_id">
              <?php
                $pdo_fibres = $pdo_conn->prepare('SELECT * FROM fibre');
                $pdo_fibres->execute();
                $fibres = $pdo_fibres->fetchAll(PDO::FETCH_ASSOC);
                foreach ($fibres as $row) {
                  echo '<option value="' . $row['fibre_id'] . '">';
                  echo $row['fibre'] . '</option>';
                }
              ?>
            </select>
          </p>
          <p class="form-row">
            <label for="weights_id">Weight/Gauge: </label>
            <select name="weights_id" id="weights_id">
              <?php
                $pdo_weights = $pdo_conn->prepare('SELECT * FROM yarn_weight');
                $pdo_weights->execute();
                $weights = $pdo_weights->fetchAll(PDO::FETCH_ASSOC);
                foreach ($weights as $row) {
                  echo '<option value="' . $row['yarn_weight_id'] . '">';
                  echo $row['weight'] . '</option>';
                }
              ?>
            </select>
            <label for="metres_per_ball">Metres in Ball: </label>
            <input type="number" name="metres_per_ball" id="metres_per_ball" required />
          </p>
          <p class="form-row">
            <label for="price">Price GBP </label>
            <input type="text" name="price" id="price" required />
            <label for="ball_weight">Ball Weight: </label>
            <input type="number" name="ball_weight" id="ball_weight" required/>
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
        <p>Made by me, &copy; Hazel Windle 2019 </p>
      </footer>

    </body>
</html>
