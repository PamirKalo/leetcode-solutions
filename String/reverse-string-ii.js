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

// # 2
// Recursive solution, surprisingly fast?!
const reverseStr2 = (s, k) => {
    if (s.length <= 2 * k) {
        const endInd = Math.min(k, s.length);
        const kPart = s.substring(0, endInd).split('').reverse().join('');
        return kPart + s.substring(endInd);
    }

    const firstPart = s.substring(0, 2 * k);
    const toEndPart = s.substring(2 * k);

    return reverseStr2(firstPart, k) + reverseStr2(toEndPart, k);
};

// console.log(reverseStr2("abcdefghijk", 2));