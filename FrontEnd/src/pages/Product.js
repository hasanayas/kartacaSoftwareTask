import React, { useState } from 'react';
import './Product.css';
import { useNavigate } from 'react-router-dom';



// Ürün resimleri import edildi
import img1 from '../image/car1.jpg';
import img2 from '../image/car2.jpg';
import img3 from '../image/car3.jpg';

// Ürünlerin listesi oluşturuldu
const products = [
{ id: 1, name: "Ürün 1", price: 10000, photo: img1 },
{ id: 2, name: "Ürün 2", price: 20000, photo: img2 },
{ id: 3, name: "Ürün 3", price: 30000, photo: img3 },
];

// Her ürünü gösteren Product bileşeni tanımlandı
const Product = ({ product, teklifEt }) => {
  // Teklif girişi ve en yüksek teklifin tutulduğu state'ler tanımlandı
  const [bidPrice, setBidPrice] = useState("");
  const [isEnYuksekTeklif, setIsEnYuksekTeklif] = useState(false);
  
  // Teklif ver butonuna tıklandığında çalışacak fonksiyon
  const handleBid = () => {
  const newPrice = parseInt(bidPrice);

// Yeni teklif, mevcut fiyattan yüksekse en yüksek teklif olarak kabul edilir
if (newPrice > product.price) {
  teklifEt(product.id, newPrice);
  setIsEnYuksekTeklif(true);
}

  };

  return (
    <div className="product-container"> {/* ortalama hizalama için container eklendi */}
      <h2>{product.name}</h2>
      <img src={product.photo} alt={product.name} width="300" height="300" />
      <p>Fiyat: {product.price}</p>
      <div className="bid-container"> {/* ortalama hizalama için container eklendi */}
      <input type="number" step="1000" value={bidPrice} onChange={(e) => setBidPrice(e.target.value)} />
        <button onClick={handleBid}>Teklif Ver</button>
      </div>
      {isEnYuksekTeklif 
      // &&  <p className="bid-success">En yüksek teklif!</p>
      } 
    </div>
  );
};

function Home() {
 // Ürünlerin listesi state'i tanımlandı ve başlangıç değeri olarak "products" listesi atandı
const [productsState, setProductsState] = useState(products);

// Yeni bir teklif geldiğinde tetiklenecek fonksiyon
const handleBid = (id, newPrice) => {
// Yeni fiyatla birlikte ürün listesi güncellendi
const newProductsState = productsState.map((product) => {
if (product.id === id) {
return { ...product, price: newPrice };
} 
else {return product;}
});
setProductsState(newProductsState);
};


  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  }

  return (
    <div className="home-container">
      <button className="logout-button" onClick={handleLogout}>Çıkış Yap 🚀</button>
      {productsState.map((product) => (
        <Product key={product.id} product={product} teklifEt={handleBid} />
      ))}
    </div>
  );
}


export default Home;
