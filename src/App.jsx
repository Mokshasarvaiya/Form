import React from "react";
import "./App.css";
import Form_val from "./components/Form_val";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <Navbar />
          <Admin />
          <div className="card">
            <Form_val />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
