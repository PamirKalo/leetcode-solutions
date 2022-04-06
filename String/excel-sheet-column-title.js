// 168. Excel Sheet Column Title - Easy 18 / 18 test cases passed.
// https://leetcode.com/problems/excel-sheet-column-title/

const convertToTitle = (n) => {
    let num = n;
    const arr = [];
    while (num > 26) {
        const remainder = num % 26 || 26;
        arr.push(String.fromCharCode(64 + remainder));
        num = (num - remainder) / 26;
    }

    arr.push(String.fromCharCode(64 + num));
    const result = arr.reverse().join("");

    return result;
};

// convertToTitle(3745);