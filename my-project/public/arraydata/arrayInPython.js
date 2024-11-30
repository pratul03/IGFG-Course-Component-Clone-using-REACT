export const arrayInPython = [
  {
    topics: [
      {
        title: "Python Arrays",
        lastUpdated: "01 Sep, 2024",
        content: [
          {
            type: "description",
            text: "Arrays in Python are represented using lists, which are ordered collections of items that can be of different types. While Python doesn't have built-in support for arrays, the list data structure serves a similar purpose. In this article, we will explore various aspects of Python arrays such as creation, initialization, and manipulation.",
          },
          {
            type: "heading",
            text: "What is an Array?",
          },
          {
            type: "description",
            text: "In Python, arrays are represented by lists. A list is a collection of ordered elements that can hold any type of object, including numbers, strings, and even other lists.",
          },
          {
            type: "image",
            url: "https://www.datacamp.com/community/blog/wp-content/uploads/2021/11/arrays-vs-lists-python.jpg",
            description: "Python Lists (Arrays) Representation",
          },
          {
            type: "heading",
            text: "Python Array (List) Declaration",
          },
          {
            type: "description",
            text: "In Python, lists (arrays) are created by enclosing elements in square brackets [ ]. They can be initialized with values or empty.",
          },
          {
            type: "syntax",
            code: "array_name = [value1, value2, ..., valueN]",
            description: "Syntax to create and initialize a list in Python.",
          },
          {
            type: "image",
            url: "https://media.geeksforgeeks.org/wp-content/uploads/20210721215941/python-list-declaration.jpg",
            description: "Python List Declaration",
          },
          {
            type: "example",
            heading: "Example of Array Declaration",
            code: `# Python code to declare a list (array)
arr = [10, 20, 30, 40, 50]  # declaring a list of integers`,
          },
          {
            type: "heading",
            text: "Python Array Initialization",
          },
          {
            type: "description",
            text: "In Python, lists can be initialized during declaration or afterward. Lists can hold values of any data type, and the size of the list can change dynamically.",
          },
          {
            type: "list",
            items: [
              {
                title: "1. Array Initialization with Declaration",
                description:
                  "You can initialize a list while declaring it by enclosing the values within square brackets.",
                code: "arr = [1, 2, 3, 4, 5]",
              },
              {
                title: "2. Array Initialization with Loops",
                description:
                  "You can initialize a list by appending elements using a loop.",
                code: `arr = []\nfor i in range(5):\n    arr.append(i)`,
              },
            ],
          },
          {
            type: "code",
            heading: "Example of Array Initialization in Python",
            code: `# Python code to initialize a list
arr = [1, 2, 3, 4, 5]  # initialization using declaration
arr2 = []  # empty list
for i in range(5):
    arr2.append(i)  # initialization using loop`,
          },
          {
            type: "list",
            items: [
              {
                title: "Access Array Elements",
                description:
                  "You can access any element of a list using an index, starting from 0.",
                code: "arr[index]",
                image: {
                  url: "https://media.geeksforgeeks.org/wp-content/uploads/20210803170002/python-list-access-element.jpg",
                  description: null,
                },
              },
            ],
          },
          {
            type: "code",
            heading: "Example of Accessing Array Elements",
            code: `# Python code to access array elements
arr = [10, 20, 30, 40, 50]
print(arr[2])  # Accessing the element at index 2`,
            outputHeading: "Output",
            output: `30`,
          },
          {
            type: "list",
            items: [
              {
                title: "Update Array Elements",
                description:
                  "You can update an element at a specific index by assigning a new value to it.",
                code: "arr[i] = new_value;",
              },
            ],
          },
          {
            type: "list",
            items: [
              {
                title: "Python Array Traversal",
                description:
                  "You can use loops to traverse through all elements of a list.",
                code: `for element in arr: \n    print(element)`,
                image: {
                  url: "https://media.geeksforgeeks.org/wp-content/uploads/20210803170053/python-list-traversal.jpg",
                  description: null,
                },
              },
            ],
          },
          {
            type: "code",
            heading: "How to use Array in Python?",
            code: `# Python code to demonstrate array usage
arr = [10, 20, 30, 40, 50]
arr[2] = 100  # Update element at index 2
for elem in arr:
    print(elem)`,
            outputHeading: "Output",
            output: `10
20
100
40
50`,
          },
        ],
      },
    ],
  },
];
