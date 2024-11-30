import { Ellipsis, MessageCircle, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { graph } from "../../public/data/Graph";
import { Link } from "react-router-dom";
import CardContainer from "../CardContainer";

const GraphComponent = () => {
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
        {graph[0]?.topics?.map((item, index) => (
          <div key={index} className="flex flex-col mb-4">
            {item.title && (
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            )}
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
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max p-1 bg-gray-500 text-[#0e0e0e]rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
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
            {item.description && <p className="text-lg">{item.description}</p>}
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
                    <h4 className="text-2xl tracking-wide font-semibold mt-4 mb-2">
                      {section.heading}
                    </h4>
                  )}
                  {section.operation && (
                    <h4 className="text-2xl font-semibold mt-4 mb-2">
                      {section.operation}
                    </h4>
                  )}
                  {section.operation1 && (
                    <h4 className="text-lg font-normal mb-4">
                      {section.operation1}
                      <span>
                        {section.operationList.map((operation, index) => (
                          <li key={index} className="text-lg my-1 ml-2">
                            {operation}
                          </li>
                        ))}
                      </span>
                    </h4>
                  )}
                  {section.moreOperations && (
                    <div>
                      <h4 className="text-lg font-normal mb-4">
                        {section.moreOperations}
                      </h4>
                      <span>
                        {section.moreOperationList.map((operation, index) => (
                          <li key={index} className="text-lg my-1 ml-2">
                            {operation}
                          </li>
                        ))}
                      </span>
                    </div>
                  )}

                  {section.content && (
                    <p className="text-lg ">{section.content}</p>
                  )}
                  {section.extraText && (
                    <p className="text-lg mt-4">{section.extraText}</p>
                  )}
                  {section.listItems && (
                    <ul className="list-disc pl-4">
                      {section.listItems.map((listItem, index) => {
                        const [key, value] = listItem.split(/:(.+)/);

                        return (
                          <li key={index} className="text-lg my-2">
                            <span className="font-semibold">{key}</span>{" "}
                            <span>{value}</span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {section.contentList && (
                    <ul className="list-disc pl-4">
                      {section.contentList.map((listItem, index) => (
                        <li key={index} className="text-lg">
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.contentList1 && (
                    <ul className="list-disc pl-4">
                      {section.contentList1.map((listItem, index) => (
                        <li key={index} className="text-lg">
                          {listItem}
                        </li>
                      ))}
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

export default GraphComponent;
