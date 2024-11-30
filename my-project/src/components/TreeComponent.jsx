import { Ellipsis, MessageCircle, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { tree } from "../../public/data/tree";
import { Link } from "react-router-dom";
import CardContainer from "../CardContainer";

const TreeComponent = () => {
  const [updateTime, setUpdateTime] = useState("");

  const formatUpdateTime = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString("en-US", { month: "short" });
    const year = now.getFullYear();
    return `${day} ${month}, ${year}`; // Format it as "14 Sep, 2024"
  };

  useEffect(() => {
    setUpdateTime(`Last Updated: ${formatUpdateTime()}`);
  }, []);

  return (
    <div className="flex w-full mt-[-20px] ml-[-20px] flex-col">
      <div className="left-0 flex flex-col w-[75%] max-w-5xl mr-auto p-6 text-[#0e0e0e] shadow-lg">
        {tree[0]?.topics?.map((item, index) => (
          <div key={index} className="flex flex-col mb-4">
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="mt-2 text-sm font-semibold text-[#0e0e0e] flex items-center">
              {updateTime}
              <div className="flex ml-auto gap-3 text-[#0e0e0e] relative">
                {/* MessageCircle Icon */}
                <div className="relative group">
                  <MessageCircle className="h-5 cursor-pointer hover:text-gray-500" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max p-1 bg-gray-500 text-[#0e0e0e] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                    comments
                  </div>
                </div>

                {/* Pencil Icon */}
                <div className="relative group">
                  <Pencil className="h-5 cursor-pointer hover:text-gray-500" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max p-1 bg-gray-500 text-[#0e0e0e] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                    improve
                  </div>
                </div>

                {/* Ellipsis Icon */}
                <div className="relative group">
                  <Ellipsis className="rotate-[90deg] h-5 cursor-pointer hover:text-gray-500" />
                </div>
              </div>
            </p>
            <hr className="border-t border-gray-900 my-2" />
            <p className="text-lg">{item.description}</p>
            <span className="flex flex-col justify-center content-center items-center bg-slate-300 rounded-lg">
              {item.image && (
                <img
                  src={item.image}
                  alt={"Image"}
                  className="mt-4 rounded-lg w-[600px] h-[40vh]"
                />
              )}
            </span>
            <span>
              {item.sections?.map((section, index) => (
                <div key={index} className="flex flex-col mb-4">
                  {section.heading && (
                    <Link className="text-2xl font-semibold tracking-wide text-greenGFG underline mt-4 mb-2">
                      {section.heading}
                    </Link>
                  )}
                  {section.content && (
                    <p className="text-lg ml-4">{section.content}</p>
                  )}
                  {section.extraText && (
                    <p className="text-lg ml-4 mt-4">{section.extraText}</p>
                  )}
                  {section.listTitle && (
                    <h4 className="text-2xl font-semibold mb-2 tracking-wide">
                      {section.listTitle}
                    </h4>
                  )}
                  {section.listItems && (
                    <ul className="list-disc">
                      {section.listItems.map((listItem, index) => {
                        const [label, desc] = listItem.split(/:(.+)/);

                        return (
                          <li key={index} className="text-lg ml-6">
                            <span className="font-semibold">{label} </span>
                            {desc}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {section.contentList && (
                    <ul className="list-disc">
                      {section.contentList.map((listItem, index) => {
                        const [label, desc] = listItem.split(/:(.+)/);

                        return (
                          <li key={index} className="text-lg ml-6">
                            <Link
                              to={"#"}
                              className="text-greenGFG underline font-semibold"
                            >
                              {label}{" "}
                            </Link>
                            {desc}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </span>
          </div>
        ))}
        <span>
          <Link to={"/"}>
            <CardContainer />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default TreeComponent;
