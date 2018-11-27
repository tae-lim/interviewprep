function findOtherProductsAtIndex (arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var counter = 1;
    for (var j = 0; j < arr.length; j++) {
      if (i !== j) {
        counter *= arr[j];
      }
    }
    result.push(counter);
  }

  return result;
}