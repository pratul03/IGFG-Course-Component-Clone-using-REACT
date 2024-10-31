export const arrayInC = [
  {
    topics: [
      {
        title: "C Arrays",
        lastUpdated: "01 Sep, 2024",
        description:
          "Array in C is one of the most used data structures in C programming. It is a simple and fast way of storing multiple values under a single name. In this article, we will study the different aspects of array in C language such as array declaration, definition, initialization, types of arrays, array syntax, advantages and disadvantages, and many more.",
        subTitle: "What is an Array?",
        subDescription:
          "An array in C is a fixed-size collection of similar data items stored in contiguous memory locations. It can be used to store the collection of primitive data types such as int, char, float, etc., and also derived and user-defined data types such as pointers, structures, etc.",
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20230302091959/Arrays-in-C.png",
        imageDescription: "Array Data Structure",
        CSubDeclaration: "C Array Declaration",
        CSubDeclarationDes:
          "In C, we have to declare the array like any other variable before using it. We can declare an array by specifying its name, the type of its elements, and the size of its dimensions. When we declare an array in C, the compiler allocates the memory block of the specified size to the array name. To deepen your understanding of arrays and their role in building complex data structures, the C Programming Course Online with Data Structures offers a comprehensive guide to arrays and their practical applications in C.",
        basicSyntax: "Syntax of Array Declaration",
        basicSyntaxDes:
          "data_type array_name [size];\n           or     \ndata_type array_name [size1] [size2]...[sizeN];",
        beforeImg: "where N is the number of dimensions.",
        afterImg:
          "https://media.geeksforgeeks.org/wp-content/uploads/20230302092603/c-array-declaration.png",
        afterImgText:
          "The C arrays are static in nature, i.e., they are allocated memory at the compile time.",
        exampleOfArrayDeclaration: "Example of Array Declaration",
        exampleOfArrayDeclarationDes:
          "// C Program to illustrate the array declaration \n\n #include <stdio.h> \n\n int main(){  \n// declaring array of integers \n  int arr_int[5];    \n\n// declaring array of characters \n   char arr_char[5]; \n\n   return 0; \n  }",
      },
    ],
  },
];
