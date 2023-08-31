import axios from "axios";
import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { RootState, useAppSelector } from "../redux/store";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");

  const { authUser: token } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    const headers = {
      token: token.token,
    };
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}api/characters/${sortBy}/${page}`,
          { headers }
        );
        setData(response?.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [page, sortBy, token]);

  return (
    <>
      <div className="flex bg-slate-900 w-full justify-center px-20 py-2 text-md gap-10">
        <span className="text-white">Sort by:</span>
        <div className="flex gap-5">
          <button
            className="w-32 bg-slate-500 rounded-md"
            onClick={() => setSortBy("name")}
          >
            Name
          </button>
          <button
            className="w-32 bg-slate-500 rounded-md"
            onClick={() => setSortBy("gender")}
          >
            Gender
          </button>
          <button
            className="w-32 bg-slate-500 rounded-md"
            onClick={() => setSortBy("planet")}
          >
            Planet
          </button>
        </div>
      </div>
      <div className="flex flex-wrap py-5 bg-slate-600 gap-10 justify-center">
        {data.map((data) => (
          <CharacterCard data={data} />
        ))}
      </div>
      <div className="flex fixed bottom-0 w-full justify-between px-20 py-2 text-sm  text-slate-300">
        {page > 1 && (
          <button
            className="w-32 bg-slate-800 rounded-3xl"
            onClick={() => setPage(page - 1)}
          >
            Previous Page: {page - 1}
          </button>
        )}
        <button
          className="w-32 bg-slate-800 rounded-3xl"
          onClick={() => page < 43 && setPage(page + 1)}
        >
          Next Page: {page + 1}
        </button>
      </div>
    </>
  );
};

export default Home;
