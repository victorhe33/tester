const stacks = {
  1: ["V", "C", "D", "R", "Z", "G", "B", "W"],
  2: ["G", "W", "F", "C", "B", "S", "T", "V"],
  3: ["C", "B", "S", "N", "W"],
  4: ["Q", "G", "M", "N", "J", "V", "C", "P"],
  5: ["T", "S", "L", "F", "D", "H", "B"],
  6: ["J", "V", "T", "W", "M", "N"],
  7: ["P", "F", "L", "C", "S", "T", "G"],
  8: ["B", "D", "Z"],
  9: ["M", "N", "Z", "W"]
}

// console.log(Object.values(stacks).reduce((p, c) => (Array.isArray(p) ? p.length : p) + c.length))

// console.log(stacks);

const moves = `
move 2 from 8 to 4
move 2 from 7 to 3
move 2 from 9 to 2
move 4 from 1 to 9
move 1 from 7 to 8
move 1 from 9 to 6
move 6 from 6 to 1
move 6 from 1 to 6
move 2 from 7 to 1
move 9 from 4 to 1
move 6 from 2 to 7
move 5 from 9 to 7
move 7 from 3 to 7
move 19 from 7 to 9
move 1 from 7 to 1
move 3 from 6 to 8
move 4 from 5 to 6
move 1 from 4 to 1
move 2 from 5 to 2
move 8 from 9 to 7
move 1 from 5 to 1
move 3 from 9 to 4
move 1 from 4 to 9
move 2 from 4 to 7
move 1 from 7 to 6
move 3 from 8 to 9
move 17 from 1 to 7
move 21 from 7 to 3
move 4 from 6 to 2
move 1 from 7 to 2
move 8 from 9 to 2
move 2 from 8 to 3
move 1 from 1 to 7
move 2 from 7 to 9
move 1 from 6 to 1
move 1 from 7 to 4
move 1 from 1 to 2
move 4 from 6 to 1
move 1 from 9 to 2
move 1 from 7 to 9
move 1 from 4 to 1
move 7 from 3 to 7
move 6 from 2 to 8
move 3 from 3 to 4
move 1 from 8 to 4
move 12 from 2 to 8
move 2 from 9 to 2
move 12 from 3 to 2
move 12 from 8 to 6
move 3 from 4 to 2
move 19 from 2 to 8
move 4 from 1 to 9
move 1 from 3 to 8
move 1 from 4 to 6
move 1 from 2 to 4
move 1 from 6 to 3
move 8 from 9 to 6
move 1 from 4 to 9
move 1 from 3 to 1
move 1 from 9 to 5
move 11 from 6 to 3
move 5 from 8 to 6
move 14 from 6 to 9
move 2 from 1 to 4
move 3 from 8 to 1
move 8 from 8 to 4
move 3 from 3 to 4
move 8 from 3 to 1
move 9 from 8 to 2
move 12 from 4 to 2
move 12 from 9 to 3
move 9 from 3 to 4
move 1 from 5 to 3
move 7 from 7 to 1
move 2 from 9 to 1
move 2 from 4 to 6
move 16 from 2 to 6
move 1 from 2 to 8
move 10 from 1 to 4
move 1 from 8 to 2
move 4 from 1 to 6
move 15 from 4 to 8
move 1 from 4 to 2
move 2 from 6 to 8
move 5 from 2 to 8
move 21 from 8 to 3
move 6 from 1 to 3
move 15 from 6 to 1
move 1 from 2 to 1
move 1 from 8 to 9
move 15 from 1 to 3
move 7 from 3 to 8
move 1 from 7 to 9
move 2 from 9 to 8
move 2 from 3 to 7
move 4 from 6 to 1
move 2 from 7 to 8
move 1 from 6 to 2
move 4 from 8 to 3
move 2 from 4 to 8
move 1 from 2 to 1
move 4 from 1 to 5
move 3 from 5 to 8
move 1 from 5 to 1
move 12 from 8 to 3
move 3 from 1 to 2
move 17 from 3 to 5
move 2 from 5 to 3
move 15 from 5 to 1
move 1 from 1 to 4
move 17 from 3 to 2
move 5 from 2 to 8
move 17 from 3 to 6
move 6 from 1 to 3
move 5 from 1 to 6
move 4 from 8 to 9
move 10 from 3 to 8
move 7 from 2 to 9
move 2 from 6 to 3
move 2 from 2 to 8
move 1 from 1 to 4
move 17 from 6 to 9
move 13 from 8 to 2
move 2 from 4 to 1
move 1 from 6 to 7
move 2 from 2 to 4
move 8 from 2 to 7
move 1 from 6 to 1
move 4 from 7 to 9
move 1 from 4 to 7
move 1 from 4 to 6
move 1 from 1 to 7
move 5 from 2 to 4
move 2 from 3 to 8
move 6 from 7 to 1
move 1 from 7 to 4
move 11 from 9 to 7
move 1 from 8 to 4
move 8 from 1 to 2
move 1 from 1 to 4
move 1 from 1 to 9
move 1 from 6 to 1
move 1 from 8 to 4
move 6 from 2 to 3
move 1 from 1 to 3
move 1 from 6 to 7
move 1 from 4 to 6
move 6 from 2 to 5
move 7 from 3 to 4
move 2 from 7 to 6
move 2 from 7 to 3
move 8 from 7 to 5
move 3 from 6 to 7
move 1 from 5 to 7
move 1 from 7 to 5
move 13 from 9 to 3
move 1 from 3 to 8
move 8 from 4 to 3
move 3 from 5 to 1
move 7 from 4 to 1
move 5 from 1 to 4
move 3 from 1 to 4
move 2 from 1 to 8
move 2 from 7 to 5
move 2 from 8 to 9
move 1 from 7 to 6
move 1 from 8 to 7
move 4 from 5 to 1
move 1 from 7 to 2
move 2 from 1 to 8
move 1 from 2 to 1
move 5 from 9 to 7
move 3 from 9 to 4
move 8 from 4 to 8
move 6 from 8 to 5
move 11 from 5 to 1
move 3 from 4 to 2
move 9 from 3 to 7
move 6 from 7 to 2
move 13 from 3 to 2
move 3 from 8 to 1
move 2 from 2 to 8
move 1 from 6 to 7
move 3 from 8 to 4
move 9 from 1 to 5
move 5 from 5 to 8
move 2 from 8 to 4
move 3 from 9 to 4
move 2 from 8 to 2
move 8 from 1 to 5
move 8 from 7 to 9
move 1 from 8 to 3
move 15 from 5 to 9
move 6 from 4 to 1
move 1 from 7 to 2
move 4 from 2 to 1
move 1 from 3 to 4
move 5 from 1 to 7
move 3 from 7 to 3
move 14 from 9 to 8
move 1 from 4 to 8
move 1 from 7 to 6
move 2 from 4 to 5
move 4 from 1 to 5
move 1 from 6 to 5
move 4 from 9 to 3
move 5 from 3 to 7
move 4 from 5 to 9
move 1 from 3 to 7
move 1 from 3 to 2
move 4 from 5 to 2
move 4 from 7 to 5
move 4 from 2 to 1
move 1 from 5 to 4
move 7 from 9 to 7
move 1 from 4 to 2
move 1 from 5 to 8
move 21 from 2 to 4
move 1 from 9 to 8
move 1 from 9 to 4
move 3 from 4 to 1
move 7 from 1 to 6
move 1 from 5 to 1
move 18 from 4 to 7
move 1 from 5 to 8
move 27 from 7 to 8
move 1 from 7 to 3
move 1 from 3 to 7
move 1 from 7 to 2
move 1 from 2 to 1
move 42 from 8 to 9
move 1 from 8 to 7
move 1 from 8 to 2
move 1 from 4 to 6
move 1 from 2 to 9
move 2 from 1 to 2
move 1 from 7 to 3
move 7 from 6 to 4
move 4 from 9 to 6
move 1 from 3 to 2
move 1 from 2 to 7
move 2 from 2 to 5
move 1 from 8 to 4
move 1 from 9 to 3
move 5 from 4 to 7
move 1 from 5 to 6
move 1 from 5 to 9
move 1 from 6 to 3
move 1 from 7 to 5
move 2 from 3 to 2
move 22 from 9 to 7
move 2 from 2 to 3
move 18 from 7 to 9
move 1 from 4 to 9
move 1 from 1 to 4
move 4 from 7 to 3
move 4 from 3 to 2
move 3 from 4 to 5
move 1 from 2 to 4
move 5 from 6 to 9
move 1 from 5 to 3
move 1 from 4 to 7
move 2 from 5 to 1
move 3 from 2 to 4
move 1 from 5 to 6
move 2 from 7 to 9
move 1 from 6 to 8
move 2 from 3 to 2
move 2 from 4 to 7
move 1 from 8 to 7
move 1 from 4 to 6
move 35 from 9 to 7
move 13 from 7 to 3
move 1 from 2 to 7
move 1 from 2 to 5
move 1 from 5 to 8
move 1 from 8 to 5
move 8 from 7 to 3
move 1 from 6 to 4
move 6 from 3 to 9
move 1 from 1 to 9
move 1 from 4 to 1
move 14 from 9 to 8
move 1 from 5 to 7
move 16 from 3 to 2
move 2 from 1 to 2
move 1 from 9 to 2
move 1 from 8 to 1
move 1 from 1 to 3
move 7 from 2 to 9
move 6 from 9 to 8
move 1 from 3 to 4
move 3 from 7 to 6
move 2 from 2 to 1
move 1 from 4 to 7
move 2 from 2 to 5
move 1 from 9 to 6
move 2 from 2 to 5
move 2 from 6 to 2
move 4 from 5 to 4
move 5 from 2 to 6
move 1 from 1 to 7
move 1 from 1 to 2
move 13 from 8 to 1
move 2 from 8 to 4
move 19 from 7 to 4
move 3 from 1 to 6
move 11 from 4 to 3
move 2 from 7 to 9
move 4 from 2 to 5
move 2 from 9 to 5
move 1 from 7 to 4
move 2 from 5 to 7
move 4 from 3 to 4
move 3 from 4 to 1
move 3 from 5 to 1
move 9 from 6 to 4
move 1 from 7 to 9
move 1 from 7 to 5
move 10 from 1 to 4
move 1 from 9 to 6
move 1 from 6 to 8
move 32 from 4 to 5
move 7 from 5 to 4
move 27 from 5 to 9
move 5 from 3 to 2
move 3 from 2 to 8
move 1 from 6 to 2
move 8 from 4 to 9
move 1 from 2 to 9
move 8 from 8 to 6
move 2 from 4 to 3
move 1 from 2 to 3
move 15 from 9 to 8
move 4 from 1 to 4
move 3 from 4 to 8
move 6 from 9 to 7
move 1 from 4 to 9
move 8 from 8 to 2
move 2 from 1 to 9
move 2 from 7 to 9
move 10 from 8 to 3
move 6 from 2 to 6
move 2 from 3 to 2
move 6 from 6 to 3
move 1 from 7 to 5
move 8 from 3 to 2
move 4 from 3 to 2
move 1 from 3 to 5
move 6 from 6 to 1
move 4 from 3 to 7
move 2 from 5 to 8
move 3 from 7 to 5
move 6 from 1 to 7
move 1 from 3 to 4
move 1 from 3 to 9
move 10 from 7 to 4
move 8 from 2 to 8
move 11 from 9 to 5
move 11 from 4 to 1
move 5 from 2 to 6
move 3 from 2 to 7
move 11 from 1 to 6
move 1 from 5 to 6
move 8 from 5 to 4
move 19 from 6 to 7
move 3 from 7 to 9
move 3 from 5 to 4
move 1 from 2 to 5
move 3 from 5 to 7
move 8 from 9 to 6
move 2 from 4 to 1
move 1 from 1 to 9
move 2 from 9 to 7
move 6 from 6 to 2
move 2 from 4 to 6
move 4 from 8 to 6
move 1 from 8 to 1
move 7 from 6 to 7
move 1 from 9 to 4
move 5 from 8 to 4
move 3 from 2 to 6
move 4 from 6 to 4
move 2 from 9 to 6
move 3 from 2 to 9
move 16 from 4 to 8
move 1 from 6 to 8
move 2 from 9 to 5
move 1 from 9 to 7
move 2 from 5 to 2
move 1 from 4 to 6
move 2 from 2 to 5
move 1 from 9 to 6
move 3 from 7 to 3
move 7 from 7 to 8
move 2 from 7 to 1
move 3 from 8 to 5
move 3 from 6 to 2
move 4 from 7 to 4
move 1 from 5 to 1
move 1 from 5 to 7
move 3 from 3 to 4
move 5 from 1 to 4
move 16 from 7 to 2
move 5 from 4 to 7
move 19 from 8 to 1
move 11 from 2 to 9
move 11 from 9 to 6
move 2 from 1 to 6
move 2 from 4 to 1
move 5 from 4 to 6
move 1 from 5 to 9
move 1 from 9 to 6
move 2 from 2 to 6
move 1 from 5 to 4
move 8 from 6 to 5
move 16 from 1 to 6
move 1 from 4 to 9
move 3 from 2 to 9
move 2 from 2 to 5
move 2 from 5 to 8
move 4 from 8 to 4
move 4 from 9 to 7
move 2 from 1 to 3
move 5 from 6 to 4
move 21 from 6 to 2
move 9 from 7 to 3
move 1 from 1 to 2
move 1 from 5 to 3
move 23 from 2 to 7
move 1 from 7 to 5
move 3 from 6 to 1
move 9 from 4 to 5
move 11 from 7 to 1
move 2 from 3 to 4
move 1 from 3 to 7
move 1 from 4 to 1
move 10 from 1 to 6
move 5 from 7 to 1
move 3 from 1 to 4
move 7 from 1 to 7
move 4 from 3 to 8
move 4 from 7 to 4
move 5 from 7 to 3
move 2 from 4 to 9
move 1 from 8 to 1
move 4 from 4 to 1
move 1 from 6 to 1
move 1 from 6 to 5
move 16 from 5 to 1
move 2 from 5 to 7
move 1 from 5 to 6
move 2 from 8 to 2
move 1 from 7 to 9
move 3 from 9 to 5
move 2 from 5 to 4
move 6 from 7 to 1
move 3 from 4 to 7
move 1 from 8 to 6
move 5 from 1 to 4
move 1 from 6 to 1
move 19 from 1 to 5
move 1 from 7 to 6
move 9 from 3 to 1
move 6 from 6 to 5
move 4 from 6 to 9
move 3 from 9 to 4
move 13 from 1 to 4
move 1 from 3 to 1
move 2 from 5 to 1
move 1 from 2 to 3
move 1 from 3 to 9
move 4 from 5 to 4
move 1 from 2 to 3
move 1 from 3 to 5
move 1 from 9 to 1
move 1 from 9 to 5
move 19 from 4 to 7
move 4 from 1 to 6
move 5 from 4 to 3
move 3 from 6 to 1
move 1 from 6 to 8
move 2 from 1 to 6
move 2 from 1 to 7
move 2 from 6 to 3
move 2 from 3 to 1
move 8 from 7 to 6
move 5 from 3 to 9
move 2 from 4 to 9
move 2 from 6 to 8
move 10 from 7 to 2
move 7 from 2 to 9
move 1 from 8 to 9
move 1 from 1 to 2
move 2 from 9 to 3
move 2 from 8 to 7
move 1 from 1 to 6
move 1 from 2 to 8
move 2 from 2 to 5
move 4 from 5 to 7
move 5 from 6 to 1
move 1 from 3 to 4
`

