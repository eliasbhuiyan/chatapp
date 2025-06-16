import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

const Registration = () => {
  const userInfo = useSelector((state) => state.userData.user);

  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const auth = getAuth();

  const handelSignup = () => {
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: userData.fullName,
          photoURL: "/default_profile.jfif",
        })
          .then(() => {
            sendEmailVerification(auth.currentUser).then(() => {
              toast.success(
                "Registration successful, please verify your email."
              );
              setTimeout(() => {
                navigate("/signin");
              }, 2000);
            });
          })
          .catch((error) => {});
      })
      .catch((error) => {
        if (error.code === "auth/missing-email") {
          toast.error("Email is required");
        }
        if (error.code === "auth/invalid-email") {
          toast.error("Please enter a valid email address!");
        }
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already exist!");
        }
        if (error.code === "auth/missing-password") {
          toast.error("Password is required!");
        }
        if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters");
        }
      });
  };
  if (userInfo) {
    return <Navigate to="/" />;
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <ToastContainer position="top-right" theme="light" />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5 justify-center">
              <h1 className="font-bold text-3xl text-brand">Sign Up</h1>
            </div>
            <div className="mt-5">
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="fullname"
              >
                Full Name
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="text"
                id="fullname"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, fullName: e.target.value }))
                }
              />
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="email"
                id="email"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="password"
                id="password"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
            <div className="flex justify-center w-full items-center">
              <div>
                <button className="flex items-center justify-center cursor-pointer py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                  <FcGoogle className="text-3xl" />
                  <span className="ml-2">Sign in with Google</span>
                </button>
              </div>
            </div>
            <div className="mt-5">
              <button
                className="py-2 px-4 cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
                onClick={handelSignup}
              >
                Sign Up
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
              <Link
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                to="/signin"
              >
                or sign in
              </Link>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
