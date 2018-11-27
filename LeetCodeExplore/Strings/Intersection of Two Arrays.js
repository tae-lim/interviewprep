var intersection = function(nums1, nums2) {
    var result = [];
    var obj1 = {};
    var obj2 = {};
    var arr1;
    var arr2;
  
    for (var i = 0; i < nums1.length; i++) {
      if (!obj1[nums1[i]]) {
        obj1[nums1[i]] = true;
      }
    }
  
    for (var i = 0; i < nums2.length; i++) {
      if (!obj2[nums2[i]]) {
        obj2[nums2[i]] = true;
      }
    }
  
    arr1 = Object.keys(obj1);
    arr2 = Object.keys(obj2);

    if (arr1.length > arr2.length || arr1.length === arr2.length) {
      for (var i = 0; i < arr2.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
          if (arr1[j] === arr2[i]) {
            result.push(arr1[j]);
          }
        }
      }
    }
  
    if (arr1.length < arr2.length) {
      for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
          if (arr2[j] === arr1[i]) {
            result.push(arr2[j]);
          }
        }
      }
    }
  
    return result;
  }

var intersection = function(nums1, nums2) {
    var result = [];
    nums1.forEach(function (num1, ind1) {
        nums2.forEach(function (num2, ind2) {
            if (num1 === num2 && !result.includes(num1)) {
                result.push(num1);
            }
        });
    });
    return result;
  };


//this isn't working... why??
var intersection = function(nums1, nums2) {
  var result = [];
  for (var i = 0; i < nums1.length; i++) {
    for (var j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[i] && !result.includes(nums1[i])) {
        result.push(nums1[i]);
      }
    }
  } 
  return result;
}
