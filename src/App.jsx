import React, { useState } from "react";
import "./App.css";
import Form_val from "./components/Form_val";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";

function App() {
  const [isModal, setIsModal] = useState(false)
  const[val,setVal] = useState([])

  return (
    <>
      <div className="app">
        <div className="container">
          <div className="admin">
          <Navbar isModal={isModal} setIsModal={setIsModal} />

          <Admin val={val}/>
       
          </div>
          {!isModal ? <></>
        :
        <Form_val setIsModal={setIsModal} setVal={setVal} /> }
            {/* <Form_val /> */}
        </div>
      </div>
    </>
  );
}

export default App;