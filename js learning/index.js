//if statement....
let color = "Green"

if (color === "red") {
    console.log("stop! Color is red");
}

else if (color === "Yellow") {
    console.log("Start! Color is Yellow");
}

else if (color === "Green") {
     console.log("Go! Color is Green");
}

//if else statement....
let marks="20";

if(marks >= "80"){
    console.log("A+");
}

else if(marks >= "70"){
    console.log("A")
}

else if(marks >= "60"){
    console.log("B+")
}

else if(marks === "50"){
    console.log("B")
}

else if(marks <="50"){
    console.log("Get out of my school!!!")
}


//Example of if , else andif else.... 
let popcorn="f";

if(popcorn === "XL"){
    console.log("Price is Rs.250")
}

else if(popcorn === "L"){
    console.log("price is RS.200")
}

else if(popcorn === "M"){
    console.log("price is RS.150")
}

else if(popcorn === "S"){
    console.log("price is RS.100")
}

else{
    console.log("Popcorn not available")
}

//Nested if else 
let marks1="66";

if(marks1>=33){
    console.log("Pass")
    
    if(marks1>=80){
        console.log("A+")
    }
   else{
        console.log("A")
    }
}
   else{
    console.log("Better luck next time!")
}


//Example:----
let latter="aaade";

if((latter[0] === 'a')&&(latter.length>3)){
    console.log("Good!");
}else{
    console.log("Not Good!")
}


//Example of switch case...
let day = 6;

switch(day){
    case 1: 
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;
      
    case 4:
        console.log("Thursday");
        break;

    case 5:
         console.log("Friday");
         break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        consol.log("Sunday");
        break;

    default:
        console.log("No Day")
}


//alert("This is simple error!");

/*let firstName = prompt("Enter your name");
let lastName = prompt("Enter your last name")
console.log(firstName,lastName);*/


let message = "Danbilzerian";


message.indexOf("bil");

message.indexOf("D");



