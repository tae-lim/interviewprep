var hammingDistance = function(str1, str2) {
    var counter = 0;
  
    if (typeof str1 !== 'string' && typeof str2 !== 'string') {
      str1 = String(str1);
      str2 = String(str2);
    }
    
    for (var i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        counter++;
      }
    }
    return counter;
  }