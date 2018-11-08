let factorial = n => {
  let result = 1;
  if (n > 0) {
    result *= n;
    result *= factorial(n - 1);
  }
  else {
    return result * 1;
  }
  return result;
}

//1. write if blocks
  //must be two cases
  //recursive case
    //situation when the function needs to call itself
  //base case
    //situation when the function needs to stop
  //have the first line of code be the basecase
//2. handle simplest case
  //simplest = no recursive call needed
//3. write the recursive call
//4. as

//1. write "if".
// there must be at least 2 cases
// recursive case (where the function calls itself)
// base case (where the method does not)
//2. handle the simplest case (base case)
// simplest = no recursive call needed
//3. write the recursive call
// On the next simpler input/state
//4. assume the recursive call works
// ask yourself
// what does it do?
// how does it help?



let factorial = n => {
  let result = 1;
  if (n === 1) {
    return result * 1;
  }
  else {
    result *= n;
    result *= factorial(n - 1);
  }
  return result;
}