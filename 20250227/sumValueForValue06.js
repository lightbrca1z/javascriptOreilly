let a = [5,4,3,2,1];

let filtered1 = a.reduce((x,y) => x+y, 0)
console.log(filtered1);

let filtered2 = a.reduce((x,y) => x*y, 1)
console.log(filtered2);

let filtered3 = a.reduce((x,y) => (x > y) ? x : y);
console.log(filtered3);