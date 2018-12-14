var twoSum = function(nums, target) {
    var i = 0;
    var j = nums.length - 1;
  
    while(nums[i] + nums[j] !== target) {
      if (i === j - 1) {
        i++;
        j = nums.length - 1;
      } else {
          j--;
      }
    }
  
    return [i, j];
  };

var twoSum = function(nums, target) {
  var cache = {};
  for (var i = 0; i < nums.length - 1; i++) {
    if (cache[nums[i]]) {
      return [cache[nums[i]] - 1, i];
      
    } else {
      cache[target - nums[i]] = i + 1;
    }
  }
}