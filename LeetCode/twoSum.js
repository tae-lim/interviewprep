var twoSum = function(nums, target) {
  var cache = {};
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    //if statement may not be needed
    if (cache[num] === undefined) {
      cache[target - num] = target - num;
    }
  }

  for (var i = 0; i < nums.lenght; i++) {
    var num = nums[i];
    if (cache[num] === num) {
      result.push(i);
    }
  }

  return result;
}