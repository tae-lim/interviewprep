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