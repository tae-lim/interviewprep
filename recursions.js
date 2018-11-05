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