import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const auth = getAuth();
  let navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [passErr, setPassErr] = useState("");
  const [loginData, setLoginData] = useState({
    email: "elias.cit.bd@gmail.com",
    password: "",
  });

  const handelSubmit = () => {
    if (!loginData.email) {
      setEmailError("Email is required!");
    } else if (!loginData.password) {
      setPassErr("Password is required!");
    } else {
      signInWithEmailAndPassword(auth, loginData.email, loginData.password)
        .then((res) => {
          console.log(res);
          if (res.user.emailVerified == false) {
            toast.error("Email is not verified!", {
              position: "top-center",
              autoClose: 5000,
              closeOnClick: true,
              theme: "light",
            });
          } else {
            toast.success("Login Successful!", {
              position: "top-center",
              autoClose: 5000,
              closeOnClick: true,
              theme: "light",
            });
            // setTimeout(() => {
            //   navigate("/");
            // }, 1500);
          }
        })
        .catch((err) => {
          if (err.code == "auth/invalid-email") {
            setEmailError("Invalid Email! Please input a valid email.");
          }
          if (err.code == "auth/invalid-credential") {
            toast.error("Authorization faild!", {
              position: "top-center",
              autoClose: 5000,
              closeOnClick: true,
              theme: "light",
            });
          }
          if (err.code == "auth/too-many-requests") {
            toast.error(
              "Too many request! user temporarily block pleare try agail later or reset your password",
              {
                position: "top-center",
                autoClose: 5000,
                closeOnClick: true,
                theme: "light",
              }
            );
          }
        });
    }
  };
  return (
    <section className="pt-10">
      <ToastContainer />
      <div className="container">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-brand">ChatApp</h2>
          <div className="registration">
            <h2 className="font-primary font-bold text-3xl text-brand">
              Login
            </h2>
            <p className="font-primary text-base font-normal text-secondary">
              Free register and you can enjoy it
            </p>
            <div className="form">
              <div>
                <input
                  value={loginData.email}
                  onChange={(e) => {
                    setLoginData({ ...loginData, email: e.target.value }),
                      setEmailError("");
                  }}
                  className="input"
                  type="email"
                  placeholder="E-mail"
                />
                {emailError && (
                  <p className="w-fit text-white text-start py-1 px-2 bg-red-500 mt-2 rounded-lg">
                    {emailError}
                  </p>
                )}
              </div>
              <div className="flex items-center my-5 relative">
                <input
                  value={loginData.password}
                  onChange={(e) => {
                    setLoginData({ ...loginData, password: e.target.value }),
                      setPassErr("");
                  }}
                  className="input"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                />
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer text-xl"
                >
                  {showPass ? <FaEye /> : <RiEyeCloseFill />}
                </div>
              </div>
              {passErr && (
                <p className="w-fit text-white text-start py-1 px-2 bg-red-500 mt-2 rounded-lg">
                  {passErr}
                </p>
              )}
              <span className="forgot-password">
                <a href="#">Forgot Password ?</a>
              </span>
              <button onClick={handelSubmit} className="login-button">
                Login
              </button>
              <p>
                Don't have an account ?{" "}
                <Link className="text-[#0099ff]" to="/registration">
                  Registration
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
