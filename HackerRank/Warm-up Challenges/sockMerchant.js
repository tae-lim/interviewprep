function sockMerchant(n, ar) {
  var cache = {};
  var sockList;

  for (var i = 0; i < ar.length; i++) {
    if (cache[ar[i]] === undefined) {
      cache[ar[i]] = 1;
    } else {
        cache[ar[i]]++;
    }
  }

  sockList = Object.values(cache);
  for (var i = 0; i < sockList.length; i++) {
    if (sockList[i] > 1 && sockList[i] % 2 === 1) {
      sockList[i]--;
    }
    if (sockList[i] === 1) {
      sockList[i] = 0;
    }
  }


  return sockList
    .map(function(num) {
      return num / 2;
    })
    .reduce(function(acc, num) {
      return acc + num;
    }, 0);

}

function sockMerchant(n, ar) {
    var result = 0;
    ar.sort();
    for (var i = 0; i < n; i++) {
        if (ar[i] === ar[i + 1]) {
            i++;
            result++;
        }
    }
    return result;
}