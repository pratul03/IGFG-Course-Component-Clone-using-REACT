import { useEffect, useState } from "react";
import { arrayInC } from "../../public/arraydata/arrayInC";
import { Ellipsis, MessageCircle, Pencil } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Play, FilePenLine, Copy } from "lucide-react";
import { FaCuttlefish } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArrayInCLang = () => {
  const [updateTime, setUpdateTime] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [code, setCode] = useState(
    arrayInC[0]?.topics[0]?.exampleOfArrayDeclarationDes || ""
  ); // Initialize code with data

  const formatUpdateTime = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString("en-US", { month: "short" });
    const year = now.getFullYear();
    return `${day} ${month}, ${year}`; // Format it as "14 Sep, 2024"
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    setUpdateTime(`Last Updated: ${formatUpdateTime()}`);
  }, []);

  return (
    <div className="flex w-full mt-[-20px] ml-[-20px] flex-col">
      <div className="left-0 flex flex-col w-[75%] max-w-5xl mr-auto p-6 text-white shadow-lg">
        {arrayInC[0]?.topics?.map((item, index) => (
          <div key={index} className="flex flex-col mb-4">
            <h3 className="text-[28px] tracking-wide font-semibold mb-2">
              {item.title}
            </h3>
            <p className="mt-2 text-sm font-semibold text-gray-200 flex items-center">
              {updateTime}
              <div className="flex ml-auto gap-3 text-white relative">
                {/* MessageCircle Icon */}
                <div className="relative group">
                  <MessageCircle className="h-5 cursor-pointer hover:text-gray-500" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max p-1 bg-gray-500 text-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                    comments
                  </div>
                </div>

                {/* Pencil Icon */}
                <div className="relative group">
                  <Pencil className="h-5 cursor-pointer hover:text-gray-500" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max p-1 bg-gray-500 text-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                    improve
                  </div>
                </div>

                {/* Ellipsis Icon */}
                <div className="relative group">
                  <Ellipsis className="rotate-[90deg] h-5 cursor-pointer hover:text-gray-500" />
                </div>
              </div>
            </p>
            <hr className="border-t border-gray-200/30 my-2" />
            <p className="text-lg">{item.description}</p>
            {item.subTitle && (
              <div className="flex flex-col mt-4">
                <h4 className="text-2xl font-semibold mb-2">{item.subTitle}</h4>
                <p>
                  {item.subDescription && (
                    <p className="text-lg">{item.subDescription}</p>
                  )}
                </p>
              </div>
            )}
            <span className="flex flex-col justify-center content-center items-center">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.imageDescription || "Image"}
                  className="mt-4 rounded-lg w-[600px] h-[40vh]"
                />
              )}
              {item.imageDescription && (
                <p className="text-stone-500/70 italic text-xs font-normal mt-[0.5px]">
                  {item.imageDescription}
                </p>
              )}
            </span>
            {item.CSubDeclaration && (
              <div className="flex flex-col mt-4">
                <h4 className="text-[28px] font-semibold mb-2">
                  {item.CSubDeclaration}
                </h4>
                <p>
                  {item.CSubDeclarationDes && (
                    <p className="text-lg">{item.CSubDeclarationDes}</p>
                  )}
                </p>
              </div>
            )}
            {item.basicSyntax && (
              <div className="flex flex-col mt-4">
                <h4 className="text-[28px] font-semibold mb-2">
                  {item.basicSyntax}
                </h4>
                <SyntaxHighlighter
                  language="c"
                  style={oneDark}
                  showLineNumbers
                  wrapLines
                >
                  {item.basicSyntaxDes}
                </SyntaxHighlighter>
              </div>
            )}
            {item.beforeImg && (
              <div className="flex flex-col mt-4">
                <h4 className="text-lg  tracking-wide mb-2">
                  {item.beforeImg}
                </h4>
                <p>
                  {item.afterImg && (
                    <span className="flex flex-col justify-center content-center items-center">
                      <img
                        src={item.afterImg}
                        alt="Image"
                        className="mt-4 rounded-lg w-[600px] h-[40vh]"
                      />
                    </span>
                  )}
                </p>
                {item.afterImgText && (
                  <p className="text-lg  font-normal mt-2">
                    {item.afterImgText}
                  </p>
                )}
              </div>
            )}
            {item.exampleOfArrayDeclaration && (
              <div className="flex flex-col mt-4">
                <h4 className="text-[28px] font-semibold mb-2">
                  {item.exampleOfArrayDeclaration}
                </h4>
                <p>
                  {item.exampleOfArrayDeclarationDes && (
                    <div className="w-4/5 mx-auto bg-[#282c34] p-4 rounded-lg">
                      <div className="flex gap-6">
                        {/* Language Logo and Action Buttons */}
                        <div className="flex flex-col items-start gap-4">
                          {/* Language Logo and Label */}
                          <div className="flex items-center">
                            <FaCuttlefish
                              size={24}
                              color="#fff"
                              className="mr-2"
                            />
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col gap-4">
                            <Copy
                              size={20}
                              className="text-white cursor-pointer"
                              onClick={handleCopy}
                              title="Copy Code"
                            />
                            <FilePenLine
                              size={20}
                              className="text-white cursor-pointer"
                              onClick={handleEdit}
                              title="Edit Code"
                            />
                            <Play
                              size={20}
                              className="text-white cursor-pointer"
                              onClick={() => alert("Code Running...")}
                              title="Run Code"
                            />
                          </div>
                        </div>

                        {/* Code Display */}
                        <div className="flex-1">
                          {isEditing ? (
                            <textarea
                              className="w-full bg-[#282c34] text-white border-none p-28 text-base rounded-lg focus:outline-none"
                              value={code}
                              onChange={(e) => setCode(e.target.value)}
                            />
                          ) : (
                            <SyntaxHighlighter
                              language="c"
                              style={oneDark}
                              showLineNumbers
                            >
                              {code}
                            </SyntaxHighlighter>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrayInCLang;
