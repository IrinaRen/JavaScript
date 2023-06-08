// Создать объект и изменить/достать/удалить из него свойство через оператор '.' :
const b={
    a:20, 
    b: true };

b.b = false;
console.log(b.b);
delete b.b;
// ----------------------------------------------------------------
// Записать в объект уже созданные переменные, сокращенным способом + вывести в консоль функцию из объекта:
let ourUser='Yegor';
let ourUserAge=26;

const ourUserProfile ={
    ourUser, ourUserAge,
    ourUser_isUnder18: false,
    userPishet() {
        console.log('Privet podruzhka!')
    }
};
ourUserProfile.userPishet();

// ---------------------------------------------------------------
// Скопировать объект, а не ссылку + внести изменения в копию 
// и проверить, не изменились ли данные в оригинале:

const person= {
    age:26,
   name: 'Lana'
};
const person2 = Object.assign({},person);

person2.salary = 1000;

console.log(person);
console.log(person2);

// ----------------------------------------------------------------
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

// ----------------------------------------------------------------
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

// ----------------------------------------------------------------
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

// ----------------------------------------------------------------
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
// ----------------------------------------------------------------
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

// ----------------------------------------------------------------
// Написать функцию, которая напишет 'Имя' через 2 секунды после запуска кода:

function printMyName () {
    console.log('Irina')
};
console.log('Start')
setTimeout(printMyName, 2000);

// ----------------------------------------------------------------
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

// ----------------------------------------------------------------
// Выясняем тип значения '10':

typeof 10 === "number";
console.log(typeof 10 === "number");

// ----------------------------------------------------------------
// Выясняем тип пустого значения:

const objIsEmpty = { };

console.log(objIsEmpty);

console.log(!!objIsEmpty);

// ----------------------------------------------------------------
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

// ----------------------------------------------------------------
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

// ----------------------------------------------------------------
// Проверка на цвет кнопки blueButton через функцию:

if (blueButton.color == 'blue') {
    console.log('true: ' + 'blue button-is blue!')
    } 
    else if (blueButton.color != 'blue'){
        console.log('false: ' + 'blue button-is not blue!')
    };

// ----------------------------------------------------------------
// Проверка на цвет кнопки blueButton через операторы сравнения:

blueButton.color == 'blue' && console.log('true: ' + 'blue button-is blue!') || 
blueButton.color != 'blue' && console.log('false: ' + 'blue button-is not blue!');

// ----------------------------------------------------------------
// Объединение объектов с помощью '...' :

const buttonInfo = {
    text: 'Hello'
};

const buttonStyle ={
    color: 'yellow',
    width: 200,
    height: 300
};

const wholeButton = {
    ...buttonInfo,
    ...buttonStyle
};
console.table(wholeButton);

// ----------------------------------------------------------------
// Создать выражение, используя "Шаблонные строки":

const hello = 'Hello';
const world = 'World!!';

const greeting = `${hello} ${world}`;
console.log(greeting);

// ----------------------------------------------------------------
// Создать переменные со своими личными данными(Имя и город проживания)
//  и объединить их используя "Шаблонные строки":

const myName = 'My name is Irina';
const mytown = 'I live in the town of Zhukovskiy';

const myProfile = `${myName} ${mytown}`;
console.log(myProfile);

// ----------------------------------------------------------------
// Записать setTimeout как стрелочную функцию:

setTimeout (() => {
    console.log('Отложенное сообщение')
}, 2000);

// ----------------------------------------------------------------
// Написать функцию, которая будет уже иметь значение одного из параметров по умолчанию:

function multByFactor (value, multiplier = 1) {
    return value * multiplier
};
console.log(multByFactor(10, 2));
console.log(multByFactor(5));

// Переписать предыдущую именную функцию 'multByFactor' в анонимную функцию и вызвать её:
// function (value, multiplier = 1) {
//     return value * multiplier
// };

const multiFactor = function (value, multiplier = 1) {
        return value * multiplier
    };

console.log(multiFactor(25, 3));
console.log(multiFactor(7));

// Сделать из функции 'multByFactor' стрелочную функцию, вызвать её:
// (value, multiplier = 1) => {
//     return value * multiplier
// };
const multArrowFunc = (value, multiplier = 1) => {
        return value * multiplier
    };

console.log(multArrowFunc(11, 3));
console.log(multArrowFunc(8));

// ----------------------------------------------------------------
// *Значения параметров функции по умолчанию.
// Вывести функцию, с НЕ явным возвратом объекта,
// функция должна присвоить уникальную/актуальную дату+время каждому новому "посту пользователя":

const newPost =(post, addedAt = Date()) => ({
    ...post,
    addedAt});

const firstPost ={
    id: 1,
    author: 'Irina'
};

const secondPost = {
    id: 1,
    author: 'Irina',
    text: 'Hello everybody! I`m glad to see you here!!'
};
// console.table(newPost(secondPost));

