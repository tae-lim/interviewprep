//Extra memory, O(n) time
var moveZeroes = function(nums) {
  var result = [];
  var count = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    } else {
        result.push(nums[i]);
    }
  }

  while (count > 0) {
    result.push(0);
    count--;
  }

  return result;
};


//In-Place, O(n) time
var moveZeroes = function(nums) {
  var operations = 0;
  for (var i = 0; i < nums.length; i++) {
    if (operations === nums.length) {
      break;
    }
    if (nums[i] === 0) {
      var zero = nums.splice(i, 1);
      nums.push(zero);
      i--;
      operations++;
    }
  }
  return nums;
}