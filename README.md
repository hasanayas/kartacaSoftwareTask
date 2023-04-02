# 1 - Görevi Alabilmek İçin registrationKey'e Ulaş !

Bu projeyi gelişirebilmek için ilk olarak verilen adresi Simple WebSocket Client Chrome eklentisi ile açalım. 
Bunun yerine Javascript ile WebSocket nesnesi çağırılarak veya Python tarafında websockets kütüphanesi import edilerekte açılabilir. Görsel açıdan ve sağladığı kolaylık sebebiyle eklenti tercih edildi. Daha sonra şifrelenen mesaj çözüldü ve registrationKey elde edildi. Bu sayede istenilen ana göreve ulaşıldı.


![image](https://user-images.githubusercontent.com/86951716/229373686-82b91857-2c23-4179-ae08-b205ba05c758.png)


- Şifresi çözülmüş registrationKey : a6d0526c6cb1d595589a06d6f10df279a78df39e88bc1eaaed3422b6495781c2
- Şifrelenmiş registrationKey: z6w0526x6xy1w595589z06w6u10wu279z78wu39v88yx1vzzvw3422y6495781x2 <br>


# 2 - Verilen İsterlere Göre Uygulamayı Geliştir

Uygulamanın ilk aşaması olan giriş yap ve kayıt ol kısmı tek sayfada yapılmıştır.  Kullanıcı belirlediği nickname ve parolası ile kaydını yaptırır. Bu kayıt veri tabanına aktarılır. Daha sonrasında aynı sayfadan giriş yap butonuna tıklayarak oturumunu açmış olur.

![kayit](https://user-images.githubusercontent.com/86951716/229373877-bab8c06d-26e9-434e-b3b3-f168aa4a36e8.gif) <br> <br>

Kullanıcını oturumu açtıktan sonra React Router sayesinde ürünlerin bulunduğu(/product) sayfasına yönlendirilir. Task'ta verilen üç ürün'e ait bilgiler bu sayfada tutulur. Her ürüne ait ürünId,ürünAdı ve ürünFiyat alanları bulunmaktadır. Bu ürünlere açık arttırma yapılıp, teklif vermek için; teklifin ürün fiyatından yüksek olması gerekir aksi halde teklif kabul edilmez. Kullanıcı fiyatından fazla teklif verdiği zaman ürün fiyatı değişir. Sağ üstte bulunan Çıkış Yap butonuna tıklanıldığı zaman oturum sonlanır. <br>


![test](https://user-images.githubusercontent.com/86951716/229374543-815d0d8f-5d05-4698-ab94-0c8dbdcc1105.gif) <br> <br> 

- Kullanıcılar ve Ürünler Tablosu
- ![tablo](https://user-images.githubusercontent.com/86951716/229375156-f118d253-e6d9-4675-b689-5a97c8425950.png)




