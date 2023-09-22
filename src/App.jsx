import React, { useState } from "react";
import "./App.css";
import Form_val from "./components/Form_val";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";

function App() {
  const [isModal, setIsModal] = useState(false)
  return (
    <>
      <div className="app">
        <div className="container">
          <div className="admin">
          <Navbar isModal={isModal} setIsModal={setIsModal} />
          <Admin />
          </div>
          {!isModal ? <></>
        :
        <Form_val setIsModal={setIsModal}/> }
            {/* <Form_val /> */}
        </div>
      </div>
    </>
  );
}

export default App;