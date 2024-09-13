// eslint-disable-next-line no-unused-vars
import React from "react";

const TreeClassificationTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border border-gray-700 px-4 py-2">Classification</th>
            <th className="border border-gray-700 px-4 py-2">Description</th>
            <th className="border border-gray-700 px-4 py-2">Type</th>
            <th className="border border-gray-700 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {/* By Degree */}
          <tr className="bg-gray-900 text-white">
            <td rowSpan="3" className="border border-gray-700 px-4 py-2">
              By Degree
            </td>
            <td rowSpan="3" className="border border-gray-700 px-4 py-2">
              Trees can be classified based on the maximum number of children
              each node can have.
            </td>
            <td className="border border-gray-700 px-4 py-2 text-green-400">
              Binary Tree
            </td>
            <td className="border border-gray-700 px-4 py-2">
              Each node has at most two children.
            </td>
          </tr>
          <tr className="bg-gray-900 text-white">
            <td className="border border-gray-700 px-4 py-2 text-green-400">
              Ternary Tree
            </td>
            <td className="border border-gray-700 px-4 py-2">
              Each node has at most three children.
            </td>
          </tr>
          <tr className="bg-gray-900 text-white">
            <td className="border border-gray-700 px-4 py-2 text-green-400">
              N-ary Tree
            </td>
            <td className="border border-gray-700 px-4 py-2">
              Each node has at most N children.
            </td>
          </tr>

          {/* By Ordering */}
          <tr className="bg-gray-900 text-white">
            <td rowSpan="2" className="border border-gray-700 px-4 py-2">
              By Ordering
            </td>
            <td rowSpan="2" className="border border-gray-700 px-4 py-2">
              Trees can be classified based on the ordering of nodes and
              subtrees.
            </td>
            <td className="border border-gray-700 px-4 py-2 text-green-400">
              Binary Search Tree (BST)
            </td>
            <td className="border border-gray-700 px-4 py-2">
              Left child &lt; parent &lt; right child for every node.
            </td>
          </tr>
          <tr className="bg-gray-900 text-white">
            <td className="border border-gray-700 px-4 py-2 text-green-400">
              Heap
            </td>
            <td className="border border-gray-700 px-4 py-2">
              Specialized binary tree with the heap property.
            </td>
          </tr>

          {/* By Balance */}
          <tr className="bg-gray-900 text-white">
            <td rowSpan="2" className="border border-gray-700 px-4 py-2">
              By Balance
            </td>
            <td rowSpan="2" className="border border-gray-700 px-4 py-2">
              Trees can be classified based on how well-balanced they are.
            </td>
            <td className="border border-gray-700 px-4 py-2 text-green-400">
              Balanced Tree
            </td>
            <td className="border border-gray-700 px-4 py-2">
              Heights of subtrees differ by at most one. Examples include AVL
              trees and Red-Black trees.
            </td>
          </tr>
          <tr className="bg-gray-900 text-white">
            <td className="border border-gray-700 px-4 py-2 text-green-400">
              Unbalanced Tree
            </td>
            <td className="border border-gray-700 px-4 py-2">
              Heights of subtrees can differ significantly, affecting
              performance in operations like search and insertion.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TreeClassificationTable;
