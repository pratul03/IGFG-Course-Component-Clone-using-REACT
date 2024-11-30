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
                language: "c",
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
                language: "java",
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
                language: "python",
                code: `arr = [3, 5, 7, 2, 8]
max_element = max(arr)
print("Largest element:", max_element)`,
              },
              {
                language: "javascript",
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
                language: "c",
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
                language: "java",
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
                language: "python",
                code: `arr = [1, 2, 3, 4, 5]
arr.reverse()
print("Reversed array:", arr)`,
              },
              {
                language: "javascript",
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
                language: "c",
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
                language: "java",
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
                language: "python",
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
                language: "javascript",
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
                language: "c",
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
                language: "java",
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
                language: "python",
                code: `arr = [1, 2, 3, 4, 5]

is_sorted = all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))
print("Array is sorted." if is_sorted else "Array is not sorted.")`,
              },
              {
                language: "javascript",
                code: `const arr = [1, 2, 3, 4, 5];

const isSorted = arr.every((num, i, a) => i === 0 || a[i - 1] <= num);
console.log(isSorted ? "Array is sorted." : "Array is not sorted.");`,
              },
            ],
          },
          {
            type: "problem",
            title: "5. Perform Linear Search",
            description:
              "Search for a target element in an array using linear search.",
            codeSolutions: [
              {
                language: "c",
                code: `#include <stdio.h>
#include <stdbool.h>

bool linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return true;
        }
    }
    return false;
}

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int target = 30;
    int n = sizeof(arr) / sizeof(arr[0]);
    printf(linearSearch(arr, n, target) ? "Element found" : "Element not found");
    return 0;
}`,
              },
              {
                language: "java",
                code: `public class LinearSearch {
    public static boolean linearSearch(int[] arr, int target) {
        for (int num : arr) {
            if (num == target) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        System.out.println(linearSearch(arr, 30) ? "Element found" : "Element not found");
    }
}`,
              },
              {
                language: "python",
                code: `arr = [10, 20, 30, 40, 50]
target = 30

if target in arr:
    print("Element found")
else:
    print("Element not found")`,
              },
              {
                language: "javascript",
                code: `const arr = [10, 20, 30, 40, 50];
const target = 30;

console.log(arr.includes(target) ? "Element found" : "Element not found");`,
              },
            ],
          },

          // Problem 6: Binary Search
          {
            type: "problem",
            title: "6. Perform Binary Search",
            description:
              "Search for a target element in a sorted array using binary search.",
            codeSolutions: [
              {
                language: "c",
                code: `#include <stdio.h>
#include <stdbool.h>

bool binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return true;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int target = 30;
    int n = sizeof(arr) / sizeof(arr[0]);
    printf(binarySearch(arr, n, target) ? "Element found" : "Element not found");
    return 0;
}`,
              },
              {
                language: "java",
                code: `import java.util.Arrays;

public class BinarySearch {
    public static boolean binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return true;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return false;
    }

    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        System.out.println(binarySearch(arr, 30) ? "Element found" : "Element not found");
    }
}`,
              },
              {
                language: "python",
                code: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return True
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return False

arr = [10, 20, 30, 40, 50]
target = 30
print("Element found" if binary_search(arr, target) else "Element not found")`,
              },
              {
                language: "javascript",
                code: `function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return true;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}

const arr = [10, 20, 30, 40, 50];
const target = 30;
console.log(binarySearch(arr, target) ? "Element found" : "Element not found");`,
              },
            ],
          },

          // Problem 7: Remove Duplicates from a Sorted Array
          {
            type: "problem",
            title: "7. Remove Duplicates from a Sorted Array",
            description:
              "Given a sorted array, remove duplicates in-place and return the new length.",
            codeSolutions: [
              {
                language: "c",
                code: `#include <stdio.h>

int removeDuplicates(int arr[], int n) {
    if (n == 0) return 0;
    int index = 0;
    for (int i = 1; i < n; i++) {
        if (arr[i] != arr[index]) {
            index++;
            arr[index] = arr[i];
        }
    }
    return index + 1;
}

int main() {
    int arr[] = {1, 1, 2, 3, 3, 4};
    int n = sizeof(arr) / sizeof(arr[0]);
    int newLength = removeDuplicates(arr, n);
    printf("New length: %d", newLength);
    return 0;
}`,
              },
              {
                language: "java",
                code: `
                public class RemoveDuplicates {
    public static int removeDuplicates(int[] arr) {
        if (arr.length == 0) return 0;
        int index = 0;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[index]) {
                index++;
                arr[index] = arr[i];
            }
        }
        return index + 1;
    }

    public static void main(String[] args) {
        int[] arr = {1, 1, 2, 3, 3, 4};
        int newLength = removeDuplicates(arr);
        System.out.println("New length: " + newLength);
    }
}
`,
              },
              {
                language: "python",
                code: `def remove_duplicates(arr):
    if not arr:
        return 0
    index = 0
    for i in range(1, len(arr)):
        if arr[i] != arr[index]:
            index += 1
            arr[index] = arr[i]
    return index + 1

arr = [1, 1, 2, 3, 3, 4]
new_length = remove_duplicates(arr)
print("New length:", new_length)
`,
              },
              {
                language: "javascript",
                code: `function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[index]) {
            index++;
            arr[index] = arr[i];
        }
    }
    return index + 1;
}

const arr = [1, 1, 2, 3, 3, 4];
const newLength = removeDuplicates(arr);
console.log("New length:", newLength);
`,
              },
            ],
          },
          {
            type: "problem",
            title: "8.  Generate All Subarrays of an Array",
            description:
              "Given an array, generate all possible subarrays of the array.",
            codeSolutions: [
              {
                language: "c",
                code: `#include <stdio.h>

