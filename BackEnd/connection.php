<?php
try {
    $conn = mysqli_connect('localhost', 'root', '');
    $db = new PDO("mysql:host=localhost;dbname=kartacatask;charset=utf8","root","");
  
} catch (PDOException $e) {
    echo "Connection failed : ". $e->getMessage();
}
?>