//Memoization: caching the value that a function returns
  //use cases: factorial, 
  //calculate factorial(35)
  //factorial(36) is cached value of factorial(35) * 36.

//Task 1: Write a function, times10, that takes an argument and multiplies n times 10
const times10 = n => n * 10;

//Task 2: Use an object to cache the results of your times10 function.
let cache = {};
const memoTimes10 = n => {
  if (cache[n]) {
    return cache[n];
  }
  else {
    cache[n] = n * 10;
    return cache[n];
  }
}

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

//cache becomes private... similar idea to making encapsulation work with OOP?
const memoizedClosureTimes10 = n => {
  let cache = {};
  return n => {
    if (cache[n]) {
      return cache[n];
    } else {
      cache[n] = n * 10;
      return cache[n];
    }
  }
};

const memoClosureTimes10 = memoizedClosureTimes10();
try {
console.log('Task 3 calculated value:', memoClosureTimes10(9));	// calculated
console.log('Task 3 cached value:', memoClosureTimes10(9));	// cached
} catch(e) {
console.error('Task 3:', e);
}