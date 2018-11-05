const isUnique = arr => {
  var result = true;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i !== j && arr[j] === arr[i]) {
        result = false;
      }
    }
  }
  return result;
}
  
const isUnique = arr => {
  let storage = {};
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    if (storage[arr[i]]) {
      result = false;
    }
    else {
      storage[arr[i]] = true;
    }
  }
  return result;
}

//returns a array of strings that are numbers...
let uniqSort = arr => {
  let cache = {};
  for (let i = 0; i < arr.length; i++) {
    cache[arr[i]] = true;
  }
  return Object.keys(cache).sort((a, b) => {
    return a - b;
  })
}
  
  //better solution
let uniqSort = arr => {
  let cache = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!cache[arr[i]]) {
      result.push(arr[i]);
      cache[arr[i]] = true;
    }
  }
  return result.sort((a, b) => a - b);
}
  
  