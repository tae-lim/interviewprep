var removeNthFromEnd = function(head, n) {
    var length = 0;
    var current = head;
    var nodeToDelete;
    while (current) {
        length++;
        current = current.next;
    }
    nodeBeforeDeletion = length - n; 
    current = head;
    length = 0;
    if (nodeBeforeDeletion === 0) {
        if (current.next) {
          head = current.next;
          return head;
        } else {
            return null;
        }
    }
    while (current) {
        length++;
        if (length === nodeBeforeDeletion) {
          current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var list1 = new ListNode(1)
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);

removeNthFromEnd(list1, 0);