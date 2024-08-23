import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";

const CourseCard = ({ title, items, onViewAll, backgroundColor }) => {
  return (
    <div className="p-6 rounded-lg max-w-[1060px] overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-2xl font-semibold">{title}</h2>
        <button
          onClick={onViewAll}
          className="text-sm hover:text-emerald-600 text-white focus:outline-none border-slate-300/65 border border-1 hover:border-emerald-600 px-3 rounded-2xl leading-8 w-20 h-8"
        >
          View All
        </button>
      </div>
      <div
        className=" overflow-x-auto lg:overflow-visible scroll-smooth scrollbar-hidden"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex flex-nowrap gap-2 lg:gap-4 lg:grid lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${backgroundColor} p-4 rounded-xl flex flex-col justify-center flex-shrink-0 w-[200px] h-[100px] group lg:w-[240px]`}
            >
              <span className="text-white truncate text-lg lg:text-xl font-medium lg:font-semibold tracking-wide  ml-1">
                {item.label}
              </span>
              <span className="lg:w-[30px]  lg:h-[30px] w-[26px] h-[26px]">
                <ArrowRightIcon
                  className="text-white w-[26px]
                h-[26px] group-hover:outline-red-100 ml-[150px] mt-3 group-hover:transition ease-in-out duration-200 group-hover:bg-slate-50 group-hover:rounded-full
                lg:w-[30px] lg:h-[30px] delay-75 group-hover:text-black lg:ml-[170px]"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
