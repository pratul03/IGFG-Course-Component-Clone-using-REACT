import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 p-6 overflow-y-auto">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-green-400">
          Learn Data Structures and Algorithms | DSA Tutorial
        </h3>
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-400 mb-4">
          Data Structures Tutorial
        </h4>
        <ul className="space-y-2">
          <li>
            <NavLink exact to={"/"} className="text-white hover:text-green-400">
              Array Data Structure
            </NavLink>
          </li>
          <li>
            <NavLink to={"/string"} className="text-white hover:text-green-400">
              String in Data Structure
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/linkedlist"}
              className="text-white hover:text-green-400"
            >
              Linked List Data Structure
            </NavLink>
          </li>
          <li>
            <NavLink to={"/stack"} className="text-white hover:text-green-400">
              Stack Data Structure
            </NavLink>
          </li>
          <li>
            <NavLink to={"/queue"} className="text-white hover:text-green-400">
              Queue Data Structure
            </NavLink>
          </li>
          <li>
            <NavLink to={"/tree"} className="text-white hover:text-green-400">
              Tree Data Structure
            </NavLink>
          </li>
          <li>
            <NavLink to={"/heap"} className="text-white hover:text-green-400">
              Heap Data Structure
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
