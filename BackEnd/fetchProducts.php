<?php
// Veritabanı bağlantısı 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kartacatask";

// Veritabanı bağlantısı oluşturulur
$conn = new mysqli($servername, $username, $password, $dbname);

// Hata oluşursa hata mesajı gösterilir
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Ürünlerin listesi veritabanından alınır
$sql = "SELECT urun_id, urun_adi, urun_fiyati, photo FROM urunler";
$result = $conn->query($sql);

// Ürünlerin listesi diziye çevrilir
$products = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $product = array(
      "id" => $row["urun_id"],
      "name" => $row["urun_adi"],
      "price" => $row["urun_fiyati"],
    );
    array_push($products, $product);
  }
}

// Ürünlerin listesi JSON formatına çevrilir ve gönderilir
echo json_encode($products);

$conn->close();
?>