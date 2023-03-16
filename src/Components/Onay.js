import React from 'react';
import { useLocation } from 'react-router-dom';
import MopedIcon from '@mui/icons-material/Moped';
import '../Components/Styles/Onay.css'
const Onay = () => {
  var location = useLocation();
  const { cesit, boyut, adet, sucuk, domates, mantar, biber, bacon, tavuk, isim, adres, telefon, not,} = location.state;
  

  return (
    <div className="onay-container">
    <h2>Siparişiniz Alındı!</h2>
    <div className='moped'>
        <MopedIcon/>
        </div>
    <p>Aşağıda, sipariş bilgilerinizi görebilirsiniz:</p>
    <ul>
      <li>Çeşit: <span>{cesit}</span></li>
      <li>Boyut: <span>{boyut}</span></li>
      <li>Adet: <span>{adet}</span></li>
      <li>Ekstra Malzemeler: <span>
        {sucuk && " Sucuk,"}
        {domates && " Domates,"}
        {mantar && " Mantar,"}
        {biber && " Biber,"}
        {bacon && " Bacon,"}
        {tavuk && " Tavuk,"}
        </span>
      </li>
      <li>İsim Soyisim: <span>{isim}</span></li>
      <li>Adres: <span>{adres}</span></li>
      <li>Telefon: <span>{telefon}</span></li>
      <li>Not: <span>{not}</span></li>
      
    </ul>
    
  </div>
  );
}

export {Onay};
