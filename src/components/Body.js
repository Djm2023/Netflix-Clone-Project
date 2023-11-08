import React from "react";
import Homepage from "./Homepage";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import SignUp from "./SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup/password",
      element: <SignUp />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName } = user;
      dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
    } else {
      dispatch(removeUser());
    }
  });

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
