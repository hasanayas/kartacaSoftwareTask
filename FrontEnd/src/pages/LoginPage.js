import { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function App() {

 // İlgili alanların stateleri
 const [name, setName] = useState('');
 const [surname, setSurname] = useState('');
 const [nickname, setNickname] = useState('');
 const [password, setPassword] = useState('');
 const [showPassword, setShowPassword] = useState(false);
 const [showAdditionalFields, setShowAdditionalFields] = useState(false);

 //Değerleri tutan obje
const obj ={
  name : name,
  surname: surname,
  nickname: nickname,
  password : password
  }

  var config = {
    headers: {'Content-Type': 'application/x-www-form-urlencoded' }
    };
  

  //Giriş yap butonuna basılınca çalışacak fonksiyon
  const navigate = useNavigate();

 const handleSubmit = () => {
  // Kullanıcının nickname ve password bilgileri doğruysa /product sayfasına yönlendirilir
  axios.post("http://localhost:80/kartacatask/checkUser.php", obj, config).then(response => {
      navigate('/product');
  }).catch(error => {
    console.log("Hata oluştu");
  });
};



//Kullanıcı Insert İşlemi
const registerFunc = () => {
  if (!name || !surname || !nickname || !password) {
    alert('Lütfen tüm alanları doldurunuz!');
    return;
  }
  axios.post("http://localhost:80/kartacatask/addUser.php", obj, config).then(response => {
    
    alert('Başarıyla Kayıt Olundu!');
  }).catch(error => {
    console.log("Hata oluştu");
  });
};


  const kaydolaTıkla = () => {
    //Gizlenmiş alanı gösterir
    setShowAdditionalFields(true); 
  };

  const geriyeTikla = () => {
    setShowAdditionalFields(false);
  };

  // Şifrenin görünürlüğünü değiştirir
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <label htmlFor="nickname">Kullanıcı Adı</label>
      <input
        type="text"
        name="nickname"
        id="nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />

      <label htmlFor="pass">Şifre</label>
      <div className="password-field">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="password-toggle" onClick={togglePasswordVisibility}>
          {showPassword ? '🙈' : '👀'}
        </span>
      </div>
      


      <div className={`additional-fields ${showAdditionalFields ? 'show' : ''}`}>


        <label htmlFor="name">Adınız</label>
        <div className="password-show secret">
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>


        <label htmlFor="surname">Soyadınız</label>
        <div className="surname-show secret">
        <input type="text" name="surname" id="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
     </div>

       
      </div>


      <div className="buttons">
        {!showAdditionalFields ? (
          <>
          
            <button type="button" 
              className="login-button"
              onClick={handleSubmit}
            >
              Giriş Yap
            </button>


            <button type="button" 
              className="register-button"
              onClick={kaydolaTıkla}
            >
              Kayıt Ol
            </button>
          </>
        ) : (
          <>
            <button type="button"
              className="back-button"
              onClick={geriyeTikla}>
              Geri
            </button>


            <button type="button"
              className="register-button"
              onClick={registerFunc}
            >
              Kaydol
            </button>
          </>
        )}
      </div>
    </div>

  );
}

export default App;
