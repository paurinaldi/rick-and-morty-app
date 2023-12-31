import React, { useState } from "react";
import { login } from "../redux/auth/thunk";

import { AppDispatch } from "../redux/types";
import { useAppDispatch } from "../redux/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch: AppDispatch<null> = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
      <div className="flex gap-5 flex-col justify-center">
        <span className="self-center">Not registered yet?</span>
        <button
          className="p-2 bg-slate-500 h-fit w-fit rounded-lg self-center text-slate-900"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
