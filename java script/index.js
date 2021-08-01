let var1 = "sheema"; //declaring variable
console.log(var1);
let FirstName = "sheezz";  //string literal
console.log(FirstName);

let interestRate = 1.2;  //number literal
console.log(interestRate);
const interestRate1 = 1.10;  //cant reassign
console.log(interestRate1);

let isApprove = true; //boolean literal 
let a = null;  // null var keyword

// js is a dynamic language ( at runtime determination )
// theres no int or floa tin js its number 

console.log(typeof interestRate);
console.log(typeof var1);

//reference types
//object::

let person = {
    name: "sheema ",
    age: 30
};
console.log(person);

//accessing (dot notation)
person.name = 'iqra';
console.log(person.name);

//accessing (bracket notation)
let select = 'name';
person[select] = 'iqra';
console.log(person.name);

//arrays
let color = ['pink', 'yellow']; //array literal
console.log(color);
console.log(color[1]);

//we can save diff types in arrays
let color1 = ['pink', 'yellow', 3];
console.log(color1);

//functions
function greet(naam, last)  //parameter
{
    console.log("heyyy " + naam + last);
}
greet('sheema', 'zainab'); //argument 

//types of fn
//calculating

function square(num) {
    return num * num;
}

console.log(square(3));

//encapsulation
let emp = {
    salary: 20000,
    ot: 4000,
    rate: 30,

    getWage: function ()  //functions having fewer paramters fr easy usage
    {
        return this.salary + (this.ot * this.rate);
    }
};
console.log(emp.getWage());

//abstraction -- hide complexity 

//inheritance  --eliminate redundancy 

//polymorphism  -- eliminates switch cases

//objects
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    draw: function () {
        console.log('draw');
    }
};
circle.draw();

//factory 

function create(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}
const circle1 = create(2);
circle1.draw();

//constructor fn
function Circle2(radius) {

    this.radius = radius;
    this.draw = function () {
        console.log('draww');
    }
};
const another = new Circle2(2);  //new crates an empty obj  
/*
//built in constructors
let sheezz ={};  //let sheezz = new Object(); 
let String(); //'',""
let Boolean();  //true or false
*/

//value types and ref types
//value -- num , bool , string , symbs 
//ref -- obj , fun , arrays 
let y = 10; //value
let x = y;

y = 15;

console.log(x);
console.log(y);

//independant 
let y1 = { val: 10 }; //value
let x1 = y;

y1.value = 20;

console.log(x1);
console.log(y1);
//primitives are copied by their values and objs are copied by thier reference 
let num = 10;
function inc(num) {
    num++;
}
inc(num);
console.log(num); // even if we increase its value is colied into paramter to local in this fun so num var is inpendant of other num variable

let num2 = { val: 10 };
function inc(num2) {
    num2.val++;
}
inc(num2);
console.log(num2);
// not independant bcoz both vars are pointing to same obj .. so val is incremented

//adding and removing properties::
function Circle3(radius) {

    this.radius = radius;
    this.draw = function () {
        console.log('draww');
    }
};
const cir = new Circle3(2);
for (let key in cir) {
    console.log(key);
}

//returns both propertes and methods

//abstraction
function Circle4(radius) {
    let colour = 'red';
    this.radius = radius;
    let defloc = { x: 0, y: 0 };
    let compute = function () {

    }
    this.draw = function () {
        compute(0.1);
        console.log('draww');
    };
}
const circ = new Circle3(2);
circ.draw();

// stopwatch exercise 

function Stopwatch() {
    let startTime,
        endTime,
        running,
        duration = 0;

    this.start = function () {
        if (running) {
            throw new Error("Stopwatch has already started");  // 
        }
        running = true; //otherwise set to true

        startTime = new Date();
    };

    this.stop = function () {
        if (!running) {
            throw new Error("Stopwatch is not started");
        }
        running = false;

        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, "duration", {
        get: function () {
            return duration;
        }
    });
}
const sw = new Stopwatch();