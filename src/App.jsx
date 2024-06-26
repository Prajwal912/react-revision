import { useState } from "react";
import "./App.css";
import Image from "./Components/Image";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <img src="public/Images/banner.webp" alt="" className="mx-auto pt-5 pb-5" />
      <Image /> 
      <Form />
      <Footer />
    </>
  );
}

export default App;
