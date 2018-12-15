var firstUniqChar = function(s) {
    var unique = {};
    debugger;
    for (var i = 0; i < s.length; i++) {
      var char = s[i];
      if (unique[char] === undefined) {
        unique[char] = true;
      } else {
          unique[char] = false;
      }
    }
    for (var i = 0; i < s.length; i++) {
      var char = s[i];
      if (unique[char]) {
        return i;
      }
    }
    return -1;
  };