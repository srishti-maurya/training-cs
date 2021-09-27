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

// public - free acc
// private - acc within the class
// protected - acc within the class and classes derived from it
