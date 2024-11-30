export const arrayInCSharp = [
  {
    topics: [
      {
        title: "C# Arrays",
        lastUpdated: "01 Sep, 2024",
        content: [
          {
            type: "description",
            text: "In C#, arrays are objects that store multiple elements of the same data type. Arrays in C# are strongly typed, meaning you must declare the type of the elements in the array. In this article, we will learn about array declaration, initialization, and usage in C#.",
          },
          {
            type: "heading",
            text: "What is an Array?",
          },
          {
            type: "description",
            text: "An array in C# is a collection of variables that are of the same type, stored in contiguous memory locations. C# arrays are objects derived from the `System.Array` class.",
          },
          {
            type: "image",
            url: "https://cdn.educba.com/academy/wp-content/uploads/2019/10/array-in-C.png",
            description: "C# Array Representation",
          },
          {
            type: "heading",
            text: "C# Array Declaration",
          },
          {
            type: "description",
            text: "In C#, arrays are declared with square brackets []. You must specify the type and size of the array when declaring it, or use an initializer list to assign values during declaration.",
          },
          {
            type: "syntax",
            code: "data_type[] array_name;\n           or     \ndata_type[] array_name = {value1, value2, ..., valueN};",
            description: "Array declaration syntax in C#.",
          },
          {
            type: "image",
            url: "https://media.geeksforgeeks.org/wp-content/uploads/C-Arrays.jpg",
            description: "Array Declaration in C#",
          },
          {
            type: "example",
            heading: "Example of Array Declaration",
            code: `// C# code to declare arrays
int[] arr_int = new int[5];  // declaring an array of integers
string[] arr_str = new string[3];  // declaring an array of strings`,
          },
          {
            type: "heading",
            text: "C# Array Initialization",
          },
          {
            type: "description",
            text: "Arrays in C# can be initialized either when declared or later. You can also initialize arrays using a constructor to allocate memory dynamically.",
          },
          {
            type: "list",
            items: [
              {
                title: "1. Array Initialization with Declaration",
                description:
                  "You can initialize an array with values during declaration.",
                code: "int[] arr = {10, 20, 30, 40, 50};",
              },
              {
                title: "2. Array Initialization with Loops",
                description: "You can initialize an array using loops.",
                code: `int[] arr = new int[5];\nfor (int i = 0; i < arr.Length; i++) {\n    arr[i] = i * 10;\n}`,
              },
            ],
          },
          {
            type: "code",
            heading: "Example of Array Initialization in C#",
            code: `// C# code to initialize an array
int[] arr = {10, 20, 30, 40, 50};  // Initialization with declaration
int[] arr2 = new int[5];  // Empty array
for (int i = 0; i < arr2.Length; i++) {
    arr2[i] = i * 10;  // Initializing using loop
}`,
          },
          {
            type: "list",
            items: [
              {
                title: "Access Array Elements",
                description:
                  "Array elements can be accessed using their index.",
                code: "arr[index];",
                image: {
                  url: "https://i0.wp.com/blog.submain.com/wp-content/uploads/2018/04/accessing_array_elements.png?resize=860%2C579",
                  description: null,
                },
              },
            ],
          },
          {
            type: "code",
            heading: "Example of Accessing Array Elements",
            code: `// C# code to access array elements
int[] arr = {10, 20, 30, 40, 50};
Console.WriteLine(arr[2]);  // Accessing element at index 2`,
            outputHeading: "Output",
            output: `30`,
          },
          {
            type: "list",
            items: [
              {
                title: "Update Array Elements",
                description:
                  "Array elements can be updated by assigning new values to their index.",
                code: "arr[i] = new_value;",
              },
            ],
          },
          {
            type: "list",
            items: [
              {
                title: "C# Array Traversal",
                description:
                  "You can use loops to traverse and access all elements in an array.",
                code: `for (int i = 0; i < arr.Length; i++) {\n    Console.WriteLine(arr[i]);\n}`,
                image: {
                  url: "https://www.guru99.com/images/c-sharp-net/052616_1018_CFundamenta29.png",
                  description: null,
                },
              },
            ],
          },
          {
            type: "code",
            heading: "How to use Array in C#?",
            code: `// C# code to demonstrate array usage
int[] arr = {10, 20, 30, 40, 50};
arr[2] = 100;  // Update element at index 2
for (int i = 0; i < arr.Length; i++) {
    Console.WriteLine(arr[i]);
}`,
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
