//1. How to declare a variable using let and const 
//2. condition
const ami = 'Khalil';
const profession = 'student';
if (ami === 'khalil' || profession === 'student') {

}
else if (ami == 'Khalil') {

}
else {

}
//3.array
const numbers = [34, 35, 67, 75, 77];
numbers[0] = 56;
// console.log(numbers)
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(number)
}

function multiply(num1, num2) {
    const result = num1 * num2;
    // console.log(result)
    return result;

}
multiply(3, 4)

//6. object
const student = {
    name: 'amir khan',
    age: 43,
    movies: ['king khan', 'dhakar pola']
}
const myAge = 'age';
// console.log(student.age)
// console.log(student['age'])
// console.log(student[myAge])

const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;

//arrow function
num = 5
const fiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    // console.log(sum)
    return sum;
}
doMath(4, 4)

//spread operator
const newNumbers = [...numbers];


//create a new array from an older and add an element
const currentNumbers = [...numbers, 66]
numbers.push(99)
// console.log(newNumbers)
// console.log(numbers)
// console.log(currentNumbers)

const products = [
    { name: 'laptop', price: 3222, brand: 'lenevo', color: 'silver' },
    { name: 'phone', price: 322, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 22, brand: 'casio', color: 'black' },
    { name: 'cycle', price: 122, brand: 'phonix', color: 'silver' },
    { name: 'camera', price: 222, brand: 'canon', color: 'black' }

]

const brands = products.map(p => p.brand);
// console.log(brands)
const prices = products.map(p => p.price);
// console.log(prices)

// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color));

//filter
const cheap = products.filter(product => product.price <= 500);
// console.log(cheap)

const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName)

//find
const special = products.find(p => p.name.includes('a'));
// console.log(special)

//destructuring
const numberArray = [423, 452];
const [x, y] = numberArray;
// console.log(x, y)

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// console.log(boxify(90, 34))

const [firstMovie, secondMovie] = student.movies;
// console.log([firstMovie, secondMovie])

//object destructuring
const { name, age } = { name: 'alu', age: 14 }
const { name1, salary } = { name1: 'potol', salary: 34222, age: 40 }
// console.log({ name1, salary })

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'windows',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 56,
        address: 'mohakhali',
        drink: 'water'
    }
}

const { machine, ide } = employee;
const { weight, address } = employee.specification;
// console.log({ weight, address })

const studentJSON = JSON.stringify(student)
// console.log(student)
// console.log(studentJSON)
const studentObj = JSON.parse(studentJSON)
// console.log(studentObj)
//fetch
/* fetch('url')
    .then(res => res.json())
    .then(data => console.log(data)) */

//keys,values
const keys = Object.keys(student);
const values = Object.values(student);
// console.log(keys)
// console.log(values)
/* numbers.forEach(num => console.log(num))
numbers.map(num => console.log(num * 2)) */

//for of on array like objects
//for in on object
//add or remove from an arraay
const newProduct = { name: 'webcame', price: 700, brand: 'lal' }
//add newProduct
const newProducts = [...products, newProduct]
// console.log(newProducts)

//remove phone from array
const remaining = products.filter(product => product.name !== 'phone')
// console.log(remaining)

//truthy falsy
let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
if (!myMoney) {

}
const money = 80;
let food
if (money > 100) {
    food = 'biriyani';
}
else {
    food = 'cha biscuit'
}

//ternary
let food1 = money > 100 ? 'biriyani' : 'cha biscuit';
// console.log(food1)

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';

//shortcut
/* const num3 = 53;
console.log(num3)
const numStr = num3 + '';
console.log(numStr)
//string to number
const input = '560';
const inputNum = +input;
console.log(inputNum) */

const isActive = false;
const showUser = () => console.log('display user')
const hideUser = () => console.log('hide user')
// isActive ? showUser() : hideUser();

// isActive && showUser()
// isActive || hideUser()
//toggle boolean
// isActive = !isActive

localStorage.setItem('userId', 5343342);

const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //
    if (id && value) {
        localStorage.setItem(id, value)
    }
    idInput.value = '';
    valueInput.value = '';
}

const xy = 50;
const yx = 100;
const obj = {
    xy: xy,
    yx: yx
};