function makeAnagram(a, b) {
  var aCount = {};
  var result = 0;
  for (var i = 0; i < a.length; i++) {
    if (aCount[a[i]] === undefined) {
      aCount[a[i]] = 1;
    } else {
        aCount[a[i]]++;
    }
  }
  for (var i = 0; i < b.length; i++) {
    if (aCount[b[i]] > 0) {
      aCount[b[i]]--;
    } else if (aCount[b[i]] === 0 || aCount[b[i]] === undefined) {
        result++;
    } 
  }
  return Object.values(aCount)
    .reduce(function(acc, num) {
      return acc + num;
    }, result);
}