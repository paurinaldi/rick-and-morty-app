import React, { useState } from "react";
import { login } from "../redux/auth/thunk";

import { AppDispatch } from "../redux/types";
import { useAppDispatch } from "../redux/store";

const Login = () => {
  const dispatch: AppDispatch<null> = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="bg-slate-600 w-screen h-screen flex flex-col align-center">
      <form
        onSubmit={handleLogin}
        className="p-20 gap-10 items-center flex flex-col text-white"
      >
        <fieldset className="flex flex-col w-fit gap-2 text-slate-800">
          <span>Email:</span>
          <input
            className="rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </fieldset>
        <fieldset className="flex flex-col w-fit gap-2  text-slate-800">
          <span>Password:</span>
          <input
            className="rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
          />
        </fieldset>
        <button
          className="p-2 bg-slate-400 h-fit w-fit rounded-md self-center text-slate-900"
          type="submit"
        >
          Submit
        </button>
      </form>
      {/* <Link to="/">"Click here to register"</Link> */}
    </div>
  );
};

export default Login;
