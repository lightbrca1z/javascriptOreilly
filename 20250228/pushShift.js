let q = [];

console.log("初期状態:", q);

q.push(1,2);
console.log("1,2 を追加:", q); // [1, 2]

q.shift();
console.log("1 を削除:", q); // [2]

q.push(3);
console.log("3 を追加:", q); // [2, 3]

q.shift();
console.log("2 を削除:", q); // [3]

q.shift();
console.log("3 を削除:", q); // []

console.log("最終状態:", q); // []
