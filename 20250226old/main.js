let s = "Hello, World";

console.log("s.substring(1,4) : " + s.substring(1,4));
console.log("s.slice(1,4) : " + s.slice(1,4));
console.log("s.slice(-3) : " + s.slice(-3));
console.log("s.split(\",\") : " + s.split(","));

console.log("s.indexOf(\"l\") : " + s.indexOf("l"));
console.log("s.indexOf(\"l\",3) : " + s.indexOf("l",3));
//3文字目以降で最初のlの位置
console.log("s.indexOf(\"zz\") : " + s.indexOf("zz"));
console.log("s.lastIndexOf(\"l\") : " + s.lastIndexOf("l"));

console.log("s.startsWith(\"Hell\") : " + s.startsWith("Hell"));
console.log("s.endsWith(\"Hell\") : " + s.endsWith("Hell"));
console.log("s.endsWith(\"!\") : " + s.endsWith("!"));
console.log("s.includes(\"or\") : " + s.includes("or"));

console.log("s.replace(\"llo\"\, \"ya\") : " + s.replace("llo", "ya"));
console.log("s.toLowerCase() : " + s.toLowerCase());
console.log("s.toUpperCase() : " + s.toUpperCase());
console.log("s.nomalize() : " + s.normalize());
console.log("s.normalize(\"MFD\")" + s.normalize("NFD"));