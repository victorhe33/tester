  // STRUCTY SUM LIST

const sumList = (head) => {
  let current = head;
  let result = 0;
  while (head !== null) {
    result += head.val;
    head = head.next;
  }
  return result;
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

sumList(a); // 19