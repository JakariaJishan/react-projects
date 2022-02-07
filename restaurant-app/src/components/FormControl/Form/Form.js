import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { app } from "../../../firebase.config";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  let navigate = useNavigate();
  const handleSignIn = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed in
        sessionStorage.setItem("access token", res._tokenResponse.refreshToken);
        sessionStorage.setItem("display name", res.user.displayName);
        navigate("/cart");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const handleSignUp = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed in
        sessionStorage.setItem("access token", res._tokenResponse.refreshToken);
        navigate("/");
        updateProfile(auth.currentUser, {
          displayName: userName
        })

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    
  };
  return (
    <div>
      <Routes>
        <Route
          path="/signin"
          element={
            <SignIn
              setEmail={setEmail}
              setPassword={setPassword}
              handleSignIn={handleSignIn}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              setEmail={setEmail}
              setPassword={setPassword}
              handleSignUp={handleSignUp}
              setUserName={setUserName}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Form;
