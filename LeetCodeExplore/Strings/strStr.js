//Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//What should we return when needle is an empty string? This is a great question to ask during an interview.
//For the purpose of this problem, we will return 0 when needle is an empty string.

//73/74 test cases are passing except input ('aaaaaaaaaaaaa... for 10000 characters)

var strStr = function(haystack, needle) {
  var result = -1;
  var first = null;
  if (needle.length === 0) {
    return 0;
  }
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0] && first === null) {
      result = i;
      first = i;
      for (var j = 1; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          result = -1;
          first = null;
        }
      }
    }
  }
  return result;
}

//Alternative Solution
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
}