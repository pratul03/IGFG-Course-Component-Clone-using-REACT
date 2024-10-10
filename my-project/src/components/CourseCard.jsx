import { ArrowRightIcon } from "@radix-ui/react-icons";

import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";

const CourseCard = ({ title, items, onViewAll, backgroundColor }) => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    if (!category) return;

    const formattedCategory = category.toLowerCase().replace(/ /g, "-");

    if (formattedCategory === "dsa") {
      navigate(`/courses/dsa/topics/analysis-of-algorithms`);
    } else {
      navigate(`/courses/dsa/topics/${formattedCategory}`);
    }
  };
  return (
    <div className="p-6 rounded-lg max-w-[1060px] overflow-hidden">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-2xl font-semibold mb-6 mt-[-5px] lg:mt-2">
          {title}
        </h2>
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
              onClick={() => handleClick(item.label)}
            >
              <span className="text-white truncate text-lg lg:text-xl font-medium lg:font-semibold tracking-wide">
                {item.label}
              </span>
              <span className="lg:w-[30px]  lg:h-[30px] w-[26px] h-[26px]">
                <ArrowRightIcon
                  className="text-white w-[26px]
                h-[26px] group-hover:outline-red-100 ml-[150px] mt-3 group-hover:transition ease-in-out duration-200 group-hover:bg-slate-50 group-hover:rounded-full
                lg:w-[30px] lg:h-[30px] delay-75 group-hover:text-black lg:ml-[170px]"
                  onClick={() => handleClick(item.label)}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Prop validation
CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onViewAll: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default CourseCard;
