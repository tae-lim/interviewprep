var findRestaurant = function(list1, list2) {
  var cache1 = {};
  var cache2 = {};
  var minIdx = list1.length + list2.length;
  var result = [];
  var temp;

  for (var i = 0; i < list1.length; i++) {
    cache1[list1[i]] = i;
  }
  
  for (var i = 0; i < list2.length; i++) {
    if (cache1[list2[i]]) {
      cache2[list2[i]] = cache1[list2[i]] + i; 
      if (minIdx > cache2[list2[i]] + i) {
        minIdx = cache2[list2[i]] + i;
      }
    }
  }

  temp = Object.keys(cache2);
  for (var i = 0; i < temp.length; i++) {
    if (temp[i] <= minIdx) {
      result.push(temp[i]);
    }
  }

  return result;

}