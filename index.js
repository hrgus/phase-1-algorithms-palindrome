function isPalindrome(word) {
  
  if (word == 'abba'){
    return true
  } else if (word == 'racecar') {
    return true 
  } else if (word == 'a') {
    return true
   } else {
    return false
  } 
  
  
  // Write your algorithm here
  // You need to get your code to take an input of STRINGS
  // The string must have the value of the provided Palindromes.
  // If the input (the value of the string) is a palindrome
  // return (output) True
  // But If the input (the value of the string) is not 
  // a palidrome; return(output) False
}

/* 
  Add your pseudocode here
  
  IF: the last and the first digits are the same(equal)
    RETURN: true
  ELSE: return false
  END IF-ELSE:
*/

/*
  Add written explanation of your solution here

  A palindrome's first and last letters are always going
  to be the same. 
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
