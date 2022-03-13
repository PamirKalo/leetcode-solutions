/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 1302. Deepest Leaves Sum
// https://leetcode.com/problems/deepest-leaves-sum/
const deepestLeavesSum = (root) => {
    let maxLevel = 0;
    let sum = 0;
    const dfsTry = (node, level) => {
        if (node === null) return;
        if (node.left === null && node.right === null) {
            if (maxLevel < level) {
                maxLevel = level;
                sum = node.val;
            } else if (maxLevel === level) sum += node.val;
            return;
        }

        dfsTry(node.left, level + 1);
        dfsTry(node.right, level + 1);
    };

    dfsTry(root, 0);

    return sum;
};
