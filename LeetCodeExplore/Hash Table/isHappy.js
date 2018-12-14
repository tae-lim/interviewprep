var isHappy = function(n) {
    var cache = {};
    while(n !== 1 && !cache[n]) {
      cache[n] = true;
      n = sumOfSquares(n);
    }
    return n === 1 ? true : false;
  }
  
  function sumOfSquares(num) {
    return num.toString().split('').reduce(function(sum, num){
      return sum + Math.pow(num, 2);
    }, 0);
  }