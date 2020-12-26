var inorderTraversal = function (root) {
  if (!root) return [];

  const res = [];

  function inorder(treeNode) {
    if (!treeNode) return;

    inorder(treeNode.left);
    res.push(treeNode.val);
    inorder(treeNode.right);
  }

  inorder(root);

  return res;
};

const tree = {
  left: null,
  right: {
    left: {
      left: null,
      val: 8,
      right: null,
    },
    right: {
      left: null,
      val: 10,
      right: null,
    },
    val: 3,
  },
  val: 1,
};

const result = inorderTraversal(tree);

console.log(result);
