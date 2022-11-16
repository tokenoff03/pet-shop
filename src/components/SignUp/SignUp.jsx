import as from "../../App.module.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

function SignUp() {
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

  function clickButton(event) {
    if (localStorage.getItem("logInfo")) {
      let log_info = JSON.parse(localStorage.getItem("logInfo"));
      if (checkUser(log_info.users, login, password)) {
        alert("User Exist!!");
      } else {
        log_info.users.push({ login: login, password: password });
        localStorage.setItem("logInfo", JSON.stringify(log_info));
      }
    } else {
      let log_info = [{ login: login, password: password }];
      localStorage.setItem("logInfo", JSON.stringify({ users: log_info }));
    }
  }

  return (
    <div className={as.SignIn}>
      <form>
        <div class="form-outline mb-4">
          <input
            type="text"
            id="form2Example1"
            class="form-control"
            onChange={(e) => setLogin(e.target.value)}
            value={login}
            required
          />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            class="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <NavLink to="/sign-in">
          <button
            type="submit"
            className={`${as.signButton} + btn btn-primary btn-block mb-4`}
            onClick={(event) => clickButton(event)}
          >
            Sign up
          </button>
        </NavLink>
        <div class="text-center">
          <p>
            Have account? <NavLink to="/sign-in">Login</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
