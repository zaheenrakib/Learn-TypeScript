import { Player } from './Classes/Player.js';
const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const shakib = new Player("Shakib", 36, "Bangladesh");
console.log(shakib.age);
console.log(shakib.country);
const players = [];
players.push(shakib);
players.push(mashrafi);
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
}
drawRectangle({
    width: 20,
    length: 30
});
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