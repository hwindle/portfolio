<?php

  require_once('db_login.php');

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
        <h2>Home</h2>
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
        <table class="db-results">
          <thead>
            <th>Brand</th>
            <th>Yarn Name</th>

            <th>Put Up</th>
            <th>Fibre</th>
            <th>Weight</th>
            <th>Meterage</th>
            <th>Ball Weight</th>
            <th>Price (£)</th>
          </thead>
          <tbody>
            <?php
              $sql = $pdo_conn->prepare('SELECT t2.yarn_name, t3.brand_name,
                t6.name, t4.fibre, t5.weight, metres_per_ball,
                ball_weight, price_gbp
                                  FROM yarn AS t1
                                  INNER JOIN yarn_name t2 ON t1.yarn_name_id = t2.yarn_name_id
                                  INNER JOIN brand t3 ON t1.brand_id = t3.brand_id
                                  LEFT JOIN fibre t4 ON t1.fibres_id = t4.fibre_id
                                  LEFT JOIN yarn_weight t5 ON t1.yarn_weight_id = t5.yarn_weight_id
                                  LEFT JOIN put_up t6 ON t1.put_up_id = t6.put_up_id
                                  ORDER BY weight
                                  ');
              $sql->execute();
              $yarns = $sql->fetchAll(PDO::FETCH_ASSOC);
              foreach ($yarns as $row) {
                echo '<tr>';
                echo '<td>' . $row['brand_name'] . '</td>';
                echo '<td>' . $row['yarn_name'] . '</td>';
                echo '<td>' . $row['name'] . '</td>';
                echo '<td>' . $row['fibre'] . '</td>';
                echo '<td>' . $row['weight'] . '</td>';
                echo '<td>' . $row['metres_per_ball'] . '</td>';
                echo '<td>' . $row['ball_weight'] . '</td>';
                echo '<td>' . $row['price_gbp'] . '</td>';
                echo '</tr>';
              }
            ?>
          </tbody>
        </table>
      </section>
      <footer>
        <p>Made by me, &copy; Hazel Windle 2018 </p>
      </footer>
      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/main.js"></script>
    </body>
</html>
