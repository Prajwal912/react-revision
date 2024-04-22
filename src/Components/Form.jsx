import React from "react";

const Form = () => {
  return (
    <>
      <div className="flex">
        <div className="flex items-center justify-center flex-col	w-[50%]">
          <p>Heading Here</p>
          <address>Shops 2-4/85 S Perth Esplanade, South Perth 6151</address>
          <p>(08) 9474 2200</p>
          <p>Email Us</p>
        </div>
       
         
          <div className="contact-form">
            <form className="form">
              <label className="form-label">Name</label>
              <br></br>
              <input
                className="form-input"
                type="text"
                placeholder="Please Enter your name"
              />
              <br></br>
              <label className="form-label">Email</label>
              <br></br>
              <input
                className="form-input"
                type="email"
                placeholder="Please Enter your email"
              />
              <br></br>
              <label className="form-label">Phone Number</label>
              <br></br>
              <input
                className="form-input"
                type="phone"
                placeholder="Please Enter your Mobile Number"
              />
              <br></br>
              <label className="form-label">Message</label>
              <br></br>
              <textarea
                className="form-input"
                placeholder="Please Enter your Message"
              />
              <br></br>
              <button className="form-btn">Submit</button>
            </form>
          </div>
              
        </div>
    </>
  );
};

export default Form;
