import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { removeUserEmail } from "../utils/userEmailSlice";
import { toggleSignIn } from "../utils/userSliceSignIn";
import { removeSignIn } from "../utils/userSliceSignIn";
import { LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const userSignupEmailId = useSelector((store) => store.usersEmail);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleState = () => {
    dispatch(toggleSignIn(true));
  };
  const signInClick = useSelector((store) => store.signin);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        dispatch(removeUserEmail());
        dispatch(removeSignIn());
        navigate("/browse");
      } else {
        if (userSignupEmailId) {
          navigate("/signup/password");
        } else {
          if (signInClick) {
            navigate("/login");
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        }
      }
    });
    return () => {
      unsubscribe();
    };
  }, [signInClick]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 grid-col-[20%_auto] sm:grid-col-[30%_auto] mx-auto max-w-screen px-3">
      <div>
        <img
          className="sm:w-[160px] w-[120px] ml-7 sm:ml-[15px] md:ml-[55px] lg:ml-[160px]"
          src={LOGO}
          alt="logo"
        />
      </div>
      {!userSignupEmailId && !user ? (
        <div className="flex justify-end items-center sm:pr-16 md:pr-10 lg:pr-48">
          <div>
            <span className="material-symbols-outlined text-white absolute text-[12px] pt-2 px-1 sm:text-lg sm:top-3 sm:px-1 md:top-5 md:px-2 md:py-[2px]">
              translate
            </span>
            <select className="bg-transparent border-2 rounded-md text-md pl-3 text-xs px-0 sm:text-sm sm:text-md sm:pl-7 sm:py-1 text-white shadow-xl">
              <option className=" text-black" value="English">
                English
              </option>
              <option className=" text-black" value="Hindi">
                Hindi
              </option>
              <option className=" text-black" value="Hindi">
                Bengali
              </option>
            </select>
          </div>
          <div>
            <button
              onClick={toggleState}
              className="bg-red-600 text-white rounded-md text-xs ml-2 mr-5 px-3 py-1 mx-4 flex-nowrap sm:px-3 sm:py-2 sm:ml-3 sm:text-sm md:px-6 md:py-2 md:mr-20 "
            >
              Sign In
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-end mr-7 sm:mr-20 md:mr-36 lg:mr-52 xl:mr-70">
          <div className="hover:border-b-2 hover:border-red-600 py-0 text-lg">
            <button
              className="text-white cursor-pointer"
              onClick={handleSignOut}
            >
              SignOut
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
