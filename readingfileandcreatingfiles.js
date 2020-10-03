const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("hello", "Welocme !!");
console.log(text);
console.log("Creating A new File");
fs.writeFileSync("node.txt", text);
