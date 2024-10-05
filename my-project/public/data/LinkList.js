export const LinkList = [
  {
    topics: [
      {
        title: "Linked List Data Structure",
        lastUpdated: "01 Sep, 2024",
        description:
          "A linked list is a fundamental data structure in computer science. It mainly allows efficient insertion and deletion operations compared to arrays. Like arrays, it is also used to implement other data structures like stack, queue and deque.",
        heading: "What is a Linked List?",
        content:
          "A linked list is a linear data structure that consists of a series of nodes connected by pointers (in C or C++) or references (in Java, Python and JavaScript). Each node contains data and a pointer/reference to the next node in the list. Unlike arrays, linked lists allow for efficient insertion or removal of elements from any position in the list, as the nodes are not stored contiguously in memory.",

        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240410135517/linked-list.webp",
        imageDescription: "Linked List Data Structure",
        sectionHeading: "Linked List vs Array",
        sectionContent: "Here’s the comparison of Linked List vs Arrays :",
        sections: [
          {
            heading: "Linked List:",
            contentList: [
              "Data Structure: Non-contiguous",
              "Memory Allocation: Typically allocated one by one to individual elements",
              "Insertion/Deletion: Efficient",
              "Access: Sequential",
            ],
          },
          {
            heading: "Array:",
            contentList: [
              "Data Structure: Contiguous",
              "Memory Allocation: Typically allocated to the whole array.",
              "Insertion/Deletion: Inefficient.",
              "Access: Random.",
            ],
          },
          {
            types: "Types of Linked List",
            typesList: [
              "Singly Linked List",
              "Doubly Linked List",
              "Circular Linked List",
              "Circular Doubly Linked List",
              "Header Linked List",
            ],
          },
          {
            operation: "Linked List Operations",
            operationsList: [
              "Traversal: Visiting each node of a linked list in a specific order (e.g., sequential, reverse).",
              "Insertion: Adding a new node to a linked list at a specific position.",
              "Deletion: Removing a node from a linked list at a specific position.",
              "Searching: Finding a node with a specific value in a linked list.",
            ],
          },
          {
            types: "Applications of Linked List",
            typesList: [
              "Implementing other data structures such as stacks, queues, and deques.",
              "Dynamic memory allocation.",
              "Representing sparse matrices.",
              "Implementing algorithms such as Floyd’s cycle detection algorithm.",
            ],
          },
        ],
      },
    ],
  },
];
