var preorderTraversal = function(root) {
    var result = [];
  
    if (root === null) {
      return result;
    }

    result.push(root.val);
    result = result.concat(preorderTraversal(root.left));
    result = result.concat(preorderTraversal(root.right));
   
    return result;
  };