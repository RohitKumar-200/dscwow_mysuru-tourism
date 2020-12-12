import React from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem(
          "mysuru-tourism-user",
          JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            pic: result.user.photoURL,
          })
        );
        history.push("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={"/MysuruLogo.png"} alt="mysuru logo" />
        <div className="login__text">
          <h1>Sign in to Mysuru tourism</h1>
        </div>
        <button onClick={signIn}>Sign In With Google</button>
      </div>
    </div>
  );
}

export default Login;
