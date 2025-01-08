// Sum of an Array
// Write a function that takes an array of numbers and returns the sum of all the numbers.

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// using arr.reduce

function sum(arr) {
  return arr.reduce((accum, next) => {
    return accum + next;
  }, 0);
}
// sum([3, 8, 7, 9]);
console.log(sum([3, 8, 7, 9]));
// Reverse a String
// Write a function that takes a string and returns its reverse.
function revStr(str) {
  let revStr = "";
  console.log(str.length);
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
  }
  return revStr;
}

revStr("abc");
console.log(revStr("abc"));

// Count Vowels in a String
// Write a function that takes a string and returns the number of vowels in the string.
function findVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
        break;
      }
    }
  }
  return count;
}

findVowels("hello");
console.log(findVowels("hello world"));

// Check Palindrome
// Write a function that takes a string and returns true if it is a palindrome, and false otherwise.
function isPalindrome(str) {
  let revStr = "";
  let isPalindrome = false;
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
  }
  if (str === revStr) {
    isPalindrome = true;
  }
  return isPalindrome;
}

console.log(isPalindrome("bob"));
// Longest String in an Array
// Write a function that takes an array of strings and returns the longest string.

// Factorial
// Write a function that takes a number and returns its factorial.

// Count Words in a String
// Write a function that takes a string and returns the number of words in the string.

// Array Intersection
// Write a function that takes two arrays and returns a new array containing only the common elements.

// Unique Elements in an Array
// Write a function that takes an array of numbers and returns a new array with only the unique elements.

// Check Only Digits
// Write a function that takes a string and returns true if it contains only digits, and false otherwise.

// Second Smallest Number
// Write a function that takes an array of numbers and returns the second smallest number.

// Longest Word in a Sentence
// Write a function that takes a sentence and returns the longest word.

// Count Character Frequency
// Write a function that takes a string and returns how many times a specific character appears.

// Product of an Array
// Write a function that takes an array of numbers and returns the product of all the numbers.

// Check Prime Number
// Write a function that takes a number and returns true if it is prime, and false otherwise.

// Sort an Array of Strings
// Write a function that takes an array of strings and returns a new array with the strings in alphabetical order.

// Most Frequent Character
// Write a function that takes a string and returns its most frequent character.

// Array Intersection (Unique)
// Write a function that takes two arrays and returns a new array with the elements common to both, without duplicates.

// Reverse Word Order
// Write a function that takes a string and returns a new string with the words in reverse order.

// Median of an Array
// Write a function that takes an array of numbers and returns the median.

// Count Uppercase Letters
// Write a function that takes a string and returns the number of uppercase letters.

// Sum of Digits
// Write a function that takes a number and returns the sum of its digits.

// Largest Difference
// Write a function that takes an array of numbers and returns the largest difference between any two numbers.

// Count Unique Words
// Write a function that takes a sentence and returns the number of unique words.

// Shortest String in an Array
// Write a function that takes an array of strings and returns the shortest string.

// Capitalize Words
// Write a function that takes a string and returns a new string with each word capitalized.

// Check Perfect Square
// Write a function that takes a number and returns true if it is a perfect square, and false
