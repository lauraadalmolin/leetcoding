const addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode();
  let curr = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    sum = sum % 10;

    curr.next = new ListNode(sum);
    curr = curr.next;
  }

  return dummyHead.next;
};
