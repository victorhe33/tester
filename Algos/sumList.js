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

// const a = new Node(2);
// const b = new Node(8);
// const c = new Node(3);
// const d = new Node(-1);
// const e = new Node(7);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

// sumList(a); // 19


/**
* LinkedList costructor
*
* construct a new linked list
* you may modify this constructor as needed to achieve the challenges below
*/

// LinkedList constructor
class LinkedList {
  constructor() {
    this.head = null;
  }
}





// function LinkedList() {
//   this.head = null;     
// }

/**
*
* constructor for node in linked list
*/

// Node Constructor
// function Node(val) {
//   this.val = val;
//   this.next = null;
// }

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


LinkedList.prototype.push = () => {};



const ExampleLL = new LinkedList();
ExampleLL.head = new Node(1);
ExampleLL.head.next = new Node(2);
ExampleLL.head.next.next = new Node(3);

console.log(ExampleLL)

const Example2LL = new LinkedList();
Example2LL.push(1);
Example2LL.push(2);
Example2LL.push(3);



let current = Example2LL.head
while(current) {
  const value = current.val
  current = current.next;
}



const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

a.next = b;
b.next = c;

// 1 -> 2 -> 3

sumList(a); // 6



// LinkedList {
//   this.head = Node {
//     val: 1 next: Node {
//       val: 2 next: Node {
//         val: 3 next: null
//       }
//     }
//   }
// }


// Node { 
//   val: 1 next: Node { 
//     val: 2 next: Node { 
//       val: 3 next: null 
//     }
//   }
// }

/**
* add - Adds given value to the beginning of the linked list.
*
* @param {string|number|boolean} val - value to be stored in linked list
* @return {number} The new length of the linked list
*/
LinkedList.prototype.add = function (val) {
  //edge case: if no args passed.
  if (val === undefined) return;
  //create new node, start curr node at head
  const node = new Node(val);
  let currNode = this.head;

  //account for head = null; make the head the new node, increment length and return it;
  if (!this.head) {
    this.head = node;
    return ++this.length;
  }

  //traverse linked list.
  while (currNode) {
    //when .next is null, reassign next to new node. Increment length and return it;
    if (currNode.next === null) {
      currNode.next = node;
      return ++this.length;
    }
    //reassign curr node to next node in list.
    currNode = currNode.next;
  }
};

//TESTS
const linked = new LinkedList;
// console.log(linked.add(1));
// console.log(linked.add(2));
// linked.add(3);
// linked.add(1);
// linked.add(1);
// console.log(linked);

/**
* remove - find and delete the first occurrence of a value
*
* - If an item with the corresponding value does not exist, return undefined
*
* @param {string|number|boolean} val - value to be found and deleted from linked list
* @return {string|number|boolean} The value deleted from the linked list
*/
LinkedList.prototype.delete = function (val) {
  //edge case: if no args passed.
  if (val === undefined) return;
  //account for the value is at head;
  if (this.head.val === val) {
    //reassign head to next node and dec length; return val;
    this.head = this.head.next;
    this.length--;
    return val;
  }

  //assign head to a var;
  let node = this.head;

  //traverse linked list;
  while (node) {
    //if the value of the next node is value...
    if (node.next.val === val) {
      //assign the curr node's next to the next next node; dec length; return val;
      node.next = node.next.next;
      this.length--;
      return val;
    }
    //reassign node to node.next to traverse.
    node = node.next;
  }
};

//TESTS
// console.log(linked.delete(1));
// console.log(linked.delete(2));
// console.log(linked.delete(3));
// console.log(linked);

/**
* count - Returns the number of times a given value appears in the linked list
*
* @param {string|number|boolean} val - value to find in linked list
* @return {number} The number of times that value appears in the list
*/
LinkedList.prototype.count = function (val) {
  //edge case: if no args passed.
  if (val === undefined) return;
  //init count var; assign value of 0;
  let count = 0;
  //init node var; assign value to this.head;
  let node = this.head;

  //traverse LL via while loop;
  while (node) {
    //if curr node value is the target value, increment count;
    if (node.val === val) {
      count++;
    }
    //advance curr node with node reassignment;
    node = node.next;
  }
  //return the count;
  return count;
};

//TESTS
// console.log(linked.count(1));
// console.log(linked.count(0));

// Do not remove!!
// module.exports = { LinkedList, Node };
