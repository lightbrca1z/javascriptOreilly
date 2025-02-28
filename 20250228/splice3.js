let a = [1,2,3,4,5];
let b;
b = a.copyWithin(1);
console.log(b);
b = a.copyWithin(2,3,5);
console.log(b);
b = a.copyWithin(0,-2);
console.log(b);