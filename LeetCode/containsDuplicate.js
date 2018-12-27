var containsDuplicate = function(nums) {
  var hashset = {};
  for (var i = 0; i < nums.length; i++) {
    if (hashset[nums[i]] === undefined) {
      hashset[nums[i]] = true;
    } else {
        return true;
    }
  }
  return false;
};