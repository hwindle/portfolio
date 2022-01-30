<?php

  $database_username = 'hazel';
  $database_password = '$%294tr7usdJ';
  $pdo_conn = new PDO('mysql:host=localhost;dbname=yarn_haven', $database_username, $database_password);
  $pdo_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
