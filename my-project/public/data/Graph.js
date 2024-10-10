export const graph = [
  {
    topics: [
      {
        title: "Graph Data Structure And Algorithms",
        lastUpdated: "01 Sep, 2024",
        description:
          "Graph Data Structure is a collection of nodes connected by edges. It’s used to represent relationships between different entities. Graph algorithms are methods used to manipulate and analyze graphs, solving various problems like finding the shortest path or detecting cycles.",
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240403150314/graph-data-structure.webp",
        sections: [
          {
            heading: "What is Graph Data Structure?",
            content:
              "Graph is a non-linear data structure consisting of vertices and edges. The vertices are sometimes also referred to as nodes and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph is composed of a set of vertices( V ) and a set of edges( E ). The graph is denoted by G(V, E).",
            extraText:
              "Graph data structures are a powerful tool for representing and analyzing complex relationships between objects or entities. They are particularly useful in fields such as social network analysis, recommendation systems, and computer networks. In the field of sports data science, graph data structures can be used to analyze and understand the dynamics of team performance and player interactions on the field.",
          },
          {
            heading: "Components of a Graph:",
            listItems: [
              "Vertices: : Vertices are the fundamental units of the graph. Sometimes, vertices are also known as vertex or nodes. Every node/vertex can be labeled or unlabeled.",
              "Edges: : Edges are drawn or used to connect two nodes of the graph. It can be an ordered pair of nodes in a directed graph. Edges can connect any two nodes in any possible way. There are no rules. Sometimes, edges are also known as arcs. Every edge can be labeled or unlabeled.",
            ],
          },
          {
            operation: "Operations on Graphs:",
            operation1: "Basic Operations:",
            operationList: [
              "Insertion of Nodes/Edges in the graph: Insert a node into the graph.",
              "Deletion of Nodes/Edges in the graph: Delete a node from the graph.",
              "Searching on Graphs: Search an entity in the graph.",
              "Traversal of Graphs: Traverse all the nodes in the graph.",
            ],
            moreOperations: "More Operations:",
            moreOperationList: [
              "Shortest Paths: From a source to a destination, a source to all other nodes, and between all pairs.",
              "Minimum Spanning Tree: In a weighted, connected undirected graph, finding the minimum weight edges to connect all nodes.",
            ],
          },
          {
            heading: "Applications of Graph:",
            content: "Following are the real-life applications:",
            listItems: [
              "Graph Data Structures: allow random connections between nodes, unlike arrays, linked lists, and trees, which have structural restrictions (linear or hierarchical). This is useful for solving many real-world problems.",
              "Used heavily in social networks: Everyone on the network is a vertex (or node) of the graph, and connections between people are represented as edges. Features like mutual friends and followers can be modeled as graph problems.",
              "Neural Networks: : Vertices represent neurons, and edges represent the synapses between them. Neural networks model the human brain's structure, with about 10^11 neurons and 10^15 synapses.",
              "Compilers: : Graph Data Structures are extensively used in compilers for tasks such as type inference, data flow analysis, and register allocation. Specialized compilers use graphs for tasks like query optimization.",
              "Robot Planning: : Vertices represent the robot's possible states, and edges represent transitions between states. Graphs are used to plan paths for autonomous vehicles.",
              "GPS: : Graph problems like finding the shortest route or closest petrol stations are solved using graph algorithms.",
              "Optimizing Network Costs: : Minimizing the cost of connecting all locations in a network, such as minimizing wire length in wired networks, is solved using the Minimum Spanning Tree problem.",
              "Team Interaction Analysis: : Graphs can represent player interactions, such as passes, shots, and tackles, to analyze team dynamics and improve performance.",
              "Computer Networks: : Graphs represent the topology of computer networks, such as connections between routers and switches.",
              "Transportation Networks: : Graphs represent the connections between places in transportation networks, like roads and airports.",
              "Project Dependencies: : Dependencies in a project can be modeled as a graph, and generating a sequence to complete tasks before their dependents is solved using graph topological sorting.",
            ],
          },
        ],
      },
    ],
  },
];
