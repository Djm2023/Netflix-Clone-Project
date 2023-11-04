import React from "react";

const Login = () => {
  return (
    <div>
      <div className="h-[90vh] w-full flex justify-center items-center">
        <div className="w-[27vw] h-[80vh] bg-black flex justify-center items-center">
          <div className="w-[75%] h-full">
            <h1 className="text-white py-5 font-bold text-3xl">Sign In</h1>
            <form>
              <input
                className="text-white w-full py-4 px-4 my-7 bg-[rgb(51,51,51)] rounded-sm outline-0 border-0"
                type="text"
                placeholder="Email address"
              />
              <input
                className="text-white w-full py-4 px-4 bg-[rgb(51,51,51)] outline-0 border-0"
                type="text"
                placeholder="Password"
              />
              <button className="bg-red-600 w-full mt-8 py-4 font-bold text-lg rounded-md text-white outline-0 border-0">
                Sign In
              </button>
            </form>
            <div className="my-5">
              <span className="text-gray-500">New to Netflix ? </span>
              <span className="text-white cursor-pointer hover:underline">
                {" "}
                Sign Up Now
              </span>
            </div>
            <div>
              <p className="text-gray-500 text-sm">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. Learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
