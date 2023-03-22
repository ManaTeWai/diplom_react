<?php
  /*$host = 'localhost'; 
  $user = 'y92830rk_mana';    
  $pass = 'Maxim27102003'; 
  $db_name = 'diplom';   
  $connect = mysqli_connect($host, $user, $pass, $db_name); 
    if (!$connect) {
        echo '<p>Не могу соединиться с БД. Код ошибки: ' . mysqli_connect_errno() . ', ошибка: ' . mysqli_connect_error().'<p>';
        exit;
    }
    $sql = mysqli_query($connect, 'SELECT * FROM `diplom`');
        while ($result = mysqli_fetch_array($sql)) {
        echo json_encode(array(
            'id' => 1,
            'name'=> 'Vasya'
        ))
    } */ 
    $data = array(
        'id' => 1,
        'Name' => 'Vasya'
    );
    header('Content-Type: application/json; charset=utf-8; Access-Control-Allow-Origin: *;');
    echo json_encode($data)
?>   

