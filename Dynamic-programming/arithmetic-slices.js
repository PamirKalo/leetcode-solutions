// 413. Arithmetic Slices - 15 / 15 test cases passed.
// https://leetcode.com/problems/arithmetic-slices/ - medium - 24/march/2020

const numberOfArithmeticSlices = (A) => {
    if (A.length < 3) return 0;
    let step = A[1] - A[0];
    let count = 0;
    let sum = 0;

    for (let i = 1; i < A.length - 1; i++) {
        if (A[i + 1] - A[i] === step) {
            count++;
            sum += count;
        } else {
            count = 0;
            step = A[i + 1] - A[i];
        }
    }

    return sum;
};
