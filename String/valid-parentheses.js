// 20. Valid Parentheses - Easy 91 / 91 test cases passed
// https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and
// ']', determine if the input string is valid.
// An input string is valid if:
//  1) Open brackets must be closed by the same type of brackets.
//  2) Open brackets must be closed in the correct order.

const isValid = (s) => {
    const opened = ["(", "{", "["]; // opened brackets
    const closed = [")", "}", "]"]; // closed brackets
    const stack = []; // only opened brackets

    for (let i = 0; i < s.length; i++) {
        const el = s[i];
        let ind = opened.indexOf(el);
        if (ind > -1) {
            stack.push(ind);
            continue;
        }

        ind = closed.indexOf(el);
        if (stack.pop() !== ind) return false;
    }

    if (stack.length > 0) return false;

    return true;
};