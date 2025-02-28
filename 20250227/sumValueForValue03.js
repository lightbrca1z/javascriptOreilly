let a = [5,4,3,2,1];

let filtered1 = a.findIndex(x => x === 3);
console.log(filtered1);

let filtered2 = a.findIndex(x => x < 0);
console.log(filtered2);

let filtered3 = a.find(x => x % 5 === 0);
console.log(filtered3);

let filtered4 = a.find(x => x % 7 === 0);
console.log(filtered4);