// 443. String Compression
// https://leetcode.com/problems/string-compression/ - Medium 72 / 72 test cases passed.
// Tags: String, Two Pointers
// # 1
const compress = (chars) => {
    let i = 0;
    let j = 1;
    let counter = 1;
    while (j <= chars.length) {
        if (chars[i] === chars[j]) counter++;
        else if (counter > 1) {
            const str = counter.toString();
            for (let k = 0; k < str.length; k++) {
                i++;
                chars[i] = str[k];
            }
            i++;
            chars.splice(i, j - i);
            j = i;
            counter = 1;
        } else i++;
        j++;
    }

    console.log(chars);
    return chars.length;
};

compress([
    "a",
    "a",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "s",
    "s",
    "s",
]);
// [ 'a', '2', 'b', '9', 's', '3' ]
