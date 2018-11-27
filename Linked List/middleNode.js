var middleNode = function(head) {
  var size = 0;
    var current = head.head;
    var index;
    var counter = 1;
    while (current) {
      size++;
      current = current.next;
    }
    if (size % 2 === 0) {
      index = size / 2 + 1;
    }
    if (size % 2 === 1) {
      index = Math.floor(size / 2 + 1);
    }
    current = head.head;
    while (current) {
      if (counter === index) {
        return current.value;
      }else {
        counter++;
        current = current.next;
      }
    } 
};