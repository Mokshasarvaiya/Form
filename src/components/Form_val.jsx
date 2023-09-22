import React, { useState }  from "react";

const Form_val = ({setIsModal}) => {
   const [data,setData] =useState({
    name:'',
    address:'',
    email:'',
    mobile:'',
    gender:'',
    city:''
   });
   const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div className="card">
      <form className="form" onSubmit={handleSubmit} >
        <span style={{paddingLeft:'28rem', cursor:'pointer',}} onClick={()=>{setIsModal(false)}}>X</span>
        <h1>Register Form</h1>
        <hr />
        <label htmlFor="">Name:</label>
        <input type="text" placeholder="Enter your Name" className="input" name="name"
          value={data.firstName}
          onChange={handleInputChange}
        />
        <label htmlFor="">Address:</label>
        <input type="text" className="input" name="address" id="" value={data.address} onChange={handleInputChange}/>
        <label htmlFor="">Email:</label>
        <input type="email" className="input" name="email"
          value={data.email}
          onChange={handleInputChange} />
        <label htmlFor="">Mobile.No:</label>
        <input type="number" name="mobile" id="" className="input" value={data.mobile} onChange={handleInputChange} />
        <br />
        <label htmlFor="">Gender:</label> &nbsp;&nbsp;
        <input type="radio" name="gender" id="male" value={data.gender}
          onChange={handleInputChange} />
        Male &nbsp;&nbsp;
        <input type="radio" name="gender" id="female" />
        Female
        <br />
        <label htmlFor="">City:</label>
        <select name="city" value={data.city}
          onChange={handleInputChange} id="" className="input">
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
        <button className="button" type="submit">SIGN UP</button> &nbsp; &nbsp;
        <button className="button2">RESET</button>
      </form>
    </div>
  );
};

export default Form_val;