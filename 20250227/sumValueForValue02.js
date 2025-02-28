let a = [5,4,3,2,1];

let filtered1 = a.filter(x => x < 3);  // 3未満の要素を抽出
console.log(filtered1);  // [2, 1]

let filtered2 = a.filter((x, i) => i % 2 === 0);  // インデックスが偶数の要素を抽出
console.log(filtered2);  // [5, 3, 1]