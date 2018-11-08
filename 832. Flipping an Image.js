var flipAndInvertImage = function(A) {
    var reversedList = [];
    var result = [];
    for (var i = 0; i < A.length; i++) {
      var subList = [];
      for (var j = A[i].length - 1; j > -1; j--) {
        subList.push(A[i][j]);
      }
      reversedList.push(subList);
    }
    for (var i = 0; i < reversedList.length; i++) {
      var subList = [];
      for (var j = 0; j < reversedList[i].length; j++) {
        if (reversedList[i][j] === 0) {
          subList.push(1);
        }
        if (reversedList[i][j] === 1) {
          subList.push(0);
        }
      }
      result.push(subList);
    }
    return result;
};

var flipAndInvertImage = function(A) {
  var result = [];
  for (var i = 0; i < A.length; i++) {
    A[i] = A[i].reverse();
  }
  for (var i = 0; i < A.length; i++) {
    A[i].map(function(num) {
      num ? 0 : 1;
    })
  }
}
var flipAndInvertImage = function(A) {
  var result = [];
  for (var i = 0; i < A.length; i++) {
    A[i] = A[i].reverse();
  }
  for (var i = 0; i < A.length; i++) {
    result.push(A[i].map(function(num) {
    if (num === 0) {
    return 1;
    }
    if (num === 1) {
    return 0;
    }
    }))
  }
  return result;
}

var flipAndInvertImage = function(A) {
  return A.map(row => row.reverse().map(r => r ? 0 : 1));
};