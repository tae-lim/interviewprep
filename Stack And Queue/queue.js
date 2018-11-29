var Queue = function() {
  this.queue = [];
}

Queue.prototype.constructor = Queue;
Queue.prototype.dequeue = function() {
  return this.queue.shift();
}
Queue.prototype.enqueue = function(val) {
  this.queue.push(val);
}
Queue.prototype.size = function() {
  return this.queue.length;
}