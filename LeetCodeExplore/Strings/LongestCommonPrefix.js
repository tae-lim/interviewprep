// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

//ex1. 
//Input: ["flower","flow","flight"]
//Output: "fl"

//ex2.
//Input: ["dog","racecar","car"]
//Output: ""
//Explanation: There is no common prefix among the input strings.

//All given inputs are in lowercase letters a-z.

//edge cases:
//what happens when there's an empty string in the array?
//what happens when the array is empty?

var longestCommonPrefix = function(strs) {
  var commonPrefix = '';
  var progress = true;
  var lengths = {};
  var max;

  for (var i = 0; i < strs.length; i++) {
    lengths[strs[i].length] = strs[i];
  }
  var numbers = Object.keys(lengths).map(function(str) {
    return Number(str);
  })
  console.log('numbers', numbers);
  console.log('Math.max(x)', Math.max(...numbers));

  console.log('lengths[x]', lengths[Math.max(...numbers)]);

  max = lengths[Math.max(...numbers)];
  
  for (var i = 0; i < max.length; i++) {
    for (var j = 0; j < strs.length; j++) {
      if (strs[j][i] === max[i] && j === strs.length - 1 && progress) {
        commonPrefix += strs[j][i];
      }
      if (strs[j][i] !== max[i]) {
        progress = false;
      }
      if (!progress) {
        return commonPrefix;
      }
    }
  }

};