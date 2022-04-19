// 11. Container With Most Water - Medium 60 / 60 test cases passed
// https://leetcode.com/problems/container-with-most-water/
// Array, Two Pointers, Greedy
const maxArea = (height) => {
    let max = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        const area = (j - i) * Math.min(height[i], height[j]);
        max = Math.max(area, max);
        if (height[i] > height[j]) j--;
        else i++;
    }

    return max;
};
