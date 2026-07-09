/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if(root === null){
            return true;
        }
        const leftDepth = this.depth(root.left, 0);
        const rightDepth = this.depth(root.right, 0);
        const diff = leftDepth - rightDepth;
        if(diff > 1 || diff < -1){
            return false;
        }
        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    depth(node, currentDepth = 0){
        if(node === null){
            return currentDepth;
        }
        const rightNode = node.right;
        const leftNode = node.left;
        return Math.max(this.depth(leftNode, currentDepth + 1), this.depth(rightNode, currentDepth + 1))
    }
}