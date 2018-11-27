var twoSum = function(numbers, target) {
    var result = [];
    for (var i = 0; i < numbers.length; i++) {
      for (var j = 0; j < numbers.length; j++) {
        if (i !== j && numbers[i] + numbers[j] === target) {
          result.push(i + 1, j + 1);
        }
      }
    }
    return result;
  };

var twoSum = function(numbers, target) {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return true;
      }
      if (numbers[i] + numbers[j] > target) {
        break;
      }
    }
  }
  return false;
}

var twoSum = function(numbers, target) {
  var i = 0;
  var j = numbers.length - 1;

  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1];
    } else if (numbers[i] + numbers[j] > target) {
      j--;
    } else if (numbers[i] + numbers[j] < target) {
      i++;
    }
  } 
}