let a = [2,3,4];

let filtered1 = a.reduceRight((acc,val) => Math.pow(val, acc));
console.log(filtered1);