const move = moves.split("\n").filter(el => el !== "");
// console.log(move)
// move.forEach(el => {
//   const split = el.split(' ').filter(el => /[^a-z]/gi.test(el));
//   // console.log(split)
//   let num = split[0];
//   const A = split[1];
//   const B = split[2];
//   // console.log(num, A, B)

//   //pop off # of crates from A stack, push on to B stack, one by one.
//   while (num > 0) {
//     stacks[B].push(stacks[A].pop());
//     num--;
//   }
// });

// console.log(stacks)

// console.log(stacks[1].pop(), stacks[2].pop(), stacks[3].pop(), stacks[4].pop(), stacks[5].pop(), stacks[6].pop(), stacks[7].pop(), stacks[8].pop(), stacks[9].pop())
//TBVFVDZPN

// PART 2

move.forEach(el => {
  const split = el.split(' ').filter(el => /[^a-z]/gi.test(el));
  // console.log(split)
  let num = split[0];
  const A = split[1];
  const B = split[2];
  // console.log(num, A, B)

  const stack = [];
  while (num > 0) {
    stack.push(stacks[A].pop());
    num--;
  }

  while (stack.length) {
    stacks[B].push(stack.pop());
  }
});

console.log(stacks[1].pop(), stacks[2].pop(), stacks[3].pop(), stacks[4].pop(), stacks[5].pop(), stacks[6].pop(), stacks[7].pop(), stacks[8].pop(), stacks[9].pop());
// V L C W H T D S Z