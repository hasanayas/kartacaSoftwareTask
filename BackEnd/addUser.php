<?php
include "connection.php";

header("Access-Control-Allow-Origin: *");

//Objdeki alanları yeni değişkenlere atar
$name = $_POST['name'];
$surname = $_POST['surname'];
$nickname = $_POST['nickname'];
$password = $_POST['password'];

//Değişkenlerdeki değerlere göre yeni kullanıcı ekleme işemi yapar
$insert = $db->prepare("insert into kullanicilar (name, surname, nickname, password) values (:name, :surname, :nickname, :password)");


//execute etme kısmı
$control = $insert->execute(array(
    ":name" => $name,
    ":surname" => $surname,
    ":nickname" => $nickname,
    ":password" => $password,
));

if ($control) {
    echo "eklendi";
} else {
    echo "eklenemedi";
}

?>
