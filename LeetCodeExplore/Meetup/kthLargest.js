//Input: [3,2,1,5,6,4] and k = 2
//Output: 5

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4

//[ 6, 5, 5, 4, 3, 3, 2, 2, 1] 

var kthLargestElement = function(arr, k) {
  var sortedList = arr.sort(function(a, b) {
    return b - a;
  });
  return sortedList[k - 1];
}

var isValidString = function(str) {
  var cache = [];
  var checkPairs = function(i) {
    
  }
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      checkPairs(i)
    }
  }
}



// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
// Example 1:
// Input: "()"
// Output: true


// Example 2:
// Input: "()[]{}"
// Output: true

// Example 3:
// Input: "(]"
// Output: false

// Example 4:
// Input: "([)]"
// Output: false

// Example 5:
// Input: "{[]}"
// Output: true
