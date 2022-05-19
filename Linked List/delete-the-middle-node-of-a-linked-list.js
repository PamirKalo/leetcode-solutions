// 2095. Delete the Middle Node of a Linked List
// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
// Tags: Linked List, Two Pointers

const deleteMiddle = (head) => {
    if (head.next === null) return null;
    let slow = head;
    let prev = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = slow.next;

    return head;
};
