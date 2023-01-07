console.log('hello world');
let num = "brother"
let num2=num.toUpperCase()
console.log(num2)

let counting =document.getElementById("zero");
let count = 0;
function increase (){
    count= count + 1 ;
    counting.innerText= count;
    console.log(count);  
}
increase();

function decrease (){
    count = count-1;
    counting.innerText=count;
    console.log(count)
}

 function save (){
    console.log(count);
 }

//  class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age() {
//       let date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }
  
//   let myCar = new Car("Ford", 2014);
//   let myMotor = new Car ("nexus",2009);
//   document.getElementById("check").innerHTML =
//   "My car is " + myMotor.age() + " years old.";



// let Map= num.map(
//     function add( value) {
//         value.toUpperCase()
//     }

// console.log(Map)
// document.getElementById("name").innerText= "good morning my neighbour";