void generateSubarrays(int arr[], int n) {
    for (int start = 0; start < n; start++) {
        for (int end = start; end < n; end++) {
            for (int i = start; i <= end; i++) {
                printf("%d ", arr[i]);
            }
            printf("\n");
        }
    }
}

int main() {
    int arr[] = {1, 2, 3};
    int n = sizeof(arr) / sizeof(arr[0]);
    generateSubarrays(arr, n);
    return 0;
}
`,
              },
              {
                language: "java",
                code: `public class GenerateSubarrays {
    public static void generateSubarrays(int[] arr) {
        for (int start = 0; start < arr.length; start++) {
            for (int end = start; end < arr.length; end++) {
                for (int i = start; i <= end; i++) {
                    System.out.print(arr[i] + " ");
                }
                System.out.println();
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        generateSubarrays(arr);
    }
}
`,
              },
              {
                language: "python",
                code: `def generate_subarrays(arr):
    for start in range(len(arr)):
        for end in range(start, len(arr)):
            print(arr[start:end+1])

arr = [1, 2, 3]
generate_subarrays(arr)
`,
              },
              {
                language: "javascript",
                code: `function generateSubarrays(arr) {
    for (let start = 0; start < arr.length; start++) {
        for (let end = start; end < arr.length; end++) {
            console.log(arr.slice(start, end + 1));
        }
    }
}

const arr = [1, 2, 3];
generateSubarrays(arr);
`,
              },
            ],
          },
          {
            type: "problem",
            title: "8. Find Missing Number in an Array",
            description:
              "Given an array containing n-1 integers in the range of 1 to n with no duplicates, find the missing number.",
            codeSolutions: [
              {
                language: "c",
                code: `#include <stdio.h>

int findMissingNumber(int arr[], int n) {
    int totalSum = n * (n + 1) / 2;
    int arraySum = 0;
    for (int i = 0; i < n - 1; i++) {
        arraySum += arr[i];
    }
    return totalSum - arraySum;
}

int main() {
    int arr[] = {1, 2, 4, 5, 6};
    int n = 6; // Total numbers expected including the missing number
    int missingNumber = findMissingNumber(arr, n);
    printf("Missing number: %d", missingNumber);
    return 0;
}`,
              },
              {
                language: "java",
                code: `public class FindMissingNumber {
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5, 6};
        int n = 6; // Total numbers expected including the missing number
        int totalSum = n * (n + 1) / 2;
        int arraySum = 0;
        for (int num : arr) {
            arraySum += num;
        }
        int missingNumber = totalSum - arraySum;
        System.out.println("Missing number: " + missingNumber);
    }
}`,
              },
              {
                language: "python",
                code: `arr = [1, 2, 4, 5, 6]
n = 6  # Total numbers expected including the missing number
total_sum = n * (n + 1) // 2
array_sum = sum(arr)
missing_number = total_sum - array_sum
print("Missing number:", missing_number)`,
              },
              {
                language: "javascript",
                code: `const arr = [1, 2, 4, 5, 6];
const n = 6; // Total numbers expected including the missing number
const totalSum = (n * (n + 1)) / 2;
const arraySum = arr.reduce((acc, num) => acc + num, 0);
const missingNumber = totalSum - arraySum;
console.log("Missing number:", missingNumber);`,
              },
            ],
          },
          {
            type: "problem",
            title: "9. Merge Two Sorted Arrays",
            description:
              "Given two sorted arrays, merge them into a single sorted array.",
            codeSolutions: [
              {
                language: "c",
                code: `#include <stdio.h>

void mergeArrays(int arr1[], int n1, int arr2[], int n2, int result[]) {
    int i = 0, j = 0, k = 0;
    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            result[k++] = arr1[i++];
        } else {
            result[k++] = arr2[j++];
        }
    }
    while (i < n1) {
        result[k++] = arr1[i++];
    }
    while (j < n2) {
        result[k++] = arr2[j++];
    }
}

int main() {
    int arr1[] = {1, 3, 5};
    int arr2[] = {2, 4, 6};
    int result[6];
    mergeArrays(arr1, 3, arr2, 3, result);
    printf("Merged array: ");
    for (int i = 0; i < 6; i++) {
        printf("%d ", result[i]);
    }
    return 0;
}`,
              },
              {
                language: "java",
                code: `import java.util.*;

public class MergeSortedArrays {
    public static void main(String[] args) {
        int[] arr1 = {1, 3, 5};
        int[] arr2 = {2, 4, 6};
        int[] result = new int[arr1.length + arr2.length];

        int i = 0, j = 0, k = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                result[k++] = arr1[i++];
            } else {
                result[k++] = arr2[j++];
            }
        }
        while (i < arr1.length) {
            result[k++] = arr1[i++];
        }
        while (j < arr2.length) {
            result[k++] = arr2[j++];
        }

        System.out.println("Merged array: " + Arrays.toString(result));
    }
}`,
              },
              {
                language: "python",
                code: `arr1 = [1, 3, 5]
arr2 = [2, 4, 6]
result = []

i = j = 0
while i < len(arr1) and j < len(arr2):
    if arr1[i] < arr2[j]:
        result.append(arr1[i])
        i += 1
    else:
        result.append(arr2[j])
        j += 1

result.extend(arr1[i:])
result.extend(arr2[j:])
print("Merged array:", result)`,
              },
              {
                language: "javascript",
                code: `const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const result = [];

let i = 0, j = 0;
while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        result.push(arr1[i++]);
    } else {
        result.push(arr2[j++]);
    }
}

result.push(...arr1.slice(i));
result.push(...arr2.slice(j));
console.log("Merged array:", result);`,
              },
            ],
          },
        ],
      },
    ],
  },
];
