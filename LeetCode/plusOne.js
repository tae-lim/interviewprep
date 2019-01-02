var plusOne = function(digits) {
  for (var i = digits.length - 1; digits >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
        digits[i]++;
        return digits;
    }
  }
  return digits.unshift(1);
}

// Extra array, more space, 2O(n)
// var plusOne = function(digits) {
//     var integer = '';
//     var result = [];
//     for (var i = 0; i < digits.length; i++) {
//       var str = String(digits[i]);
//       integer += str;
//     }
//     integer = String(Number(integer) + 1);
//     for (var i = 0; i < integer.length; i++) {
//       var num = Number(integer[i]);
//       result.push(num);
//     }
//     return result;
//   };  