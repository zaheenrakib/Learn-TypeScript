// TUPLES
let a = [3, 'hello', { p: 3 }];
let b = [3, 'hello', { p: 3 }];
b.push(4); // Allowed, but not recommended as it breaks the tuple structure
console.log(b); // Output: [3, 'hello', { p: 3 }, 4]
// TUPLES with REST parameters
let c = [1, 'hello', 'world'];
c.push('TypeScript'); // Allowed
console.log(c); // Output: [1, 'hello', 'world', 'TypeScript']
// //Enums
// enum Rtype {
//   SUCCESS,
//   FAILURE,
//   UNAUTHORIZED,
//   FORBIDDEN,
// }
// interface APIResponse<T> {
//   status: number;
//   type: Rtype;
//   data: T;
// }
// const response1: APIResponse<string> = {
//   status: 200,
//   type: Rtype.FAILURE,
//   data: "Data fetched successfully",
// };
// console.log(response1);
// GENERICS
// interface APIResponse<T> {
//   status: number;
//   type: string;
//   data: T;
// }
// const response1: APIResponse<string> = {
//   status: 200,
//   type: "success",
//   data: "Data fetched successfully",
// };
// const addID = <
//   T extends {
//     name: string;
//     age: number;
//   }
// >(
//   obj: T
// ) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// let user = addID({
//   name: "Rakib",
//   age: 25,
//   country: "Bangladesh",
// });
// // let user = "Rakib";
// addID(user);
// import { Player } from './Classes/Player.js';
// import { IsPlayer } from './interface/IsPlayer.js';
//  const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
//  let shakib : IsPlayer;
// console.log(shakib.country);
//   const players: IsPlayer[] = [];
//  players.push(shakib);
//  players.push(mashrafi);
// interface RectangleOption{
//    width: number;
//    length: number;
// }
// function drawRectangle(options: RectangleOption) {
//    let width = options.width;
//    let length = options.length;
// }
// let threeDOptions: RectangleOption & { depth: number } = {
//    width: 20,
//    length: 30,
//    depth: 40
// };
// drawRectangle(threeDOptions)
// Lession 10 done
//   class  Player {
//     constructor (
//       private name: string,
//       public age: number,
//       readonly country: string,
//     ){}
//     play(){
//       console.log(`${this.name} from ${this.country} is playing !`);
//     }
//  }
//   const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
//   const shakib = new Player("Shakib", 36, "Bangladesh");
//   class  Player {
//     private name: string;
//     public age: number;
//     readonly country: string;
//     constructor(n:string, a:number, c:string) {
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }
//     play(){
//       console.log(`${this.name} from ${this.country} is playing !`);
//     }
//  }
//  const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
//  const shakib = new Player("Shakib", 36, "Bangladesh");
//  shakib.name = "Mashrafi"; // Error: Property 'name' is private and only accessible within class 'Player'.
//  shakib.age = 36;
//  shakib.country = "india"; // Allowed, as 'age' is public
//  const players: Player[] = [];
//  players.push(shakib);
//  players.push(mashrafi);
//  class  Player {
//     name: string;
//     age: number;
//     country: string;
//     constructor(n:string, a:number, c:string) {
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }
//     play(){
//       console.log(`${this.name} from ${this.country} is playing !`);
//     }
//  }
//  const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
//  const shakib = new Player("Shakib", 36, "Bangladesh");
//  const players: Player[] = [];
//  players.push(shakib);
//  players.push(mashrafi);
// 8 no video done
// let userDetails : (id:number | string, userInfo: {
//     name: string,
//      age: number
// }) => void;
// userDetails = (id: number | string, user:{
//     name: string;
//     age: number;
// }) => {
// }
// let calculation: (x: number, y:number, z: string) => number;
// calculation = (a:number, b:number, c:string)=>{
//     if(c === "add"){
//         return a + b;
//     }else{
//         return a - b;
//     }
// }
// console.log(calculation(5,7,"minus"));
// let add: (x:number, y: number)=> number;
// add = (a:number, b: number) =>{
//     return a+b;
// }
//07 video done
//Type Aliases
// TypeScript allows you to create type aliases using the `type` keyword.
// This can be useful for creating more readable and maintainable code.
// type stringOrNumber = string | number;
// type userType = {name: string; age: number};
// const userDetails = (id: stringOrNumber, user: userType) => {
//     console.log(`User ID: ${id}, name: ${user.name}, age: ${user.age}`);
// }
// const sayHello = (user: userType) => {
//     console.log(`Hello ${user.age > 50 ? "sir" : "Mr."}, ${user.name}`);
// }
// 6 no video done
// const myFunc = (a: number, b:number , c:string = "rakib"): string =>{
//     return a + b;
// }
// myFunc( 4, 7 ,"zaheen");
// const myFunc = (a: string, b:string , c:string = "rakib") =>{
//     console.log(c)//undefined
//     console.log(`Hello ${a} and ${b}`);
// }
// myFunc("Rakib", "Sumit" ,"zaheen");
// let myFunc: Function;
// myFunc = () =>{
//     console.log("Hello");
// }
// myFunc = 5; /not allowed
// let a: any[] = [];
// a.push("Bangladesh");
// a.push(25);
// let b:{
//     name:any,
//     age:any,
// }
// b = {
//     name: "rakib",
//     age: 25,
// }
// let a:any;
// a = 5;
// a = "rakib";
//normal variable
//  let b: string | number;
//  //array
//  let a: (string | number)[] = [];
//  b= "rakib";
//  a.push("sumit", 4, false)
// object
//  let c:{
//     name: string,
//     age: number,
//     adult: boolean,
//  }
//  c = {
//     name: "rakib",
//     age: 25,
//     adult:'true'
//  }
//Array
// let a:(string | number)[] = [];
// let a: string;
// let b: number;
// a = "Rakib";
// b = 25;
// let person = {
//     name: "Rakib",
//     age: 25,
//     isStudent: true,
//     hobbies: ["reading", "gaming", "coding"]
// }
// person.country = "Bangladesh";
//Array
// let mixed = ['apple', 45, true, {}];
// mixed.push({
//     name:"rakib"
// })
// let mixed = ['apple', 45, 'orange'];
// mixed.push(45);
// let fruits = ['apple', 'banana', 'orange'];
// fruits.push("grape");
//  function multiply(a : number,b :  number){
//     return a * b;
//  }
//  console.log(multiply(10, 5));
// let playerName ;
// playerName = "sakib";
// playerName = 34;
// console.log(playerName)
// let playerName = "Mashrafi";
// let age = 45;
// console.log(playerName);
// age = "Shakib";
// console.log(playerName);
// const country = "I love Bangladesh";
// console.log(country);
// console.log("Hello, TypeScript!");
//# sourceMappingURL=script.js.map