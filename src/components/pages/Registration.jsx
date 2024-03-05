import React from "react";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <section className="pt-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-brand">ChatApp</h2>
          <div className="registration">
            <h1 className="font-primary font-bold text-3xl text-brand">
              Get started with easily register
            </h1>
            <p className="font-primary text-base font-normal text-secondary">
              Free register and you can enjoy it
            </p>
            <form className="form">
              <input className="input" type="text" placeholder="Full Name" />
              <input className="input" type="email" placeholder="E-mail" />
              <input className="input" type="password" placeholder="Password" />
              <span className="forgot-password">
                <a href="#">Forgot Password ?</a>
              </span>
              <button className="login-button">Registration</button>
              <p>
                Already have an account ?{" "}
                <Link className="text-[#0099ff]" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
