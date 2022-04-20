// 541. Reverse String II - Easy 60 / 60 test cases passed
// https://leetcode.com/problems/reverse-string-ii/
// String, Array
// #1
// Iterative solution
const reverseStr = (s, k) => {
    const arr = [];
    const lastInd = s.length - 1;
    let step = 0;
    let i = step * k;

    while (i < s.length) {
        const upInd = Math.min(i + k - 1, lastInd);
        if (step % 2 === 0) {
            let j = upInd;
            while (j >= i) {
                arr.push(s[j]);
                j--;
            }
        } else {
            let j = i;
            while (j <= upInd) {
                arr.push(s[j]);
                j++;
            }
        }
        step = step + 1;
        i = step * k;
    }

    return arr.join("");
};

// reverseStr("abcdefgkl", 2);