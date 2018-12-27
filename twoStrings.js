//Write a function that takes two strings, s1 and s2 and returns the longest common subsequence of s1 and s2.



var longestSubsequence = function(s1, s2) {
  var i = 0;
  var j = 0;
  var result = '';

  while (i < s1.length || j < s2.length) {


    if (s1[i] === s2[j]) {
      result += s1[i];
      i++;
      j++;
    }

    if (j === s2.length - 1) {
      i++;
    }

    if (i === s1.length - 1) {
      i++;
      j++;
    }
  }

  return result;
}