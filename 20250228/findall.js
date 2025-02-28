function findall(a,x){
    let results = [],
        len = a.length;
        pos = 0;
    while(pos < len){
        pos = a.indexOf(x,pos);
        if (pos === -1) break;
        results.push(pos);
        pos = pos + 1;
    }
    return results;
}

let text = "JavaScript is fun, and JavaScript is powerful!";
let words = text.split(" ");
let jsIndexes = findall(words, "JavaScript");
console.log(jsIndexes); // [0, 4]