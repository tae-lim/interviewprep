function isValid(s) {
    var charCount = {};
    var countCount = {};
    var characters;
    for (var i = 0; i < s.length; i++) {
      if (charCount[s[i]] === undefined) {
        charCount[s[i]] = 1;
      } else {
          charCount[s[i]]++;
      }
    }
    characters = Object.values(charCount);
    for (var i = 0; i < characters.length; i++) {
      if (countCount[characters[i]] === undefined) {
        countCount[characters[i]] = 1;
      } else {
          countCount[characters[i]]++;
      }
    }
    return countCount;
  }
  
  isValid('aabbccddeeffghi')