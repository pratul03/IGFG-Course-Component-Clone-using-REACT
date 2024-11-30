export const arrayInJavaScript = [
  {
    topics: [
      {
        title: "Arrays in JavaScript",
        lastUpdated: "01 Dec, 2024",
        content: [
          {
            type: "description",
            text: "An array in JavaScript is a collection of items stored at contiguous memory locations. Arrays in JavaScript are dynamic, meaning they can grow or shrink in size and hold elements of different data types. In this article, we will explore how to declare, initialize, manipulate, and use arrays in JavaScript.",
          },
          {
            type: "heading",
            text: "What is an Array?",
          },
          {
            type: "description",
            text: "An array in JavaScript is an object used to store multiple values in a single variable. Arrays can hold different types of elements, including numbers, strings, objects, or even other arrays (nested arrays).",
          },
          {
            type: "image",
            url: "https://tecadmin.net/wp-content/uploads/2023/02/javascript-array-blocks.png",
            description: "JavaScript Array Representation",
          },
          {
            type: "heading",
            text: "Array Declaration and Initialization",
          },
          {
            type: "description",
            text: "JavaScript arrays can be created using the `Array` constructor or array literals. Below are several ways to declare and initialize arrays.",
          },
          {
            type: "image",
            url: "https://dmitripavlutin.com/is-array-javascript/cover.png",
            description: "Array Declaration in JavaScript",
          },
          {
            type: "list",
            items: [
              {
                title: "1. Using Array Literals",
                description:
                  "The most common way to create arrays is using square brackets `[]`.",
                code: "let fruits = ['Apple', 'Banana', 'Cherry'];",
              },
              {
                title: "2. Using the Array Constructor",
                description:
                  "You can create arrays using the `Array` constructor.",
                code: "let numbers = new Array(10);  // Creates an empty array with length 10",
              },
              {
                title: "3. Initializing with Mixed Types",
                description:
                  "Arrays in JavaScript can hold elements of different types.",
                code: "let mixedArray = [42, 'Hello', { key: 'value' }, [1, 2, 3]];",
              },
            ],
          },
          {
            type: "code",
            heading: "Examples of Array Declaration",
            code: `// Using array literals
let colors = ['Red', 'Green', 'Blue'];

// Using the Array constructor
let primes = new Array(2, 3, 5, 7, 11);

// Empty array with a specific length
let emptyArray = new Array(5);

console.log(colors);
console.log(primes);
console.log(emptyArray);`,
            outputHeading: "Output",
            output: `['Red', 'Green', 'Blue']
[2, 3, 5, 7, 11]
[undefined, undefined, undefined, undefined, undefined]`,
          },
          {
            type: "heading",
            text: "Accessing and Updating Array Elements",
          },
          {
            type: "description",
            text: "Array elements can be accessed using their index, starting from 0. You can also update elements by directly assigning new values to a specific index.",
          },
          {
            type: "code",
            heading: "Example of Accessing and Updating Elements",
            code: `let fruits = ['Apple', 'Banana', 'Cherry'];

// Access elements
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Cherry

// Update elements
fruits[1] = 'Mango';
console.log(fruits);`,
            outputHeading: "Output",
            output: `Apple
Cherry
['Apple', 'Mango', 'Cherry']`,
          },
          {
            type: "heading",
            text: "Common Array Operations",
          },
          {
            type: "list",
            items: [
              {
                title: "1. Adding Elements",
                description:
                  "Use `push()` to add elements to the end, or `unshift()` to add them to the beginning.",
                code: `let numbers = [1, 2, 3];
numbers.push(4); // [1, 2, 3, 4]
numbers.unshift(0); // [0, 1, 2, 3, 4]`,
              },
              {
                title: "2. Removing Elements",
                description:
                  "Use `pop()` to remove the last element or `shift()` to remove the first.",
                code: `let numbers = [0, 1, 2, 3, 4];
numbers.pop(); // [0, 1, 2, 3]
numbers.shift(); // [1, 2, 3]`,
              },
              {
                title: "3. Finding the Length",
                description:
                  "The `length` property gives the number of elements in the array.",
                code: `let names = ['Alice', 'Bob', 'Charlie'];
console.log(names.length); // 3`,
              },
              {
                title: "4. Iterating Over Arrays",
                description:
                  "Use loops or array methods like `forEach` to iterate through elements.",
                code: `let colors = ['Red', 'Green', 'Blue'];
colors.forEach(color => console.log(color));`,
              },
            ],
          },
          {
            type: "code",
            heading: "Example of Array Operations",
            code: `let numbers = [1, 2, 3];

// Adding elements
numbers.push(4);
numbers.unshift(0);

// Removing elements
numbers.pop();
numbers.shift();

// Iterating
numbers.forEach(num => console.log(num));`,
            outputHeading: "Output",
            output: `2
3`,
          },
          {
            type: "heading",
            text: "Advanced Operations",
          },
          {
            type: "list",
            items: [
              {
                title: "1. Map, Filter, and Reduce",
                description:
                  "Functional programming methods for transforming and summarizing arrays.",
                code: `let numbers = [1, 2, 3, 4, 5];

// Map: Multiply each number by 2
let doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// Filter: Keep only even numbers
let evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// Reduce: Sum of all numbers
let sum = numbers.reduce((acc, num) => acc + num, 0); // 15`,
              },
              {
                title: "2. Sorting Arrays",
                description:
                  "Use `sort()` for sorting, but note it sorts lexicographically by default.",
                code: `let nums = [3, 1, 4, 1, 5];
nums.sort((a, b) => a - b); // [1, 1, 3, 4, 5]`,
              },
              {
                title: "3. Finding Elements",
                description:
                  "Use `find()` or `findIndex()` to locate elements.",
                code: `let fruits = ['Apple', 'Banana', 'Cherry'];
let found = fruits.find(fruit => fruit.startsWith('B')); // Banana`,
              },
            ],
          },
          {
            type: "heading",
            text: "Multidimensional Arrays",
          },
          {
            type: "description",
            text: "JavaScript supports arrays of arrays to create multidimensional structures.",
          },
          {
            type: "code",
            heading: "Example of Multidimensional Arrays",
            code: `let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][2]); // Access element at 2nd row, 3rd column: 6`,
            outputHeading: "Output",
            output: `6`,
          },
        ],
      },
    ],
  },
];
