var reverseList = function(head) {
    var cache = [];
    var current = head;
    var result;
    while (current) {
      cache.unshift(current.val);
      current = current.next;
    }
    result = new ListNode(cache[0]);
    for (var i = 1; i < cache.length; i++) {
      var current = result;
      while (result.next) {
        current = current.next;
      }
      current.next = new ListNode(val);
    }
    return result;
  }
  
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  ListNode.prototype.constructor = ListNode;  
  ListNode.prototype.addToTail = function(val) {
    var current = this;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(val);
  }
  
  var ok = new ListNode(1);
  ok.addToTail(2);
  ok.addToTail(3);
  ok.addToTail(4);
  ok.addToTail(5);
  
  reverseList(ok);