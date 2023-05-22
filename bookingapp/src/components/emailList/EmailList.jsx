import React from "react";
import "./emailList.scss";

export const EmailList = () => {
  return (
    <div className="el">
      <div className="container">
        <h1>Say goodbye to wasted time and money!</h1>
        <h3>Sign up and choose our services and enjoy both!</h3>
        <form>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};
