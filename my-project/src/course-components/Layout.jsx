import React from "react";
import Sidebar from "./sidebar/Sidebar"; // Import the Sidebar component


const PageLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">{children}</div>
    </div>
  );
};

export default PageLayout;
