var Tree = function(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.insert = function(value) {
  this.children.push(new Tree(value));
}

Tree.prototype.contains = function(value) {
  
}

Tree.prototype.constructor = Tree;