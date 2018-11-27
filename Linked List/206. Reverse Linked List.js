var reverseList = function(head) {
    var cache = [];
    var current = head;
    var result;
    if (!head.val) {
      return [];
    }
    while (current) {
      cache.unshift(current.val);
      current = current.next;
    }
    for (var i = 0; i < cache.length; i++) {
      if (i === 0) {
        result = new ListNode(cache[i]);
      } else {
        var current = result;
        while (current.next) {
          current = current.next;
        }
        current.next = new ListNode(cache[i]);
      }
    }
    return result;
  }
  
  reverseList(ok);