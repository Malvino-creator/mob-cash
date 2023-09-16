import React from "react";
import bgimg from "../assets/bgimg.png";
import {useForm} from "react-hook";
import logo from "../assets/logo.png";

const {register,handleSubmit} = useForm();
const onSubmit = data => console.log(data);

function Form() {
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <img src={logo} alt="" id="logo" width="230px" height="70px" />

          <form id="form" className="flex flex-col" on onSubmit={handleSubmit}>
              <p className="custom">
                <strong>Create a Custom Gift Card</strong>
              </p>
            
            <span>
              <h2>To</h2>
            </span>
            <input type="text" {...register("recipient name")}placeholder="Recipient Name" />
            <span>
              <h2>From</h2>
            </span>
            <input type="text"{...register("your name")} placeholder="Your Name" />
            <span>
              <h2>Amount(USD)</h2>
            </span>
            <input type="text"{...register("Amount")} placeholder="$" />
            <span>
              <h2>Your message</h2>
            </span>
            <input type="text" {...register("message")}placeholder="" id="message" />
          </form>
          <span>
            <button id="btn">Generate</button>
          </span>
        </div>

        <div className="col-2">
          <img src={bgimg} alt="" id="img" />

          <button className="proceed-btn">Proceed to Buy</button>
          <p id="terms">
            By clicking proceed you agree to our{" "}
            <strong>
              <a href="privacy"><br></br>Gift Cards Terms of Use</a>
            </strong>{" "}
            and{" "}
            <strong>
              <a href="privacy">Privacy Policy</a>
            </strong>
          </p>
          
          <span id="copyright"> &copy; Copyright 2023 The MobiShare Corporation</span>
        </div>
      </div>
    </section>
  );
}

export default Form;
