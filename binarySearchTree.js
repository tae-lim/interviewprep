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

//Search: O(log n)
//.contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value && this.left) {
      return this.left.contains(value);
  } else if (value > this.value && this.right) {
      return this.right.contains(value);
  } else {
      return false;
  }
};

//.depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

//Delete: O(log n)
BinarySearchTree.prototype.delete = function(value) {

}

BinarySearchTree.prototype.constructor = BinarySearchTree;