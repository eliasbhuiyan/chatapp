import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";

const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const [showPass, setShowPass] = useState(false);
  const [userError, setUserError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });
  const handelSubmit = () => {
    if (!name) {
      setUserError({ nameError: "Name is Required !" });
    } else if (!email) {
      setUserError({ emailError: "Email is Required !" });
    } else if (!password) {
      setUserError({ passwordError: "Password is Required !" });
    }
    //  else if (!re.test(password)) {
    //   setUserError({ passwordError: "Inter a strong password !" });
    // }
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser);
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: "/profile.png",
          }).then((res) => {
            toast.success(
              "Registration Successful!. Please verify your email",
              {
                position: "top-center",
                autoClose: 5000,
                closeOnClick: true,
                theme: "light",
              }
            );
            setName("");
            setEmail("");
            setPassword("");
            setUserError("");
            setTimeout(() => {
              navigate("/login");
            }, 3000);
          });
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code.includes("auth/invalid-email")) {
            setUserError({ emailError: "Invalid Email !" });
          }
          if (error.code.includes("auth/email-already-in-use")) {
            setUserError({
              emailError: "Email alreade used, Please try another email !",
            });
          }
          if (error.code.includes("auth/weak-password")) {
            setUserError({
              passwordError: "Password should be at least 6 characters",
            });
          }
        });
    }
  };

  return (
    <section className="pt-10">
      <div className="container">
        <ToastContainer />
        <div className="text-center">
          <h2 className="text-5xl font-bold text-brand">ChatApp</h2>
          <div className="registration">
            <h1 className="font-primary font-bold text-3xl text-brand">
              Get started with easily register
            </h1>
            <p className="font-primary text-base font-normal text-secondary">
              Free register and you can enjoy it
            </p>
            <div className="form">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                type="text"
                placeholder="Full Name"
              />
              {userError.nameError && (
                <p className="w-fit text-white text-start py-1 px-2 bg-red-500 mt-2 rounded-lg">
                  {userError.nameError}
                </p>
              )}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input my-5"
                type="email"
                placeholder="E-mail"
              />
              {userError.emailError && (
                <p className="w-fit text-white text-start py-1 px-2 bg-red-500 mt-2 rounded-lg">
                  {userError.emailError}
                </p>
              )}
              <div className="flex items-center my-5 relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              {userError.passwordError && (
                <p className="w-fit text-white text-start py-1 px-2 bg-red-500 mt-2 rounded-lg">
                  {userError.passwordError}
                </p>
              )}
              <button onClick={handelSubmit} className="login-button">
                Registration
              </button>
              <p>
                Already have an account ?{" "}
                <Link className="text-[#0099ff]" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
