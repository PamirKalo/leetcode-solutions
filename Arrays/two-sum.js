// 1. Two Sum - (Easy) 57 / 57 test cases passed
// https://leetcode.com/problems/two-sum/
// Tags: Array, Hash Table, Two Pointers
// #1
// Naive, brute force approach. Time complexity O(n2)
const twoSum = (nums, target) => {
    let indexes;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                indexes = [i, j];
            }
        }
    }

    return indexes;
};

// twoSum([2, 7, 11, 15], 9); // [ 0, 1 ]

// #2
// Sorting and using 'Two Pointers' algorithm
const twoSum2 = (nums, target) => {
    const m = nums.map((el, i) => [el, i]);
    m.sort((a, b) => a[0] - b[0]);
    let i = 0;
    let j = m.length - 1;
    let indexes = null;

    while (i < j) {
        if (m[i][0] + m[j][0] < target) i++;
        else if (m[i][0] + m[j][0] > target) j--;
        else {
            indexes = [m[i][1], m[j][1]];
            break;
        }
    }

    return indexes;
};

// twoSum2([2, 7, 11, 15], 9); // [ 0, 1 ]