// Given an array of integers, return a new array such that each element at index i of the new array 
// is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

var productOfOtherIndices = function(arr) {
    var i = 0;
    var j = 1;
    var product = 1;
    var result = [];
    if (arr.length === 1) {
      return [0];
    }
    while (i < arr.length) {
      if (j === arr.length) {
        result.push(product);
        j = 0;
        i++
        product = 1;
      } 
      if (i === j) {
          j++;
      }
      if (j < arr.length) {
        product *= arr[j];
        j++;
      }
    }
  
    return result;
  }
