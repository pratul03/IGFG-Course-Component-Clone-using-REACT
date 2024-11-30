export const basicArrayProblems = [
  {
    topics: [
      {
        title: "Basic Problems in Arrays",
        lastUpdated: "01 Dec, 2024",
        content: [
          {
            type: "description",
            text: "Arrays are foundational data structures used in programming. This section includes basic problems that help in understanding array manipulation, traversal, and problem-solving techniques. Each problem is solved in C, Java, Python, and JavaScript for a comprehensive understanding.",
          },
          {
            type: "problem",
            title: "1. Find the Largest Element in an Array",
            description: "Given an array of numbers, find the largest element.",
            codeSolutions: [
              {
                language: "C",
                code: `#include <stdio.h>

int main() {
    int arr[] = {3, 5, 7, 2, 8};
    int n = sizeof(arr)/sizeof(arr[0]);
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    printf("Largest element: %d", max);
    return 0;
}`,
              },
              {
                language: "Java",
                code: `import java.util.*;

public class LargestElement {
    public static void main(String[] args) {
        int[] arr = {3, 5, 7, 2, 8};
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        System.out.println("Largest element: " + max);
    }
}`,
              },
              {
                language: "Python",
                code: `arr = [3, 5, 7, 2, 8]
max_element = max(arr)
print("Largest element:", max_element)`,
              },
              {
                language: "JavaScript",
                code: `const arr = [3, 5, 7, 2, 8];
const maxElement = Math.max(...arr);
console.log("Largest element:", maxElement);`,
              },
            ],
          },
          {
            type: "problem",
            title: "2. Reverse an Array",
            description: "Given an array, reverse its elements in place.",
            codeSolutions: [
              {
                language: "C",
                code: `#include <stdio.h>

void reverseArray(int arr[], int n) {
    int start = 0, end = n - 1;
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr)/sizeof(arr[0]);
    reverseArray(arr, n);
    printf("Reversed array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}`,
              },
              {
                language: "Java",
                code: `import java.util.*;

public class ReverseArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        int start = 0, end = arr.length - 1;
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        System.out.println("Reversed array: " + Arrays.toString(arr));
    }
}`,
              },
              {
                language: "Python",
                code: `arr = [1, 2, 3, 4, 5]
arr.reverse()
print("Reversed array:", arr)`,
              },
              {
                language: "JavaScript",
                code: `const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log("Reversed array:", arr);`,
              },
            ],
          },
          {
            type: "problem",
            title: "3. Find the Second Largest Element",
            description: "Given an array, find the second largest element.",
            codeSolutions: [
              {
                language: "C",
                code: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 4, 45, 99};
    int n = sizeof(arr)/sizeof(arr[0]);
    int largest = -1, secondLargest = -1;

    for (int i = 0; i < n; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }
    printf("Second largest element: %d", secondLargest);
    return 0;
}`,
              },
              {
                language: "Java",
                code: `import java.util.*;

public class SecondLargest {
    public static void main(String[] args) {
        int[] arr = {10, 20, 4, 45, 99};
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int num : arr) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num != largest) {
                secondLargest = num;
            }
        }
        System.out.println("Second largest element: " + secondLargest);
    }
}`,
              },
              {
                language: "Python",
                code: `arr = [10, 20, 4, 45, 99]
largest = secondLargest = float('-inf')

for num in arr:
    if num > largest:
        secondLargest = largest
        largest = num
    elif num > secondLargest and num != largest:
        secondLargest = num

print("Second largest element:", secondLargest)`,
              },
              {
                language: "JavaScript",
                code: `const arr = [10, 20, 4, 45, 99];
let largest = -Infinity, secondLargest = -Infinity;

for (let num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log("Second largest element:", secondLargest);`,
              },
            ],
          },
          {
            type: "problem",
            title: "4. Check if Array is Sorted",
            description:
              "Determine if the given array is sorted in non-decreasing order.",
            codeSolutions: [
              {
                language: "C",
                code: `#include <stdio.h>
#include <stdbool.h>

bool isSorted(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr)/sizeof(arr[0]);
    if (isSorted(arr, n)) {
        printf("Array is sorted.");
    } else {
        printf("Array is not sorted.");
    }
    return 0;
}`,
              },
              {
                language: "Java",
                code: `import java.util.*;

public class CheckSorted {
    public static boolean isSorted(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println(isSorted(arr) ? "Array is sorted." : "Array is not sorted.");
    }
}`,
              },
              {
                language: "Python",
                code: `arr = [1, 2, 3, 4, 5]

is_sorted = all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))
print("Array is sorted." if is_sorted else "Array is not sorted.")`,
              },
              {
                language: "JavaScript",
                code: `const arr = [1, 2, 3, 4, 5];

const isSorted = arr.every((num, i, a) => i === 0 || a[i - 1] <= num);
console.log(isSorted ? "Array is sorted." : "Array is not sorted.");`,
              },
            ],
          },
        ],
      },
    ],
  },
];
