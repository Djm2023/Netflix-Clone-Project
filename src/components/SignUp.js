import React from "react";
import Header from "./Header";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useRef } from "react";
import { useSelector } from "react-redux";

const SignUp = () => {
  const userEmailId = useSelector((store) => store.usersEmail);
  const password = useRef(null);
  const email = userEmailId;
  // console.log("Signup" ,email);
  const handleSignup = () => {
    console.log(password.current.value);
    createUserWithEmailAndPassword(auth, email, password.current.value)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode + " " + errorMessage);
      });
  };

  return (
    <div>
      <div className="border-b-2 pb-4">
        <Header />
      </div>
      <div className="w-screen h-auto flex justify-center items-center">
        <div className="w-[80%] sm:w-[30%] md:w-[45%] lg:w-[30%] mt-7 mb-3">
          <p className="text-gray-500 text-sm">
            STEP <span className="text-black">1</span> OF{" "}
            <span className="text-black">2</span>
          </p>
          <h1 className="text-3xl font-bold leading-relaxed">Welcome back!</h1>
          <h1 className="text-3xl font-bold leading-relaxed">
            Joining Netflix is easy.
          </h1>
          <p className="text-xl leading-relaxed">
            Enter your password and you'll be watching in no time.
          </p>
          <p className="text-lg text-gray-500">Email</p>
          <p className="text-lg font-semibold">{email}</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="w-full py-4 px-3 border-[1px] border-gray-400 outline-red-600 mt-3 "
              type="password"
              name="password"
              placeholder="Enter your password"
              ref={password}
              id="password"
            />
            <p className="text-lg text-blue-500 py-4">Forgot your pasword?</p>
            <button
              onClick={handleSignup}
              className="w-full font-semibold text-white bg-red-600 py-4 mb-5 rounded-[3px]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
