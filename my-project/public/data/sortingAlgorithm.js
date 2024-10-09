export const sortingAlgorithm = [
  {
    topics: [
      {
        title: "Sorting Algorithms",
        lastUpdated: "01 Sep, 2024",
        description:
          "A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure.",
        text: "For Example: The below list of characters is sorted in increasing order of their ASCII values. That is, the character with a lesser ASCII value will be placed first than the character with a higher ASCII value.",
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240401174827/sorting-algorithm-banner.webp",
        sections: [
          {
            heading: "What is Sorting?",
            content:
              "Sorting refers to rearrangement of a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure. Sorting means reordering of all the elements either in ascending or in descending order.",
          },
          {
            sorting: "Sorting Terminology:",
            contentList: [
              "In-place Sorting: An in-place sorting algorithm uses constant space for producing the output (modifies the given array only) or copying elements to a temporary storage. Examples: Selection Sort, Bubble Sort, Insertion Sort, and Heap Sort.",
              "Internal Sorting: Internal Sorting is when all the data is placed in the main memory or internal memory. In internal sorting, the problem cannot take input beyond its size. Examples: Heap Sort, Bubble Sort, Selection Sort, Quick Sort, Shell Sort, and Insertion Sort.",
              "External Sorting: External Sorting is when all the data that needs to be sorted cannot be placed in memory at a time, and the sorting is done externally. Examples: Merge Sort, Tag Sort, Polyphase Sort, Four Tape Sort, External Radix Sort.",
              "Stable Sorting: When two identical items appear in the same order in sorted data as in the original array, it's called a stable sort. Examples: Merge Sort, Insertion Sort, Bubble Sort.",
              "Unstable Sorting: When two identical data appear in a different order in sorted data, it's called an unstable sort. Examples: Selection Sort, Quick Sort, Heap Sort, Shell Sort.",
            ],
          },
          {
            label: "Characteristics of Sorting Algorithms:",
            contentList: [
              "Time Complexity: Time complexity, a measure of how long it takes to run an algorithm, is used to categorize sorting algorithms. The worst-case, average-case, and best-case performance of a sorting algorithm can be used to quantify the time complexity of the process.",
              "Auxiliary Space: This is the amount of extra space (apart from input array) needed to sort. For example, Merge Sort requires O(n) and Insertion Sort O(1) auxiliary space.",
              "Stability: A sorting algorithm is said to be stable if the relative order of equal elements is preserved after sorting. This is important in certain applications where the original order of equal elements must be maintained.",
              "In-Place Sorting: An in-place sorting algorithm is one that does not require additional memory to sort the data. This is important when the available memory is limited or when the data cannot be moved.",
              "Adaptivity: An adaptive sorting algorithm is one that takes advantage of pre-existing order in the data to improve performance. For example, Insertion Sort takes time proportional to the number of inversions in the input array.",
            ],
          },
          {
            applicationHeading: "Applications of Sorting Algorithms:",
            contentList: [
              "Searching Algorithms: Sorting is often a crucial step in search algorithms like Binary Search and Ternary Search. Many Greedy Algorithms use sorting as a first step to apply the Greedy Approach, such as in Activity Selection, Fractional Knapsack, and Weighted Job Scheduling.",
              "Data Management: Sorting data makes it easier to search, retrieve, and analyze. For example, the ORDER BY operation in SQL queries requires sorting.",
              "Database Optimization: Sorting data in databases improves query performance. We preprocess the data by sorting so that efficient searching can be applied.",
              "Machine Learning: Sorting is used to prepare data for training machine learning models.",
              "Data Analysis: Sorting helps in identifying patterns, trends, and outliers in datasets. It plays a vital role in statistical analysis, financial modeling, and other data-driven fields.",
              "Operating Systems: Sorting algorithms are used in operating systems for tasks like task scheduling, memory management, and file system organization.",
            ],
          },
        ],
      },
    ],
  },
];
