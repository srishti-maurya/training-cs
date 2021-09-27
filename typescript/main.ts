export {};
let message = "Welcome back";
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = "Codevolution";

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Srishti";

// name = true; //error
let sentence: string = `My name is ${name} I am a beginner in Typescript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["Jack", 22];

//enum cannot change the value of enum variable outside it
// should have the same type

enum Color {
  Red = 5,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = "Jill";

let myVariable: any = 10;
console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();

let myVariable2: unknown = 10;

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable2)) {
  console.log(myVariable2.name);
}

(myVariable as String).toUpperCase();

// type inference
let a;
a = 10;
a = true;

let b = 20;
// b=true; //error

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;

//optional parameter
function add(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}
add(5, 10);
// add(5,'10') //error
add(5);

//default parameter
function addNum(num1: number, num2: number = 10): number {
  if (num2) return num1 + num2;
  else return num1;
}
addNum(5, 10);
// add(5,'10') //error
addNum(5);

//interface
interface Person {
  firstName: "Jack";
  lastName: "Mathew";
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

// fullName();

// classes
class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Srishti");
console.log(emp1.employeeName);
emp1.greet();

// class inheritance
class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`manager delegating tasks`);
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

// access modifier
/*

public - free acc //default 

private - acc within the class

protected - acc within the class and classes derived from it

*/
// we can create different type alias to reuse it again.
type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

// dynamic any types
let age: any = 25;
// we can change the type of age afterwards
age = true;
age = "hello";
age = { name: "Jack" };

let mixed: any[] = [];
mixed.push(5);
mixed.push("mary");
mixed.push(true);

let ninja: { name: any; age: any };

ninja = { name: "mary", age: 22 };
// to avoid this use carefully
ninja = { name: 25, age: "mary" };

//arrays
let names = ["mary", "jack", "mathew"];
names.push("toad");
//the type once initialized cannot be changed
// names.push(3); //error
// names[0] = 3; error

//names=30 //err - cannot change the type of the variable itself too

let num = [10, 20, 30];
num.push(40);
// num.push("mary");//err
// num[1] = 'shaun';//err

//we can use diff type if the initial array was initialized with diff types
let mixedArr = ["mary", 4, "shaun", 5, 8];
mixedArr.push("mario");
mixedArr.push(10);
mixedArr[0] = 4;

//objects
let ninja2 = {
  name: "mario",
  belt: "black",
  age: 30,
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
  age: 20,
  //   skills = [], //err cannot add new prop
};

/*
Cohesion -
things that are related should be together

*/
