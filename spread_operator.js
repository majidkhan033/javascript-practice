const arr = ["apple", "banana","oranges"]
const obj = {...arr};
console.log(obj);

// Array Literals

const array = [1,2,3,4,5,6,7,8,9,10]
const array2 = [...array];
console.log(array2);

let object = {
    "name" : "Abdul Majid Khan",
    "age" : 20,
    "gender" : "male"
}

let obj2 = {
    "background" : "CS",
    "expertise" : "Web"
}

let obj3 = {...object,...obj2}
console.log(obj3);

console.log({...obj2,...array});