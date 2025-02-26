let letters = [..."Hello world"];
let string = "";
for(let letter of letters){
    string += letter + "01";
}
let everyother = "";
for(let [index, letter] of letters.entries()){
    if(index % 2 === 0){everyother += letter};
}

let uppercase = "";
let lowercase = "";
letters.forEach(letter => {
    uppercase += letter.toUpperCase();
    lowercase += letter.toLowerCase();
});

console.log(lowercase);
console.log(uppercase);