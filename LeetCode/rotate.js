var rotate = function(nums, k) {
    var i = 0;
    while (i !== k) {
      var num = nums.pop();
      nums.unshift(num);
      i++;
    }
    return nums;
  };