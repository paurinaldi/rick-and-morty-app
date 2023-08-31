import React from "react";
import firebaseApp from "../firebase";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header = () => {
  const { authUser: token } = useSelector((state: RootState) => state.auth);

  const handleLogout = async () => {
    try {
      await firebaseApp.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex p-3 items-center bg-slate-500 text-2xl justify-around">
      <h1>Rick and Morty</h1>

      {token.token && (
        <button
          className="text-sm p-1 bg-slate-400 h-fit w-fit rounded-md"
          type="submit"
          onClick={handleLogout}
        >
          Log out
        </button>
      )}
    </div>
  );
};

export default Header;
