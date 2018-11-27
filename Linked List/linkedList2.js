var LinkedList = function() {
  this.head = null
  this.tail = this.head;
  this.length = 0;
}

var Node = function(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.constructor = LinkedList;

LinkedList.prototype.addToTail = function(value) {
  if (!this.head) {
    this.head = new Node(value);
    this.length++;
  } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
      this.tail = current.next;
      this.length++;
    }  
}

LinkedList.prototype.addToHead = function(value) {
  if (!this.head) {
    this.head = new Node(value);
    this.length++;
  } else {
      var newHead = new Node(value);
      var oldHead = this.head;
      newHead.next = oldHead;
      this.head = newHead;
      this.length++;
  }
}

LinkedList.prototype.addAtIndex = function(index, value) {
  var counter = 0;
  var current = this.head;
  while (counter !== index - 1) {
    current = current.next;
    counter++;
  }
  var postInsert = current.next;
  current.next = new Node(value);
  current.next.next = postInsert;
  this.length++;
}

LinkedList.prototype.deleteAtIndex = function(index) {
  var counter = 0;
  var current = this.head;
  while (counter !== index - 1) {
    current = current.next;
  }
  current.next = current.next.next;
  this.length--;
}