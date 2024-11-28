//  OBJECTS
// Definition:
//      Object is the collection of properties, and property is associated with the name (key) and value.

// 1. Creation
// 1.a) Literal Object : let user = {};
let user = {};
let person = {
    firts_name: 'John',
    last_name: 'Doe',
    age: 30,
    is_student: true
}
// 1.b) Constructor Object: let user = new Object();
let car = new Object();
car.brand = "Toyota";
car.year = 2002;
car.oil = "Essence";

// 1.c) Function Contructor:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//  2) Access to properties: To access of the object property, you two (02) methods:
//  - Dot: teddy.name
//  - Square Bracket: teddy['name']


const teddy = new Person("Manga Boy", 10);

const array = [ 'apple', 'orange', 'name' ];
let count = 0;
array.forEach(element => {
    
    if (teddy[element]) {
        count++;
        console.log(element);
    }
});

// 3) Add new properties
const level4 = {
    start_date: "",
    end_date: "",
    level: 4,
    courses: ["Node.js Programming"]
}

level4.amount = 1000000;
console.log(level4);

// 4) Delete properties
delete level4.start_date; // Remove the start_date property in level4 object.