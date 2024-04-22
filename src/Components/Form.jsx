import React from "react";

const Form = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex items-center justify-center flex-col	w-[50%]">
          <h1 className="mb-10 form-head">Heading Here</h1>
          <address className=""><b>Address: </b>Shops 2-4/85 S Perth Esplanade, South Perth 6151</address>
          <p><a href="tel:9876543232"><b>Call: </b> (08) 9474 2200</a></p>
          <p> <a href="mailto:example@example.com"><b>Mail: </b>example@example.com</a></p>
        </div>
       
         
          <div className="contact-form w-[50%]">
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
