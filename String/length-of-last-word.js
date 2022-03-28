// 58. Length of Last Word. (easy) - 59 / 59 test cases passed.
// https://leetcode.com/problems/length-of-last-word/

// #1 Trivial solution
const lengthOfLastWord = (str) => {
    const arr = str.trim().split(/\s+/);

    return arr[arr.length - 1].length;
};

// console.log(lengthOfLastWord('Hello World'));
// console.log(lengthOfLastWord('  '));

// #2 A very fast solution
const lengthOfLastWord2 = (s) => {
    let i = s.length;
    let counter = 0;
    while (i--) {
        if (s[i] !== " ") {
            counter++;
        } else if (counter > 0) break;
    }
    
    return counter;
};

// console.log(lengthOfLastWord2('Hello World'));
// console.log(lengthOfLastWord2('  '));
