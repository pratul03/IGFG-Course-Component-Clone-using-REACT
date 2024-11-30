export const arrayInJava = [
  {
    topics: [
      {
        title: "Java Arrays",
        lastUpdated: "01 Sep, 2024",
        content: [
          {
            type: "description",
            text: `arrays are fundamental structures in Java that allow us to store multiple values of the same type in a single variable. They are useful for managing collections of data efficiently. Arrays in Java work differently than they do in C/C++. This article covers the basics and in-depth explanations with examples of array declaration, creation, and manipulation in Java.\n\n
             Arrays are fundamental to Java programming. They allow you to store and manipulate collections of data efficiently. If you’re looking to get hands-on with more complex array operations and learn advanced techniques, the Java Programming Course offers a structured approach to mastering arrays in Java.`,
          },
          {
            type: "heading",
            text: "What is an Array?",
          },
          {
            type: "description",
            text: "An array in Java is an object that holds a fixed number of values of a single type. The elements of an array are stored in contiguous memory locations. You can use arrays to store collections of data like numbers, strings, or objects.",
          },
          {
            type: "image",
            url: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqa39av41j5rec9a7qahm.png",
            description: "Java Array Data Structure",
          },
          {
            type: "heading",
            text: "Java Array Declaration",
          },
          {
            type: "description",
            text: "In Java, arrays are declared similarly to other variables, but with square brackets []. When an array is declared, the memory for its elements is allocated based on its size.",
          },
          {
            type: "syntax",
            code: "data_type[] array_name;\n           or     \ndata_type array_name[];",
            description: "Array declaration syntax in Java.",
          },
          {
            type: "image",
            url: "https://www.scientecheasy.com/wp-content/uploads/2021/08/creating-array-object.png",
            description: "Array Declaration in Java",
          },
          {
            type: "example",
            heading: "Example of Array Declaration",
            code: `// Java Program to declare arrays
public class Main {
    public static void main(String[] args) {
        int[] arr_int = new int[5];  // declaring array of integers
        String[] arr_str = new String[3];  // declaring array of Strings
    }
}`,
          },
          {
            type: "heading",
            text: "Java Array Initialization",
          },
          {
            type: "description",
            text: "Initialization is the process of assigning values to the elements of an array. You can initialize an array at the time of declaration or later using a constructor.",
          },
          {
            type: "list",
            items: [
              {
                title: "1. Array Initialization with Declaration",
                description:
                  "In this method, we initialize the array while declaring it. We use an initializer list to assign values to the elements of the array.",
                code: "data_type[] array_name = {value1, value2, ..., valueN};",
                image: {
                  url: "https://media.geeksforgeeks.org/wp-content/uploads/20230302092653/C-array-initialization.png",
                  description: null,
                },
              },
              {
                title: "2. Array Initialization after Declaration",
                description:
                  "In this method, we declare the array first, and then initialize each element individually.",
                code: "int[] arr = new int[5];\narr[0] = 10;\narr[1] = 20;",
              },
            ],
          },
          {
            type: "code",
            heading: "Example of Array Initialization in Java",
            code: `// Java Program to demonstrate array initialization
public class Main {
    public static void main(String[] args) {
        // array initialization using initializer list
        int[] arr = {10, 20, 30, 40, 50};

        // array initialization after declaration
        int[] arr2 = new int[5];
        arr2[0] = 1;
        arr2[1] = 2;
    }
}`,
          },
          {
            type: "list",
            items: [
              {
                title: "Access Array Elements",
                description:
                  "You can access any element of an array in Java using the array index, which starts from 0.",
                code: "array_name[index];",
                image: {
                  url: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_05_Arrays-in-Java-1.jpg",
                  description: null,
                },
              },
            ],
          },
          {
            type: "code",
            heading: "Example of Accessing Array Elements",
            code: `// Java Program to access array elements
public class Main {
    public static void main(String[] args) {
        int[] arr = {15, 25, 35, 45, 55};

        System.out.println("Element at arr[2]: " + arr[2]);  // Access element at index 2
        System.out.println("Element at arr[4]: " + arr[4]);  // Access element at index 4
    }
}`,
            outputHeading: "Output",
            output: `Element at arr[2]: 35
Element at arr[4]: 55`,
          },
          {
            type: "list",
            items: [
              {
                title: "Update Array Elements",
                description:
                  "Array elements can be updated by assigning a new value to a specific index in the array.",
                code: "array_name[i] = new_value;",
              },
            ],
          },
          {
            type: "list",
            items: [
              {
                title: "Java Array Traversal",
                description:
                  "You can traverse through an array using loops (e.g., for, while) to access or manipulate the elements.",
                code: `for (int i = 0; i < N; i++) {\n    System.out.println(array_name[i]);\n}`,
                image: {
                  url: "https://talentbattle.in/Files/C4U_Images/C4U_CKEDITOR_IMAGES/IMG12622_Arrays%20(6).png",
                  description: null,
                },
              },
            ],
          },
          {
            type: "code",
            heading: "How to use Array in Java?",
            code: `// Java Program to demonstrate array usage
public class Main {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};

        // Update element at index 2
        arr[2] = 100;

        // Traverse the array using for loop
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}`,
            outputHeading: "Output",
            output: `10
20
100
40
50`,
          },
          {
            type: "code",
            heading: "Array of Strings (Java)",
            description:
              "In Java, strings can be stored in arrays just like any other data type. An array of strings is a collection of string elements.",
            code: `// Java Program to demonstrate string array
public class Main {
    public static void main(String[] args) {
        String[] arr = {"Hello", "World", "Java"};
        for (String str : arr) {
            System.out.println(str);
        }
    }
}`,
            outputHeading: "Output",
            output: `Hello
World
Java`,
          },
        ],
      },
    ],
  },
];
