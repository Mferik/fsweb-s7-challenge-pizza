import React, { useEffect, useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Components/Styles/Form.css";

const schema = yup.object().shape({
  cesit: yup.string().required("Lütfen Seçim Yapınız."),
  isim: yup.string().required("Lütfen İsminizi Giriniz."),
  boyut: yup
    .string()
    .oneOf(["Small", "Medium", "Large"], "Boyutlardan birini seçmelisiniz.")
    .required("Lütfen Boyut Seçiniz"),
  adres: yup.string().required("Adres alanı girilmelidir."),
  telefon: yup
    .number()
    .typeError("Numara sayı olarak girilmeli.")
    .required("Lütfen telefon numarası girin.")
    .test('telefon', 'Telefon numarası en az 10 haneli olmalıdır.', val => val && val.toString().length >= 10),
  adet: yup.number().required("Lütfen adet giriniz."),

  sucuk: yup.boolean().oneOf([true, false], ""),
  domates: yup.boolean().oneOf([true, false], ""),
  mantar: yup.boolean().oneOf([true, false], ""),
  biber: yup.boolean().oneOf([true, false], ""),
  bacon: yup.boolean().oneOf([true, false], ""),
  tavuk: yup.boolean().oneOf([true, false], ""),
  not: yup.string(),
});

export const Form = () => {
  const data = {
    cesit: "",
    boyut: "none",
    sucuk: false,
    domates: false,
    mantar: false,
    biber: false,
    bacon: false,
    tavuk: false,
    isim: "",
    adres: "",
    telefon: "",
    not: "",
    adet: "",
  };

  const errorData = {
    cesit: "",
    boyut: "none",
    sucuk: "",
    domates: "",
    mantar: "",
    biber: "",
    bacon: "",
    tavuk: "",
    isim: "",
    adres: "",
    telefon: "",
    not: "",
    adet: "",
  };

  const [form, setForm] = useState(data);
  const [errors, setErrors] = useState(errorData);

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [yeniSiparis, setYeniSiparis] = useState(null);

  useEffect(() => {
    schema.isValid(form).then((valid) => setButtonDisabled(!valid));
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    formCheck(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const formCheck = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((error) => {
        setErrors({
          ...errors,
          [name]: error.errors[0],
        });
      });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://reqres.in/api/orders", form);
      setYeniSiparis(form);
      
      navigate("/siparisonay", { state: form });
     
    } catch (error) {
      console.error(error);
    }
  };
  console.log(yeniSiparis)
  return (
    <div className="siparis-form">
      <form onSubmit={handleSubmit}>
        <div className="cesit">
          <h4>Pizza Çeşidini Seçiniz</h4>
          <select name="cesit" value={form.cesit} onChange={handleChange}>
            <option value="">Çeşitlerimiz</option>
            <option value="Margarita">Margarita</option>
            <option value="Karışık">Karışık</option>
            <option value="Tavuklu">Tavuklu</option>
          </select>
          {errors.cesit && <p>{errors.cesit}</p>}
        </div>
        <div className="pizza_boyut">
          <h3>Pizza boyutunu seçin</h3>
          <input
            type="radio"
            value="Small"
            name="boyut"
            checked={form.boyut === "Small"}
            onChange={handleChange}
          />{" "}
          Small
          <input
            type="radio"
            value="Medium"
            name="boyut"
            checked={form.boyut === "Medium"}
            onChange={handleChange}
          />{" "}
          Medium
          <input
            type="radio"
            value="Large"
            name="boyut"
            checked={form.boyut === "Large"}
            onChange={handleChange}
          />{" "}
          Large
          {errors.pizza_boyut && <p>{errors.pizza_boyut}</p>}
        </div>
        <div className="pizza_ekstra">
          <h3 className="pizza_ekstra_title">Ekstra malzeme seçin</h3>
          <label>
            <input
              type="checkbox"
              name="sucuk"
              id="sucuk"
              value={form.sucuk}
              onChange={handleChange}
            />
            Sucuk
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="domates"
              id="domates"
              value={form.domates}
              onChange={handleChange}
            />
            Domates
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="mantar"
              id="mantar"
              value={form.mantar}
              onChange={handleChange}
            />
            Mantar
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="biber"
              id="biber"
              value={form.biber}
              onChange={handleChange}
            />
            Biber
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="bacon"
              id="bacon"
              value={form.bacon}
              onChange={handleChange}
            />
            Bacon
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="tavuk"
              id="tavuk"
              value={form.tavuk}
              onChange={handleChange}
            />
            Tavuk
            <label>
              <br />
            </label>
          </label>
         
        </div>
        <div className="isim">
          <h4>İletişim Bilgileri</h4>

          <label>
            İsim Soyisim:
            <input
              type="text"
              name="isim"
              value={form.isim}
              placeholder="İsminizi girebilirsiniz"
              onChange={handleChange}
            />
          </label>
          {errors.isim && <p>{errors.isim}</p>}
        </div>
        <div className="adres">
          <label>
            Adres:
            <input
              type="text"
              name="adres"
              value={form.adres}
              placeholder="Adresinizi girebilirsiniz"
              onChange={handleChange}
            />
          </label>
          {errors.adres && <p>{errors.adres}</p>}
        </div>
        <div className="telefon">
          <label>
            Telefon:
            <input
              type="tel"
              name="telefon"
              value={form.telefon}
              placeholder="Telefon numaranızı girebilirsiniz"
              onChange={handleChange}
            />
          </label>
          {errors.telefon && <p>{errors.telefon}</p>}
        </div>
      <div className="not-wrapper">
        <div className="not">
          <h3>Sipariş Notu</h3>
          <br />
          <label>
            <input
              type="text"
              name="not"
              value={form.not}
              placeholder="Eğer bir notunuz varsa buraya girebilirsiniz"
              onChange={handleChange}
            />
          </label>
          {errors.not && <p>{errors.not}</p>}
        </div>
        
        </div>
        <div className="adet">
          <h3>Sipariş Adedi</h3>
          <label>
            <input
              type="number"
              name="adet"
              value={form.adet}
              min="1"
              onChange={handleChange}
            />
          </label>
          {errors.adet && <p>{errors.adet}</p>}
        </div>
        <input
          className="form-button"
          type="submit"
          name="button"
          disabled={buttonDisabled}
          value="Sipariş Ver"
        />
        <div className="toplam-fiyat">
          <h3>Teknolojik Yemekler</h3>
        </div>
      </form>
    </div>
  );
};
