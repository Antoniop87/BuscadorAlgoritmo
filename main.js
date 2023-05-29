class TreeNode {
    constructor(key, data) {
      this.key = key;
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  class BinaryTree {
    constructor() {
      this.root = null;
    }

    insert(key, data) {
      const newNode = new TreeNode(key, data);

      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }

    insertNode(node, newNode) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }

    search(key) {
      return this.searchNode(this.root, key);
    }

    searchNode(node, key) {
      if (node === null) {
        return null;
      }

      if (node.key.includes(key)) {
        return node.data;
      } else if (key < node.key) {
        return this.searchNode(node.left, key);
      } else {
        return this.searchNode(node.right, key);
      }
    }
  }