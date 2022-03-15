// 31. Next Permutation - Medium 265/265 test cases passed
// https://leetcode.com/problems/next-permutation/
const nextPermutation = (nums) => {
    let firstLessInd = null;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            firstLessInd = i;
            break;
        }
    }

    if (firstLessInd === null) return nums.sort((a, b) => a - b);

    for (let i = nums.length - 1; i > firstLessInd; i--) {
        if (nums[i] > nums[firstLessInd]) {
            [nums[firstLessInd], nums[i]] = [nums[i], nums[firstLessInd]];
            break;
        }
    }

    const reverse = (arr, start) => {
        const endInd = arr.length - 1;
        for (let i = start; i <= start + (endInd - start) / 2; i++) {
            [arr[i], arr[endInd - (i - start)]] =
                [arr[endInd - (i - start)], arr[i]];
        }
    };

    reverse(nums, firstLessInd + 1);

    return nums;
};

// console.log(nextPermutation([3, 7, 12, 8, 6, 5, 4, 1])); // [ 3, 8, 1, 4,5, 6, 7, 12 ]
// console.log(nextPermutation([1, 5, 1])); // [ 5, 1, 1 ]