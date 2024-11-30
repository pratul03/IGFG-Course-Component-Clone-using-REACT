export const arrayInC = [
  {
    topics: [
      {
        title: "C Arrays",
        lastUpdated: "01 Sep, 2024",
        content: [
          {
            type: "description",
            text: "Array in C is one of the most used data structures in C programming. It is a simple and fast way of storing multiple values under a single name. In this article, we will study the different aspects of array in C language such as array declaration, definition, initialization, types of arrays, array syntax, advantages and disadvantages, and many more.",
          },
          {
            type: "heading",
            text: "What is an Array?",
          },
          {
            type: "description",
            text: "An array in C is a fixed-size collection of similar data items stored in contiguous memory locations. It can be used to store the collection of primitive data types such as int, char, float, etc., and also derived and user-defined data types such as pointers, structures, etc.",
          },
          {
            type: "image",
            url: "https://media.geeksforgeeks.org/wp-content/uploads/20230302091959/Arrays-in-C.png",
            description: "Array Data Structure",
          },
          {
            type: "heading",
            text: "C Array Declaration",
          },
          {
            type: "description",
            text: "In C, we have to declare the array like any other variable before using it. We can declare an array by specifying its name, the type of its elements, and the size of its dimensions. When we declare an array in C, the compiler allocates the memory block of the specified size to the array name.",
          },
          {
            type: "syntax",
            code: "data_type array_name [size];\n           or     \ndata_type array_name [size1] [size2]...[sizeN];",
            description: "where N is the number of dimensions.",
          },
          {
            type: "image",
            url: "https://media.geeksforgeeks.org/wp-content/uploads/20230302092603/c-array-declaration.png",
            description:
              "The C arrays are static in nature, i.e., they are allocated memory at compile time.",
          },
          {
            type: "example",
            heading: "Example of Array Declaration",
            code: `// C Program to illustrate the array declaration 
#include <stdio.h> 

int main(){  
  // declaring array of integers 
  int arr_int[5];    

  // declaring array of characters 
  char arr_char[5]; 

  return 0; 
}`,
          },
          {
            type: "heading",
            text: "C Array Initialization",
          },
          {
            type: "description",
            text: "Initialization in C is the process to assign some initial value to the variable. When the array is declared or allocated memory, the elements of the array contain some garbage value. So, we need to initialize the array to some meaningful value. There are multiple ways in which we can initialize an array in C.",
          },
          {
            type: "list",
            items: [
              {
                title: "1. Array Initialization with Declaration",
                description:
                  "In this method, we initialize the array along with its declaration. We use an initializer list to initialize multiple elements of the array. An initializer list is the list of values enclosed within braces { } separated by a comma.",
                code: "data_type array_name [size] = {value1, value2, ... valueN};",
                image: {
                  url: "https://media.geeksforgeeks.org/wp-content/uploads/20230302092653/C-array-initialization.png",
                  description: null,
                },
              },
              {
                title: "2. Array Initialization with Declaration without Size",
                description:
                  "If we initialize an array using an initializer list, we can skip declaring the size of the array as the compiler can automatically deduce the size of the array in these cases. The size of the array in these cases is equal to the number of elements present in the initializer list.",
                code: "data_type array_name[] = {1,2,3,4,5};",
              },
              {
                title:
                  "3. Array Initialization after Declaration (Using Loops)",
                description:
                  "We initialize the array after the declaration by assigning the initial value to each element individually. We can use for loop, while loop, or do-while loop to assign the value to each element of the array.",
                code: "for (int i = 0; i < N; i++) { \n array_name[i] = value i; \n}",
              },
            ],
          },
          {
            type: "code",
            heading: "Example of Array Initialization in C",
            code: `// C Program to demonstrate array initialization 
#include <stdio.h> 

int main(){ 
  // array initialization using initializer list 
  int arr[5] = { 10, 20, 30, 40, 50 }; 

  // array initialization using initializer list 
  // without specifying size 
  int arr1[] = { 1, 2, 3, 4, 5 }; 

  // array initialization using for loop 
  float arr2[5]; 
  for (int i = 0; i < 5; i++) { 
      arr2[i] = (float)i * 2.1; 
  } 

  return 0; 
}`,
          },
          {
            type: "list",
            items: [
              {
                title: "Access Array Elements",
                description:
                  "We can access any element of an array in C using the array subscript operator [ ]  and the index value i of the element.",
                code: "array_name [index];",
                image: {
                  url: "https://media.geeksforgeeks.org/wp-content/uploads/20230302092738/access-array-elements.png",
                  description: null,
                },
              },
            ],
          },
          {
            type: "code",
            heading: "Example of Accessing Array Elements",
            code: `// C Program to illustrate element access using array
// subscript
#include <stdio.h>

int main()
{

    // array declaration and initialization
    int arr[5] = { 15, 25, 35, 45, 55 };

    // accessing element at index 2 i.e 3rd element
    printf("Element at arr[2]: %d\n", arr[2]);

    // accessing element at index 4 i.e last element
    printf("Element at arr[4]: %d\n", arr[4]);

    // accessing element at index 0 i.e first element
    printf("Element at arr[0]: %d", arr[0]);

    return 0;
}`,
          },
        ],
      },
    ],
  },
];
