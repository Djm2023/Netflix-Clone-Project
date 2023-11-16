import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidation from "../utils/validation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserEmail } from "../utils/userEmailSlice";
import { BACKGROUND_IMG } from "../utils/constants";

const Homepage = () => {
  const [validationMessage, setValidationMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);

  const handleClickEmail = () => {
    const message = checkValidation(email.current.value);
    setValidationMessage(message);
    dispatch(addUserEmail(email.current.value));
    navigate("/signup/password");
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full sm:max-w-screen md:h-screen">
        <img
          className="w-full sm:max-w-screen sm:max-h-full h-full md:w-full md:h-full bg-center bg-cover"
          src={BACKGROUND_IMG}
          alt="background"
        />
      </div>
      <div className=" w-full h-full bg-black/60 absolute top-0">
        <Header />
        <div>
          <div className="h-[90vh] w-full flex justify-center items-center">
            <div className="sm:h-[60%] sm:w-[85vw] md:h-[55%] md:w-[80vw] lg:w-[65vw] w-[80vw] h-[70%]">
              <h1 className="text-white flex-wrap font-black text-2xl sm:text-3xl md:text-3xl lg:text-4xl  text-center leading-relaxed sm:leading-relaxed">
                The biggest Indian hits. The best Indian stories. All streaming
                here.
              </h1>
              <h2 className=" text-lg sm:text-2xl text-center text-white leading-relaxed sm:leading-relaxed">
                Watch anywhere. Cancel anytime.
              </h2>
              <p className="text-white text-center text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="text-center mt-4"
              >
                <input
                  className="px-3 py-2 flex-wrap w-70 mr-3 sm:px-6 sm:py-3 sm:w-56 md:w-96 sm:mr-3 bg-transparent border-2 border-white text-white rounded-sm"
                  type="email"
                  placeholder="Email address"
                  name="email"
                  ref={email}
                  id="email"
                  required
                  autoComplete="true"
                />

                <button
                  onClick={handleClickEmail}
                  className="text-white mt-5 sm:text-2xl text-xl font-semibold item-center bg-red-600 sm:px-3 px-3 sm:pt-1.5 pt-1.5 pb-2.5 sm:pb-2.5 rounded-md"
                >
                  <span>Get Started</span>
                  <span className="material-symbols-outlined ">
                    navigate_next
                  </span>
                </button>
              </form>
              <p className="text-sm text-red-500 pl-16 pt-2 sm:pl-16 sm:pt-2 md:pl-6 lg:pl-12 xl:pl-52">
                {validationMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
