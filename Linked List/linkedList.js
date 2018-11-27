var LinkedList = function() {
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.constructor = LinkedList;

LinkedList.prototype.addToTail = function (value) {
  if (!this.head) {
    this.head = new Node(value);
    this.size++;
  }
  else {
    var current = this.head;
    while (current.next) {
      current = this.head.next;
    }
    current.next = new Node(value);
    this.size++;
  }
}

var Node = function(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.removeHead = function () {
  this.head = this.head.next;
  this.size--;
}

LinkedList.prototype.insertAt = function (value, location) {
  
}

LinkedList.prototype.removeFrom = function (location) {
  
}

LinkedList.prototype.removeValue = function (value) {
  
}


var Node = function(value) {
  this.value = value;
  this.next = null;
}