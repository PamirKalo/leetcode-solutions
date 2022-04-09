// 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
// Medium - 56 / 56 test cases passed. Depth-First Search, Binary Tree

var getTargetCopy = function (original, cloned, target) {
    const val = target.val;
    let res = null;

    const dfsTry = (node)=>{
        if(node === null) return;
        if(node.val === val) {
            res = node;
            return;
        }
        dfsTry(node.left);
        dfsTry(node.right);
    }
    dfsTry(cloned);
    
    return res;
};
