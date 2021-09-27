/* 
using let makes the variable to be only accessible within the function scope
using var makes is scoped to the nearest function 

but here let is changed to var in js file 

*/

function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Final" + i);
}

doSomething();

// types in typescript
let count = 5; //type number
// count='a'; // err

let flag; // type any

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, "a", false];

//enum
// by default number are giving from 0 and increment by 1 for the next
// it is still recommended to initialise them
enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
}
let backgroundColor = Color.Blue;

//type assertion
// let message; //type any
// message = "abc";
// //explicilty telling the type
// let endsWithC = (<string>message).endsWith("c");
// let alternativeWay = (message as string).endsWith("c");

//arrow functions
let doLog = (message) => console.log(message);

//interfaces
interface Point {
  x: number;
  y: number;
}

let drawPoint = (point: Point) => {
  //...
};

drawPoint({
  x: 1,
  y: 2,
});

//the above code voilates the rule of cohesion
//hence to resolve it we use classes

//classes - cohesion
/*
class Point {
  private x: number;
  private y: number;
  //constructor
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
  //methods
  draw() {
    console.log("X: " + this.x + " Y: " + this.y);
  }

  //   getDistance(another:Point){
  //       //..
  //   }
}

//object - instance of class
let point = new Point(1, 2);
// point.x = 3 //err cannot change the value of x bcoz x is private hence it cannot be acc outside the class
point.draw();



*/

//alternative and better way of declaration
class Point {
  constructor(private _x?: number, private _y?: number) {}
  //methods
  draw() {
    console.log("X: " + this._x + " Y: " + this._y);
  }
  //properties to give read only access to private variables outside the class
  get x() {
    return this._x; // it can access x coz it is inside the class
  }
  set x(value) {
    if (value < 0) throw new Error("value cannot be less than 0");
    this._x = value;
  }
}

let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();

/*
each file may be considered as a module 

to access/use the class that is in other file we can export the class 
//export class Point 

then we can import it to the other file
// import {Point} from "./point.ts"

*/
