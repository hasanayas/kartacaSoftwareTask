<?php

include_once "connection.php";

header("Access-Control-Allow-Origin: *");


// POST isteğinden gelen veriler alınır
$nickname = $_POST["nickname"];
$password = $_POST["password"];



// Kullanıcı sorgulanır
$sql = "SELECT nickname FROM kullanicilar WHERE nickname = $nickname AND password = $password ";
$stmt = $db->prepare($sql);
$stmt->bindParam(':nickname', $nickname);
$stmt->bindParam(':password', $password);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
 header("Location: /product");
exit();}

 else {
  echo "Kullanıcı adı veya şifre yanlış";
}

?>
