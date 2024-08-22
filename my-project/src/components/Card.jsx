import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";

function Card(props) {
  return (
    <div
      className={`group hover:cursor-pointer overflow-hidden rounded-lg shadow text-center ${props.backgroundColor} h-[200px] lg:h-[260px]`}
    >
      <div className="p-6 lg:mt-6">
        <p
          className={`mt-10 text-2xl lg:text-3xl font-semibold ${props.textColor}`}
        >
          <a href="#">{props.title}</a>
        </p>
        <button
          className={`flex mx-auto justify-center mt-5
        text-sm items-center outline rounded-3xl p-3 text-center text-white py-2 outline-1 transition-all duration-300  group-hover:bg-white group-hover:text-emerald-500 group-hover:outline-none tracking-wider font-medium ease-in-out`}
        >
          View more
          <ArrowRightIcon className="h-5 w-5 ml-2 mt-1" />
        </button>
      </div>
    </div>
  );
}

export default Card;
