
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits[0]); 
console.log(fruits[2]);

fruits.push("Grapes");
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange", "Grapes"]

fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