// Вывести функцию, с явным возвратом объекта,
// функция должна присвоить уникальную и актуальную дату+время, каждому новому "посту пользователя":

const newPost2 = (post2, addedAt2 = Date()) => {
    return {...post2,
    addedAt2}
};
const firstPost2 ={
        id: 2,
        author: 'Iren'};

// Проверить уникальность присвоения дат и времени в предыдущих функциях 'newPost' и 'newPost2':
    
    setTimeout (() => {
         console.table(newPost(firstPost))
    }, 2000);

   setTimeout (() => {
         console.table(newPost(secondPost))
   }, 4000);

   setTimeout (() => {
         console.table(newPost2(firstPost2))
   }, 8000);

// ----------------------------------------------------------------
// Обработка ошибок
// Сделать функцию, которая запустит 'не пойманную ошибку(Uncaught Error)':

const fnWithError = () => {
    throw new Error('Some error')
};
// *TRY/ CATCH
// Модернизировать функцию 'fnWithError' в функцию, которая выведет в консоль сообщение ошибки и саму ошибку:

try {
    fnWithError ()

} catch (error) {
    console.log(error)
    console.log(error.message)
};

console.log('Continue...')

// ----------------------------------------------------------------
// Создание массивов:

const myArray =[1, 2, 3]
console.log(myArray)

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)

// PUSH -
// метод добавляющий элемент в конце массива:
myArray.push(4)
console.log(myArray)

myArray.push(true)
console.log(myArray)

// POP -
// метод удаляющий элемент в конце массива:
myArray.pop()
console.log(myArray)

const removedElement = myArray.pop()
console.log(myArray)
console.log(removedElement)

// UNSHIFT -
// метод добавляющий элемент в начало массива:
myArray.unshift(true)
console.log(myArray)

myArray.unshift('abs')
console.log(myArray)

// SHIFT -
// метод удаляющий элемент в начале массива:
myArray.shift()
console.log(myArray)

const removedElement2 = myArray.shift()
console.log(myArray)
console.log(removedElement2)

// FOREACH -
// в вызове этого элемента передаётся функция, 
// которая вернет новые значения вне маасива(*не меняет сам массив):
myArray.forEach(el => console.log(el *2))
console.log(myArray)

// MAP -
// метод вызывающтй функцию столько раз, сколько элементов в массиве, 
// при этом не меняет оригинальный массив, а формирует новый массив:
const newArray = myArray.map(el => el *3)

console.log(newArray);
console.log(myArray);

// MAP -
//через анонимное функциональное выражение:

const newArray2 = myArray.map(function (el){ 
    return el *5});

console.log(newArray2);
console.log(myArray);

// ----------------------------------------------------------------
// ДЕСТРУКТУРИЗАЦИЯ :

const usProfile = {
    usName: 'Polina',
    userAge: 20,
    hasSignAgreement: false
};
const {usName, userAge} = usProfile;
const {hasSignAgreement} = usProfile;

console.log(usName);
console.log(userAge);

// ДЕСТРУКТУРИЗАЦИЯ массивов:
const fruits = ['Apple', 'Banana']
const [fruitOne, fruitTwo] = fruits

console.log(fruitOne);
console.log(fruitTwo);

// ДЕСТРУКТУРИЗАЦИЯ в функцию:
const userProfile3 = {
    uName: 'Galina',
    commentsQty: 223,
    hasSignAgreement: false
};

const userInfo = ({uName, commentsQty}) => {
    if (!commentsQty){
        return `User ${uName} has no comments`
    }
    return `User ${uName} has ${commentsQty} comments`
};

console.log(userInfo(userProfile3));

// ----------------------------------------------------------------
//  IF :
let val = 10

if (val >5) {
    val += 20
}
console.log(val);

const person1 = { age: 20}
if (!person1.name) {
    console.log ('Имя не указано')
}

//  IF ELSE:
let val2 = 20

if (val2 < 5) {
    val2 += 30
} else {
    val2 -=30
}
 console.log(val2)

 //  IF ELSE IF:
 const age = 25
//  const age = 16
//  const age = 7

 if (age > 18) {
    console.log ('Is abult')
 } else if (age >= 12) {
    console.log ('Is teenager')
 } else {
    console.log ('Is child')
 }

//  Тоже самое, но используем только IF :

if (age >= 18) {
    console.log ('Is abult')
 } 

 if (age >= 12 && age <18 ) {
    console.log ('Is teenager')
 } 
 
if (age < 12) {
    console.log ('Is child')
 }

// -------------------------------------------------------
// Использование IF в функциях :

const sumPositiveNumber = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
    return 'One of the arguments is not a number'
}
if (a <=0 || b <= 0) {
    return 'Numbers are not positive'
} 
return a+b}

console.log(sumPositiveNumber(1,2))
console.log(sumPositiveNumber('a',true))
console.log(sumPositiveNumber(-10, 5 ))




