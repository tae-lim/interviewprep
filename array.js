/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var result = -1;
      
    var fwdObj = {};
    var bwdObj = {};
      
    var fwdCounter = 0;
    var bwdCounter = 0;
  
    for (var i = 0; i < nums.length - 1; i++) {
      fwdCounter += nums[i];
      fwdObj[i + 1] = fwdCounter;
      
    } 
    for (var i = nums.length - 1; i > 0; i--) {
      bwdCounter += nums[i];
      fwdObj[i - 1] = bwdCounter;
    }
  };