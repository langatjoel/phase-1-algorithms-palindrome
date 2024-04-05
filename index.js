function isPalindrome(word) {
  // Write your algorithm here
  // Convert the word to lowercase to handle case insensitivity
  word = word.toLowerCase();

  // Initialize pointers for the start and end of the word
  let start = 0;
  let end = word.length - 1;

  // Loop through the word from both ends towards the middle
  while (start < end) {
    // If characters at the pointers don't match, it's not a palindrome
    if (word[start] !== word[end]) {
      return false;
    }
    // Move pointers closer to the middle
    start++;
    end--;
  }

  // If the loop completes without returning false, the word is a palindrome
  return true;
}

/* 
  Add your pseudocode here
   Pseudocode:
  isPalindrome(word):
    word = convertToLowercase(word)
    start = 0
    end = length(word) - 1

    while start < end:
        if word[start] != word[end]:
            return false
        start++
        end--

    return true

*/

/*
  Add written explanation of your solution here
    Written explanation of the solution:
  1. Convert the input word to lowercase to handle case insensitivity.
  2. Initialize two pointers, `start` and `end`, pointing to the start and end of the word, respectively.
  3. Start a loop while `start` is less than `end`.
  4. In each iteration, check if the character at `start` position is not equal to the character at `end` position.
  5. If they're not equal, return `false`, indicating that the word is not a palindrome.
  6. Move the `start` pointer one position forward and the `end` pointer one position backward.
  7. If the loop completes without returning `false`, the word is a palindrome. Return `true`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
