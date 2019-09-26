import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Getdata from "./axioss/getdata";
import Insertdata from "./axioss/insertdata";

import LoginComponent from "./Login/logincomponent";

function App() {
  return (
    <div className="App">
      {/*  <header className="App-header">
        <p> Welcsome </p>
      </header>
      <Getdata />
      <Insertdata /> */}

      <p>welcome</p>
      <LoginComponent />
    </div>
  );
}

export default App;
