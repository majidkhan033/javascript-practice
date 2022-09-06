import readlineSync from "readline-sync";
import fs from "fs";

let taskname = readlineSync.question("Enter the Task : ");
console.log(taskname);

let fileData;

fs.readFile("tasks.json", (err, data) => {
  if (err) throw err;
  console.log(data);
  fileData = data;
  fileData = JSON.parse(data);
  // console.log("UP", fileData)
  console.log(taskname);
  fileData.push(taskname);
  console.log(fileData);
  console.table(fileData);cd 
  fileData = JSON.stringify(fileData);
  fs.writeFile("tasks.json", fileData, (err) => {
    if (err) throw err;
    console.log("Task added successfully");
  });
});
