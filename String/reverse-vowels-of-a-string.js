// 345. Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string/
// Tags: String, Two Pointers
const reverseVowels = (s) => {
    const sArr = s.split("");
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    let i = 0;
    let j = sArr.length - 1;
    while (i < j) {
        if (vowels.has(sArr[i]) && vowels.has(sArr[j])) {
            [sArr[i], sArr[j]] = [sArr[j], sArr[i]];
            i++;
            j--;
            continue;
        }
        if (vowels.has(sArr[i]) === false) i++;
        if (vowels.has(sArr[j]) === false) j--;
    }

    return sArr.join("");
};