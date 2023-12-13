let fruits = [];

fruits.push("apple","banana","orange")

fruits.splice(0, 1);
fruits.push('grape')

fruits.splice(0, 1, "pear");

console.log(fruits);