import as from "../../App.module.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

function SignIn() {
  const [password, setPassword] = useState();
  const [login, setLogin] = useState();
  const checkUser = (usersArray, existLogin, existPassword) => {
    for (let i = 0; i < usersArray.length; i++) {
      if (
        usersArray[i].login == existLogin &&
        usersArray[i].password == existPassword
      ) {
        return true;
      }
    }
    return false;
  };
  const clickButton = () => {
    console.log(132);
    let log_info = JSON.parse(localStorage.getItem("logInfo"));
    if (localStorage.getItem("logInfo")) {
      if (checkUser(log_info.users, login, password)) alert("Welcome " + login);
      else alert("Incorrect password or User does not exist");
    } else alert("Incorrect password or User does not exist");
  };

  return (
    <div className={as.SignIn}>
      <form>
        <div class="form-outline mb-4">
          <input
            type="text"
            id="form2Example1"
            class="form-control"
            onChange={(e) => setLogin(e.target.value)}
          />
          <label class="form-label" for="form2Example1">
            Login
          </label>
        </div>

        <div class="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            class="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <NavLink to="/">
          <button
            type="button"
            className={`${as.signButton} + btn btn-primary btn-block mb-4`}
            onClick={clickButton}
          >
            Sign in
          </button>
        </NavLink>
        <div class="text-center">
          <p>
            Not a member? <NavLink to="/sign-up">Register</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
