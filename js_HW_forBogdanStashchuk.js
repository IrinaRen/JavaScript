// Создать объект и изменить/достать/удалить из него свойство через оператор '.' :
const b={
    a:20, 
    b: true
};

b.b = false;

console.log(b.b);

delete b.b;

// Записать в объект уже созданные переменные, сокращенным способом + вывести в консоль функцию из объекта:
let ourUser='Yegor';
let ourUserAge=26;

const ourUserProfile ={
    ourUser, ourUserAge,
    ourUser_isUnder18  :false,
    userPishet() {
        console.log('Privet podruzhka!')
    }
};
ourUserProfile.userPishet();

// // Скопировать объект, а не ссылку + внести изменения в копию 
// // и проверить, не изменились ли данные в оригинале:

const person= {
    age:26,
   name: 'Lana'
};
const person2= Object.assign({},person);

person2.salary = 1000;

console.log(person);
console.log(person2);

// Скопировать объект, а не ссылку(уже другим способом) + внести изменения в копию 
// и проверить, не изменились ли данные в оригинале:

const user = {
    age:26,
   name: 'Luna'
};
const user2= {...user};

user2.age = 27;
user2.salary = 2000;

console.log(user);
console.log(user2);

// Скопировать объект, а не ссылку(способом, который сможет скопировать даже вложенные объекты(*путем двойной конвертации))
// //  + внести изменения в копию и проверить, не изменились ли данные в оригинале:

const userProfile = {
    age:27,
   name: 'Luna',
   salary:{ firstYearQA: 1000,
    after1YearQA: 2000,
    after2YearQA: 3000
   }
};
const userProfile2 = JSON.parse(JSON.stringify(userProfile));

userProfile2.name = 'Moon';
userProfile2.salary.after3YearQA=3500;

console.log(userProfile);
console.log(userProfile2);

// Оптимизировать следующие действия в функцию: 
// let a = 6;  
// let b = 4; 
// let c= a+b;
// console.log(c); 

let a1 = 6;  
let b1 = 4;
function sum(a,b) {
    let c = a + b
    console.log(c)
};
sum(a1, b1);
sum(10, 20);

// // Используйте console.dir для демонстрации объека функции:
// let a = 6;  
// let b = 4;
    function myFn(a,b) {
    let c
    a = a + 1
    c = a + b
    return c
    };
    console.dir(myFn);

myFn(10, 3);

let myFnOut = myFn(10, 3);
console.log(myFnOut);
// ---------------------------------------------------------------
// Написать функцию, которая изменит внешний объект
// (*Так лучше никогда не делать!! ):.

// const personOne = {
//     name: 'Ira',
//     age: 27
// };
// function incrPersonAge (person) {
//     person.age += 1 
//     return person
// };
// incrPersonAge (personOne);
// console.log(personOne.age);

// ----------------------------------------------------------------
// Написать функцию, которая не изменит внешний объект, 
// а скопирует его свойства в новый объект(*лучше делать так):

const personOne = {
    name: 'Ira',
    age: 27
};
function incrPersonAge (person) {
    const updPerson = Object.assign({}, person)
    updPerson.age += 1 
    return updPerson
};
const updPersonOne = incrPersonAge(personOne);
console.log(personOne.age);
console.log(updPersonOne.age);

// ----------------------------------------------------------
// Написать функцию, которая напишет 'Имя' через 2 секунды после запуска кода:

function printMyName () {
    console.log('Irina')
};
console.log('Start')
setTimeout(printMyName, 2000);

// -------------------------------------------------------
// Включить встроенную функцию "Cтрогий режим" и после
//  проверить написание функций с не объявленными переменными:

// 'use strict'

// function myFunction () {
//     a = true
//     console.log(a)
// };
// myFunction();

// *Функция булиевого значения:
// Boolean(value)

// Выясняем тип значения '10':
typeof 10 === "number";
console.log(typeof 10 === "number");

// Выясняем тип пустого значения:

const objIsEmpty = { };

console.log(objIsEmpty);

console.log(!!objIsEmpty);

// Оператор разделения объекта на свойства:

const button = {
    width: 200,
    text: 'Hello',
    color: 'black'
};

const redButton = {
    ...button,
    color: 'red'
};

console.table(redButton);
console.table(button);
// -------------------------------
// Оператор разделения объекта на свойства, если вписать его после объявления такого же свойства, 
// но другого значения('black' не перезапишеться на 'blue'):

const button2 = {
    width: 200,
    text: 'Hello',
    color: 'black'
};

const blueButton = {
    color: 'blue',
    ...button2
};
console.table(blueButton);
console.table(button2);

// -----------------------------------------------------------------------
// Проверка на цвет кнопки blueButton через функцию:

if (blueButton.color == 'blue') {
    console.log('true: ' + 'blue button-is blue!')
    } 
    else if (blueButton.color != 'blue'){
        console.log('false: ' + 'blue button-is not blue!')
    };

// ------------------------------------------------------------------------
// Проверка на цвет кнопки blueButton через операторы сравнения:

blueButton.color == 'blue' && console.log('true: ' + 'blue button-is blue!') || 
blueButton.color != 'blue' && console.log('false: ' + 'blue button-is not blue!');