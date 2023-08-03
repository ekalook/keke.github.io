import React from "react";
import "./index.css"
import Logo from ".//Assets/logo.jpg"
import CardsList from "./components/CardsList";

const App = () => {
  return(
    <>
    <div className="logo">
      <img src={Logo} alt="logo" />
    </div>
    <h1 className="header">MyApp Projects</h1>
    <div className="container">
      <CardsList/>
      </div>
    </>
  )
}
export default App;
