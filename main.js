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


let day;
let date = new Date().getDay();

switch(date){
    case 1:
    day = "Monday";
    break;
    
    case 2:
    day = "Tuesday";
    break;
    
    case 3:
    day = "Wednesday";
    break;
    
    case 4:
    day = "Thursday";
    break;
    
    case 5:
    day = "Friday";
    break;
    
    case 6:
    day = "Saturday";
    break;
    
    case 7:
    day = "Sunday";
}

let text;

if (day == "Friday") {
    text = "Submitted";
}


document.getElementById("result").innerHTML = text;
