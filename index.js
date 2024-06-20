const { log } = require('console');
const fs = require('fs');

//create a folder 
fs.mkdirSync('Task')

//create file and add data into it
fs.writeFileSync("task/bio.txt","my name is tejas mahakal");
 
//add more data into the file at the end of the existing data
fs.appendFileSync('task/bio.txt','form akola maharastra');

//Buffer data
const dataBuffer = fs.readFileSync("task/bio.txt");
console.log(data);

//after file encloding
const data = fs.readFileSync("task/bio.txt", "utf8");
console.log(data);

//Rename "bio.text" to "myBBio.tex"
fs.renameSync("task/bio.txt", "task/myBio.txt")

//Delete "myBio.text" file
fs.unlinkSync("task/myBio.txt");

//Delete "Task" folder
fs.rmdirSync("task");