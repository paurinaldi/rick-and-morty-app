import React from "react";
import { CardProps } from "./types";

const CharacterCard = ({ data }: CardProps) => {
  return (
    <div className="h-fit w-fit p-5 bg-slate-500 rounded-xl flex flex-col m-2 gap-2 items-center shadow-xl">
      <span className="text-lg text-slate-300 self-center">{data.name}</span>
      <img
        className="w-72 h-72 rounded-2xl"
        alt={`${data.name}`}
        src={data.image}
      ></img>
      <span className=" text-slate-800">Planet: {data.location.name}</span>
    </div>
  );
};

export default CharacterCard;
