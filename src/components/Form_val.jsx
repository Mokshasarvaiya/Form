import React from "react";

const Form_val = () => {
  return (
    <div>
      <form className="form">
        <h1>Register Form</h1>
        <hr />
        <label htmlFor="">Name:</label>
        <input type="text" placeholder="Enter your Name" className="input" />
        <label htmlFor="">Address:</label>
        <input type="text" className="input" name="" id="" />
        <label htmlFor="">Email:</label>
        <input type="email" className="input" name="" id="" />
        <label htmlFor="">Mobile.No:</label>
        <input type="number" name="" id="" className="input" />
        <br />
        <label htmlFor="">Gender:</label> &nbsp;&nbsp;
        <input type="radio" name="gender" id="male" />
        Male &nbsp;&nbsp;
        <input type="radio" name="gender" id="female" />
        Female
        <br />
        <label htmlFor="">City:</label>
        <select name="" id="" className="input">
          <option name="select">Select</option>
          <option name="Ahmedabad">Ahmedabad</option>
          <option name="Surat">Surat</option>
          <option name="Baroda">Baroda</option>
          <option name="Gandhinagar">Gandhinagar</option>
          <option name="Bhavnagar">Bhavnagar</option>
          <option name="Junagadh">Junagadh</option>
        </select>
        <h3>
          <div>
            <input type="checkbox" name="" id="" className="checkbox" />
            &nbsp; I Agree <span> Company Terms</span> And <span> Policy</span>
          </div>
        </h3>
        <button className="button">SIGN UP</button> &nbsp; &nbsp;
        <button className="button2">RESET</button>
      </form>
    </div>
  );
};

export default Form_val;
