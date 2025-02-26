let letters = [..."Hello world"];
let string = "";
for(let letter of letters){
    string += letter + "01";
}
console.log(string);