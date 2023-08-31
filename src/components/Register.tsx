import React, { useState } from "react";

import { AppDispatch } from "../redux/types";
import { RootState, useAppDispatch } from "../redux/store";
import { registerUser } from "../redux/user/thunk";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Actions } from "../redux/user/constants";

const Register = () => {
  const dispatch: AppDispatch<null> = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const userError = useSelector((state: RootState) => state.user.error);
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const response = await dispatch(registerUser({ email, password, name }));
    if (response.type === Actions.REGISTER_USER_SUCCESS) {
      navigate("/");
    }
  };

  return (
    <div className="bg-slate-600 w-screen h-screen flex flex-col align-center">
      <form
        onSubmit={handleLogin}
        className="p-20 gap-10 items-center flex flex-col text-white"
      >
        <fieldset className="flex flex-col w-fit gap-2  text-slate-800">
          <span>Name:</span>
          <input
            className="rounded-lg"
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
          />
        </fieldset>
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
      {userError && (
        <span className="self-center text-red-950">
          There was an error please try again
        </span>
      )}
      <button
        onClick={() => navigate("/")}
        className="p-2 bg-slate-400 h-fit w-fit rounded-sm self-start text-slate-900"
        type="submit"
      >
        Back to Login
      </button>
    </div>
  );
};

export default Register;
