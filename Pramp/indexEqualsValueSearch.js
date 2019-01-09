function indexEqualsValueSearch(arr) {
    // your code goes here
    
    var start = 0;
    var end = arr.length - 1;
    var midpoint = Math.floor((start + end) / 2);
    
    if (arr.length === 0) {
      return -1;
    }
    
    while (start >= end) {
      if (midpoint === arr[midpoint]) {
        return midpoint;
      }
      if (midpoint > arr[midpoint]) {
        start = midpoint;
        midpoint = Math.floor((start + end) / 2);
      }
      if (midpoint < arr[midpoint]) {
        end = midpoint;
        midpoint = Math.floor((start + end) / 2);
      }
    }
    
    return -1;
  }