var transpose = function(A) {
  var length = A[0].length;
  var result;
  var transposeList = function(j, list) {
    if (j === length) {
      result = list;
    } else {
      var subArray = [];
      for (var i = 0; i < A.length; i++) {
        subArray.push(A[i][j]);
      }
      list.push(subArray);
      transposeList((j + 1), list);
    }
  }
  transposeList(0, []);
  return result;
};

var transpose = function(A) {
    var temp = []
    var res = []
    for(var a = 0;a < A[0].length;a++){
      temp = []
      for(var b = 0;b < A.length;b++){
        temp.push(A[b][a])
      }
         res.push(temp)
    }
  return res
};