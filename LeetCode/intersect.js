var intersect = function(nums1, nums2) {
    var cache = {};
    var result = [];
    for (var i = 0; i < nums1.length; i++) {
      if (cache[nums1[i]] === undefined) {
        cache[nums1[i]] = 1;
      } else {
          cache[nums1[i]]++;
      }
    }
    for (var i = 0; i < nums2.length; i++) {
      if (cache[nums2[i]]) {
        result.push(nums2[i]);
        cache[nums2[i]]--;
      }
    }
    return result;
  };