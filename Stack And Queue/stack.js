var Stack = function () {
  this.stack = [];
}

Stack.prototype.constructor = Stack;
Stack.prototype.push = function(value) {
  this.stack.push(value);
}
Stack.prototype.pop = function() {
  return this.stack.pop();
}
Stack.prototype.size = function() {
  return this.stack.length;
}