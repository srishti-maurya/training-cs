/*
using let makes the variable to be only accessible within the function scope
using var makes is scoped to the nearest function

but here let is changed to var in js file

*/
/*
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

/*
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
*/
    * /;
//classes - cohesion 
var Point = /** @class */ (function () {
    function Point() {
    }
    //methods
    Point.prototype.draw = function () {
        console.log("X: " + this.x + " Y: " + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //..
    };
    return Point;
}());
var point = new Point();
point.draw();
