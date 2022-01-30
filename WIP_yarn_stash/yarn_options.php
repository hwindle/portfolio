<?php
  require_once('db_login.php');
  /* builds options for brand -> yarn name */

  $val = isset($_POST['value']) ? intval($_POST['value']) : false;
  $sql = 'SELECT yarn_name_id, yarn_name FROM yarn_name WHERE brand_id = :brand';
  $prep = $pdo_conn->prepare($sql);
  $prep->bindValue(':brand', $val, PDO::PARAM_INT);
  $prep->execute();
  $yarn_names = $prep->fetchAll(PDO::FETCH_ASSOC);

  /* AJax bit */

  $linked = isset($_POST['linked']) ? $_POST['linked'] : false;
  if ($val && $linked) {
    foreach($yarn_names as $row) {
    $return .= <<< OPTION
    <option value="{$row['yarn_name_id']}">{$row['yarn_name']}</option>
    OPTION;
  }

  echo $return;
}

?>
