var findMaxConsecutiveOnes = function(nums) {
  var result = 0;
  var current = 0;
  
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current++;
    } else if (nums[i] === 0 && current > result) {
        result = current;
        current = 0;
    } else if (nums[i] === 0 && current < result) {
        current = 0;
    } else if (nums[i] === 0 && current === result) {
        current = 0;
    }
  }
  
  if (current > result) {
    result = current;
  }

  return result;
};

var findMaxConsecutiveOnes = function(nums) {
  var result = 0;
  var current = 0;
  for (var i = 0; i < nums.length; i++) {
    if (n === 0) {
      result = Math.max(result, current);
      current = 0;
    } else {
        current++;
    }
  }
  return Math.max(result, current);
}