import fs from "fs";

fs.readFile("tasks.txt", (err, data) => {
  if (err) throw err;
  data = data.toString();
  console.log(data);
});
