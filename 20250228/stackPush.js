let stack = [];

let stack1 = stack.push(1, 2);
console.log("stack1:", stack);  // [1, 2]

let stack2 = stack.pop();
console.log("stack2:", stack2);  // 2
console.log("stack after pop:", stack); // [1]

let stack3 = stack.push(3);
console.log("stack3:", stack);  // [1, 3]

let stack4 = stack.pop();
console.log("stack4:", stack4); // 3
console.log("stack after pop:", stack); // [1]

let stack5 = stack.push([4,5]);
console.log("stack5:", stack);  // [1, [4,5]]

let stack6 = stack.pop();
console.log("stack6:", stack6); // [4,5]
console.log("stack after pop:", stack); // [1]

let stack7 = stack.pop();
console.log("stack7:", stack7); // 1
console.log("stack after pop:", stack); // []

console.log("Final stack:", stack); // []
