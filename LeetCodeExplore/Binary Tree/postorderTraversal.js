var postorderTraversal = function(root) {
    var result = [];
    
    if (root === null) {
        return result;
    }
    
    result = result.concat(postorderTraversal(root.left));
    result = result.concat(postorderTraversal(root.right));
    result.push(root.val);
    
    return result;
};