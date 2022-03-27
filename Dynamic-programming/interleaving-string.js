// 97. Interleaving String - 101 / 101 test cases passed.
// https://leetcode.com/problems/interleaving-string/ - Medium
// Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
// Intersting task :)
const isInterleave = (s1, s2, s3) => {
    if (s1.length + s2.length !== s3.length) return false;

    const s1s2Arr = [...s1.split(""), ...s2.split("")].sort();
    const s3Arr = s3.split("").sort();
    for (let i = 0; i < s1s2Arr.length; i++) {
        if (s1s2Arr[i] !== s3Arr[i]) return false;
    }

    let i = 0;
    let j = 0;
    let k = 0;
    const branchArr = [];

    while (i < s3.length) {
        if (s1[j] === s3[i] && s2[k] === s3[i]) {
            branchArr.push([i, j, k]);
            j++;
        } else if (s1[j] === s3[i]) {
            j++;
        } else if (s2[k] === s3[i]) {
            k++;
        } else if (branchArr.length > 0) {
            [i, j, k] = branchArr.pop();
            k++;
        } else return false;
        i++;
    }

    return true;
};