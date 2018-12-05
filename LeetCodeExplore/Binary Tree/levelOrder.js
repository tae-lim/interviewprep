var levelOrder = function(root) {
    let queue = [];
    let result = [];
    if (root) {
      queue.push(root);
    }
    while (queue.length > 0) {
      let size = queue.length;
      let current = [];
      for (let i = 0; i < size; i++) {
        let head = queue.shift();
        current.push(head.val);
        if (head.left) {
          queue.push(head.left);
        }
        if (head.right) {
          queue.push(head.right);
        }
      }
      result.push(current);
    }
    return result;
  };