"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Welcome back";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "Codevolution";
var isBeginner = true;
var total = 0;
var name = "Srishti";
// name = true; //error
var sentence = "My name is " + name + " I am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Jack", 22];
//enum cannot change the value of enum variable outside it
// should have the same type
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = "Jill";
var myVariable = 10;
console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
var myVariable2 = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
myVariable.toUpperCase();
// type inference
var a;
a = 10;
a = true;
var b = 20;
// b=true; //error
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
//optional parameter
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
// add(5,'10') //error
add(5);
//default parameter
function addNum(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
addNum(5, 10);
// add(5,'10') //error
addNum(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
// fullName();
// classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Srishti");
console.log(emp1.employeeName);
emp1.greet();
// class inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
var greet = function (user) {
    console.log(user.name + " says hello");
};
// dynamic any types
var age = 25;
// we can change the type of age afterwards
age = true;
age = "hello";
age = { name: "Jack" };
var mixed = [];
mixed.push(5);
mixed.push("mary");
mixed.push(true);
var ninja;
ninja = { name: "mary", age: 22 };
// to avoid this use carefully
ninja = { name: 25, age: "mary" };
//arrays
var names = ["mary", "jack", "mathew"];
names.push("toad");
//the type once initialized cannot be changed
// names.push(3); //error
// names[0] = 3; error
//names=30 //err - cannot change the type of the variable itself too
var num = [10, 20, 30];
num.push(40);
// num.push("mary");//err
// num[1] = 'shaun';//err
//we can use diff type if the initial array was initialized with diff types
var mixedArr = ["mary", 4, "shaun", 5, 8];
mixedArr.push("mario");
mixedArr.push(10);
mixedArr[0] = 4;
//objects
var ninja2 = {
    name: "mario",
    belt: "black",
    age: 30
};
// no err coz the type is same
ninja2.age = 40;
ninja2.name = "rio";
// ninja2.age='30'//cannot change the type
//once the obj properties are declared, no other prop can be added to it
// ninja2.skills = ["fighting", "sneaking"];//err
//we can change the all values with the same type again with exactly the same prop
ninja2 = {
    name: "rio",
    belt: "orange",
    age: 20
};
/*
Cohesion -
things that are related should be together

*/
