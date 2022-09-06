import fs from "fs";
/*
 fs write File Needs 
 1) Give File Name
 2) Data that has to be Written / File Contents
 3) Call Back Function

 */

 let str = "Hello to File System"
fs.writeFile("tasks.txt", str, (err) => {
    if (err) throw err;
    console.log('Saved!')
});