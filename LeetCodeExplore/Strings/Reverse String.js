var reverseString = function(s) {
  var result = '';
  for (var i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
};

var reverseString = function(s) {
  var result = '';
  var i = s.length - 1;
  while (0 <= i) {
    result += s[i];
    i--;
  }
  return result;
};