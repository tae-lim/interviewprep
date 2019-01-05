//A .left property, a binary search tree (BST) where all values are lower than the current value.
//A .right property, a BST where all values are higher than the current value.
var BinarySearchTree = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
  
//Insert: O(log n)
//.insert() method, which accepts a value and places it in the tree in the correct position.
BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  }
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.levelOrderPrint = function() {
  var queue = [];
  var result = [];

  queue.push(this);

  while(queue.length > 0) {
    var current = queue[0];
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
    result.push(queue.shift().value);
  }

  return result;
}


const levelOrder = root => {
    let res = [];
    levelRecursion(root, res, 0);
    return res;
  };
  
  const levelRecursion = (node, res, level) => {
    if (node === null) return;
  
    if (res.length < level + 1) {
      res.push([]);
    }
  
    levelRecursion(node.left, res, level + 1);
    levelRecursion(node.right, res, level + 1);
  
    res[level].push(node.val);
  };