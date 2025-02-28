let a = [1,2,3,4,5];
let b = [];
b = a.splice(2,0,"a","b");
console.log(b);
console.log(a);
b = a.splice(2,2,[1,2],3);
console.log(b);