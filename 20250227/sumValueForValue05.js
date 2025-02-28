let a = [5,4,3,2,1];

let filtered1 = a.some(x => x%2 === 0);
console.log(filtered1);

let filtered2 = a.some(isNaN);
console.log(filtered2);