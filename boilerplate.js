const fs = require("fs");

//import { mkdir } from 'node:fs';
//const { mkdir } = require("node:fs");
// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// mkdir("dog", { recursive: true }, (err) => {
//   console.log("In the Callback!!!!");
//   if (err) throw err;
// });

console.log("I Come After mkdir in the file!!");
const folderName = process.argv[2] || "Project";

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.css`, "");
  fs.writeFileSync(`${folderName}/styles.js`, "");
} catch (e) {
  console.log("Something Went Wrong");
  console.log(e);
}
// try {
//   fs.mkdirSync(folderName);
//   fs.writeFileSync(`${folderName}/index.html`, "");
//   fs.writeFileSync(`${folderName}/app.js`, "");
//   fs.writeFileSync(`${folderName}/styles.css`, "");
// } catch (e) {
//   console.log("SOMETHING WENT WRONG!!!");
//   console.log(e);
// }
