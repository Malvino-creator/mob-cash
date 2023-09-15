import React from "react";
import bgimg from "../assets/bgimg.png";
import logo from "../assets/logo.png";

function Form() {
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <img src={logo} alt="" id="logo" width='250px' height='80px' />

          <form id="form" className="flex flex-col">
            <span>
              <h1 className="custom"><strong>Create a Custom Gift Card</strong></h1>
            </span>
            <span>
              <h2>To</h2>
            </span>
            <input type="text" placeholder="Recipient Name" />
            <span>
              <h2>From</h2>
            </span>
            <input type="text" placeholder="Your Name" />
            <span>
              <h2 >Amount(USD)</h2>
            </span>
            <input type="text" placeholder="$" />
            <span>
              <h2>Your message</h2>
            </span>
            <input type="text" placeholder="" id="message" />
          </form>
          <span>
            <button id="btn">Generate</button>
          </span>
        </div>

        <div className="col-2">
            <img src={bgimg} alt='' id='img'/>

            <button className="proceed-btn">
                Click To Proceed
            </button>
            <p id="terms">By clicking proceed you agree to our <strong><a href="privacy">Gift Cards Terms of Use</a></strong> and <strong><a href="privacy">Privacy Policy</a></strong></p>
        </div>
      </div>
    </section>
  );
}

export default Form;
