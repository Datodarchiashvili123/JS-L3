const people = [
    {
      name: 'Ben',
      age: 30,
      occupation: 'Banker',
      salary: 3000,
      pets: []
    },
    {
      name: 'Jane',
      age: 26,
      occupation: 'Teacher',
      salary: 1200,
      pets: ['dog']
    },
    {
      name: 'John',
      age: 31,
      occupation: 'Developer',
      salary: 4000,
      pets: ['dog', 'cat']
    },
    {
      name: 'Mike',
      age: 26,
      occupation: 'Developer',
      salary: 5000,
      pets: []
    },
    {
      name: 'Tom',
      age: 34,
      occupation: 'Teacher',
      salary: 3400,
      pets: ['dog', 'parrot']
    }
  ];

// 1. Calculate sum of all teacher salaries
let sumOfSalary = 0;
people.forEach(people => sumOfSalary += people.salary);
console.log('sum of salary = ', sumOfSalary);

// 2. Create a new array with the same people but double salaries of developers
let doubleSalary;
doubleSalary = people.map(people => people.salary * 2 );
console.log('doubleSalary : ', doubleSalary);

// 3. Filter people who has a dog
let dogOwner = people.filter(people => people.pets.includes('dog'));
console.log('dogOwner : ', dogOwner);

// 4. Figure out if all the people have pets or not
let havePetsorNot = people.every(people => people.pets === '');
console.log('have pets or not : ', havePetsorNot);

// 5. Figure out if any of the people are above age 30

let isAnyoneAbove30 = people.some(people => people.age > 30);
console.log('is anyone above 30: ', isAnyoneAbove30);

///---///

//MY Filter
const arr = [ 2, 2, 8];
function myFilter(arr, x){
  let filteredArr=[];
  for (let item of arr){
    if(item === x){
      filteredArr.push(item);
    }
  }

  return filteredArr;
}

const filteredArr = myFilter(arr, 3);
console.log('filteredArr', filteredArr);
//My Every

console.log('every: ', arr.every( x => x !== 2));
function myEvery(arr, fn){
  for (let item of arr){
    if(fn(item)){
      return true;
    }
    else return false;
  }
}
console.log('everyArr', myEvery(arr, x => x !== 2));

// map implementation

// const arr = [1, 2, 3, 4, 5];
const mappedArr = myMap(arr, (x) => x / 2);

function myMap(arr, fn) {
  let mappedArr = [];

  for (let item of arr) {
    mappedArr.push(fn(item));
  }

  return mappedArr;
}

//Lecture 4

// add(2)(3);

function add(x){
    function add2(y){
      return x+y;
    }
    return add2;
}

console.log(add(2)(3));


/*
შევქმნათ ფუნქცია რომელიც მიიღებს N რაოდენობის არგუმენტებს (number-ებს). 
ამ ფუნქციამ უნდა დააბრუნოს ფუნქცია, რომელიც მიიღებს ერთ n არგუმენტს.
მეორე ფუნქციამ უნდა დააბრუნოს პირველი ფუნქციის არგუმენტების გა-n-მაგებული მნიშვნელობების ჯამი.
*/

multipliedSum(1, 2, 3, 4)(2) // => 20

function multipliedSum(...n){
  function secondFunction(x){
     const sum = n.reduce((acc, cur)=> (acc+= cur*x),0);
    return sum;
  }
  return secondFunction;
}

console.log(multipliedSum(1,2,3)(2));