// let pass = 123;
// let c_pass = 123;

// if (pass == c_pass) {
//   text = "Submitted";
// } else {
//   text = "Password must be matched";
// }

// let age = 20;
// let city = "FSD";

// let text = !(age >= 18) ? "Age must be 18" : (city !== "FSD") ? "Not Eligible" : "Eligible";

// let price  = 25;
// let discount;
// let isMember = true;

// discount = isMember ? 50/100 : 0;

// let text = 25 - (discount * price);

// let day;
// let date = new Date().getDay();

// switch(date){
//     case 1:
//     day = "Monday";
//     break;

//     case 2:
//     day = "Tuesday";
//     break;

//     case 3:
//     day = "Wednesday";
//     break;

//     case 4:
//     day = "Thursday";
//     break;

//     case 5:
//     day = "Friday";
//     break;

//     case 6:
//     day = "Saturday";
//     break;

//     case 7:
//     day = "Sunday";
// }

// let text;

// if (day == "Friday") {
//     text = "Submitted";
// }

// let text = "";
// let table = 5;
// let i = 1;

// while (i <= 10) {
//   const element = i * table;
//   text += table + " x " + i + " = " + element + "<br>";
//   i++;
// }


const person = function(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.defaultCity = "FSD";
}

const person1 = new person("John", "Doe", 30);
const person2 = new person("Mary", "Doe", 25);
const person3 = new person("Ali", "Khan", 28);

document.getElementById("result").innerHTML = person1.firstName + " is " + person1.age + " years old." + " lives in " + person1.defaultCity + ".";
document.getElementById("result1").innerHTML = person2.firstName + " is " + person2.age + " years old." + " lives in " + person2.defaultCity + ".";
document.getElementById("result2").innerHTML = person3.firstName + " is " + person3.age + " years old." + " lives in " + person3.defaultCity + ".";


// document.getElementById("result").innerHTML = person.firstName + " is " + person.age + " years old.";



// myFunction computes the product of a and b


// function class1(a, b) {
//   return a * b;   // returns the product of a and b
// }

// class1 = (a,b,c,d) => a*b + c*d;

// let result = class1(4, 3);
// document.getElementById("result").innerHTML = "The product is: " + result;


