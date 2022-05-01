// 2130. Maximum Twin Sum of a Linked List
// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/ - Medium 46/46 test cases passed
// Tags: Two Pointers, Linked List
// #1
const pairSum1 = (head) => {
    let slow = head;
    let fast = head;
    const halfArr = [];

    while (fast && fast.next) {
        halfArr.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }

    let i = halfArr.length;
    let max = slow.val + halfArr[i - 1];
    while (i--) {
        const sum = slow.val + halfArr[i];
        max = Math.max(max, sum);
        slow = slow.next;
    }

    return max;
};

// #2
const pairSum2 = (head) => {
    let slow = head;
    let fast = head;
    let prev = null;
    while (fast && fast.next) {
        const temp = slow;
        slow = slow.next;
        fast = fast.next.next;
        temp.next = prev;
        prev = temp;
    }

    let max = slow.val + prev.val;
    while (slow) {
        const sum = slow.val + prev.val;
        max = Math.max(max, sum);
        slow = slow.next;
        prev = prev.next;
    }

    return max;
};