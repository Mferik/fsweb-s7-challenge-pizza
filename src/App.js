import React from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Form } from "./Components/Form";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Onay } from "./Components/Onay";

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
     
      <Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/pizza" exact element={<Form />}/>
    <Route path="/siparisonay" exact element={<Onay/>}/>
      </Routes>
      
      <Footer/>
    </div>
    </BrowserRouter>
  );
};
export default App;
