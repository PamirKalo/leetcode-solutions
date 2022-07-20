// 687. Longest Univalue Path
// https://leetcode.com/problems/longest-univalue-path/
// Medium - 71 / 71 test cases passed. Tree, Depth-First Search, Binary Tree
const longestUnivaluePath = (root) => {
    if (!root) return 0;
    let longestPath = 0;
    const toVisit = [root];

    const dfsTryMax = (node, level, maxObj) => {
        if (
            (!node.left || node.left.val !== node.val) &&
            (!node.right || node.right.val !== node.val)
        ) {
            if (level > maxObj.max) maxObj.max = level;
        }

        if (node.left && node.left.val !== node.val) toVisit.push(node.left);
        if (node.right && node.right.val !== node.val) toVisit.push(node.right);

        if (node.left && node.left.val === node.val)
            dfsTryMax(node.left, level + 1, maxObj);
        if (
            node.left &&
            node.right &&
            node.left.val === node.val &&
            node.right.val === node.val
        ) {
            toVisit.push(node);
        }
        if (node.right && node.right.val === node.val)
            dfsTryMax(node.right, level + 1, maxObj);
        return maxObj;
    };

    const path = (node) => {
        if (node.left && node.left.val !== node.val) toVisit.push(node.left);
        if (node.right && node.right.val !== node.val) toVisit.push(node.right);

        let pathLeft = 0;
        if (node.left !== null && node.left.val === node.val) {
            const res = dfsTryMax(node.left, 0, { max: 0 });
            pathLeft = res.max + 1;
        }

        let pathRight = 0;
        if (node.right !== null && node.right.val === node.val) {
            const res = dfsTryMax(node.right, 0, { max: 0 });
            pathRight = res.max + 1;
        }

        return pathLeft + pathRight;
    };

    while (toVisit.length > 0) {
        const current = toVisit.pop();
        const pathLR = path(current);

        if (pathLR > longestPath) {
            longestPath = pathLR;
        }
    }

    return longestPath;
};
