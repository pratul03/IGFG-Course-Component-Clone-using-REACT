export const arrayListInJava = [
  {
    topics: [
      {
        title: "ArrayList in Java",
        lastUpdated: "01 Sep, 2024",
        content: [
          {
            type: "description",
            text: "The `ArrayList` class in Java is part of the `java.util` package and provides a dynamic array that can grow and shrink as needed. Unlike arrays, `ArrayList` can hold elements of any object type, and its size can change dynamically at runtime. In this article, we will explore the creation, initialization, and manipulation of `ArrayList`.",
          },
          {
            type: "heading",
            text: "What is an ArrayList?",
          },
          {
            type: "description",
            text: "`ArrayList` is a resizable array implementation in Java, part of the `java.util` package. It allows adding and removing elements dynamically, making it more flexible than standard arrays.",
          },
          {
            type: "image",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3QS2BX75F7hyc0C_lMC3hFbskyF951kyaw&s",
            description: "Java ArrayList Representation",
          },
          {
            type: "heading",
            text: "ArrayList Declaration",
          },
          {
            type: "description",
            text: "To use an `ArrayList` in Java, you need to import the `java.util.ArrayList` package. It can be declared with or without an initial capacity.",
          },
          {
            type: "syntax",
            code: "ArrayList<Type> arrayListName = new ArrayList<Type>();",
            description: "Syntax to declare an `ArrayList` in Java.",
          },
          {
            type: "image",
            url: "https://www.scientecheasy.com/wp-content/uploads/2018/11/arraylist-diagram.png",
            description: "ArrayList Declaration in Java",
          },
          {
            type: "example",
            heading: "Example of ArrayList Declaration",
            code: `// Java code to declare an ArrayList
import java.util.ArrayList;
class Main {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<String>();  // declaring an ArrayList of Strings
    }
}`,
          },
          {
            type: "heading",
            text: "ArrayList Initialization",
          },
          {
            type: "description",
            text: "An `ArrayList` can be initialized in multiple ways, including using the `add()` method, initializing with values, or using loops.",
          },
          {
            type: "list",
            items: [
              {
                title: "1. Initialization Using the add() Method",
                description:
                  "Elements can be added to an `ArrayList` using the `add()` method.",
                code: `ArrayList<Integer> numbers = new ArrayList<Integer>();
numbers.add(10);
numbers.add(20);
numbers.add(30);`,
              },
              {
                title: "2. Initialization with Arrays.asList()",
                description:
                  "You can initialize an `ArrayList` using the `Arrays.asList()` method.",
                code: `ArrayList<String> colors = new ArrayList<String>(Arrays.asList("Red", "Blue", "Green"));`,
              },
              {
                title: "3. Initialization Using a Loop",
                description:
                  "You can initialize an `ArrayList` dynamically by iterating through a loop.",
                code: `ArrayList<Integer> squares = new ArrayList<Integer>();
for (int i = 1; i <= 5; i++) {
    squares.add(i * i);
}`,
              },
            ],
          },
          {
            type: "code",
            heading: "Example of ArrayList Initialization in Java",
            code: `// Java code to initialize an ArrayList
import java.util.ArrayList;
import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        numbers.add(10);  // Adding elements individually
        numbers.add(20);
        numbers.add(30);

        ArrayList<String> colors = new ArrayList<String>(Arrays.asList("Red", "Blue", "Green"));  // Using Arrays.asList()

        for (int num : numbers) {
            System.out.println(num);
        }
        System.out.println(colors);
    }
}`,
          },
          {
            type: "list",
            items: [
              {
                title: "Access ArrayList Elements",
                description:
                  "Elements in an `ArrayList` can be accessed using the `get()` method with an index.",
                code: "arrayList.get(index);",
              },
            ],
          },
          {
            type: "code",
            heading: "Example of Accessing ArrayList Elements",
            code: `// Java code to access ArrayList elements
import java.util.ArrayList;
class Main {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<String>(Arrays.asList("Alice", "Bob", "Charlie"));
        System.out.println(names.get(1));  // Accessing the element at index 1
    }
}`,
            outputHeading: "Output",
            output: `Bob`,
          },
          {
            type: "list",
            items: [
              {
                title: "Update ArrayList Elements",
                description:
                  "You can update an element in an `ArrayList` using the `set()` method.",
                code: "arrayList.set(index, newValue);",
              },
            ],
          },
          {
            type: "list",
            items: [
              {
                title: "ArrayList Traversal",
                description:
                  "You can traverse an `ArrayList` using a for loop, enhanced for loop, or iterator.",
                code: `for (Type element : arrayList) {
    System.out.println(element);
}`,
              },
            ],
          },
          {
            type: "code",
            heading: "How to Use ArrayList in Java?",
            code: `// Java code to demonstrate ArrayList usage
import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.set(1, 25);  // Update element at index 1

        for (int num : numbers) {
            System.out.println(num);
        }
    }
}`,
            outputHeading: "Output",
            output: `10
25
30`,
          },
        ],
      },
    ],
  },
];
