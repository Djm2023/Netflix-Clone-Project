import React from "react";
import Header from "./Header";

const Homepage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full sm:max-w-screen md:h-screen">
        <img
          className="w-full sm:max-w-screen sm:max-h-full h-full md:w-full md:h-full bg-center bg-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <div className=" w-full h-full bg-black/50 absolute top-0">
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
              <form method="post" className="text-center mt-4">
                <input
                  className="px-3 py-2 flex-wrap w-70 mr-3 sm:px-6 sm:py-3 sm:w-56 md:w-96 sm:mr-3 bg-transparent border-2 border-white text-white rounded-sm"
                  type="text"
                  placeholder="Email address"
                  name="email"
                />
                <button className="text-white sm:text-2xl text-xl font-semibold item-center bg-red-600 sm:px-3 px-3 sm:pt-1.5 pt-1.5 pb-2.5 sm:pb-2.5 rounded-md">
                  <span>Get Started</span>
                  <span className="material-symbols-outlined ">
                    navigate_next
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
