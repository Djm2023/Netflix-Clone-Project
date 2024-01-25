import React, { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import checkValidation from "../utils/validation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { BACKGROUND_IMG } from "../utils/constants";

const Login = () => {
  const [validationMessage, setValidationMessage] = useState(null);
  
  const email = useRef(null);

  const password = useRef(null);

  
  const handleClickForSignIn = () => {
    console.log("Hi signIN");
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setValidationMessage(message);
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // navigate('/browse');
        console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="w-screen h-screen">
        <div className="w-full h-full sm:max-w-screen md:h-screen">
          <img
            className="w-full sm:max-w-screen sm:max-h-full h-full md:w-full md:h-full bg-center bg-cover"
            src={BACKGROUND_IMG}
            alt="background"
          />
        </div>
        <div className=" w-full h-full bg-black/50 absolute top-0">
          <Header  />
          <div className="h-[90vh] w-full flex justify-center items-center">
            <div className="w-[75vw] sm:w-[27vw] md:w-[45vw] lg:w-[27vw] sm:h-[80vh] md:h-[89vh] lg:h-[85vh] h-[75vh] bg-black flex justify-center items-center">
              <div className="w-[75%] h-full">
                <h1 className="text-white py-5 font-bold text-3xl">Sign In</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="text-white w-full py-4 px-4 my-7 bg-[rgb(51,51,51)] rounded-sm outline-0 border-0"
                    type="email"
                    placeholder="Email address"
                    name="email"
                    ref={email}
                  />
                  <input
                    className="text-white w-full py-4 px-4 bg-[rgb(51,51,51)] outline-0 border-0"
                    type="password"
                    placeholder="Password"
                    name="password"
                    ref={password}
                  />
                  <p className="text-sm text-red-500 pt-4">
                    {/* {validationMessage} */}
                  </p>
                  <button
                    onClick={handleClickForSignIn}
                    className="bg-red-600 w-full mt-8 py-4 font-bold text-lg rounded-md text-white outline-0 border-0"
                  >
                    Sign In
                  </button>
                </form>
                <div className="my-5">
                  <span className="text-gray-500">New to Netflix ? </span>
                  <span className="text-white cursor-pointer hover:underline">
                    <Link to="/">Sign Up Now</Link>
                  </span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.{" "}
                    <span className="text-blue-700">Learn more.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
