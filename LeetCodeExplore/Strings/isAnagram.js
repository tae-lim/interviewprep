var isAnagram = function(s, t) {
    var cache = {};
    if (s.length !== t.length) {
      return false;
    }
    for (var i = 0; i < s.length; i++) {
      var char = s[i];
      if (cache[char] === undefined) {
        cache[char] = 1;
      } else {
          cache[char]++;
      }
    }
    for (var i = 0; i < t.length; i++) {
      var char = t[i];
      if (cache[char]) {
        cache[char]--;
      } else {
          return false;
      }
    }
    return true;
  };