// var a = 'Hello world';
// alert(a.length);

// // Escape charaters

// var a = "hello world";
// var b = "Hello \tworld";
// var c = " hello\nworld";
// console.log(a);
// console.log(b);
// console.log(c);

// // String funcrtions
// //  toLowerCase()function
// var food = "saNDWItch"
// var updatedFood = food. toLowerCase();
// console.log(food);
// console.log(updatedFood);

// // toUpperCase
// var updatedFood = food. toUpperCase();
// console.log(updatedFood);
//   var food = "Pizza";
//   var input = "pizza";
//   if(food === input){
//     console.log("Match");
    
//     }
//   else {
//     console.log("Not Match");
//   }
//   if(food.toLowerCase() === input.toLowerCase()){
//     console.log("Match");
    
//     }
//   else {
//     console.log("Not Match");
//   }

//                    //   slice in String

// var a = "Hello World";
// var b = a.slice(6,9);
// console.log(b);
// // for negative characters
// var a = "Hello World";
// var b = a.slice(-5,-2);
// console.log(b);

// // indexOf function
// var a = " to be or not to be ";
// var b = a. indexOf("be");
// console.log(b);
// var c = a.indexOf("be", 10);
// console.log(c);

// // for lastIndexOf

// var a = " to be or not to be ";
// var b = a. lastIndexOf("not");
// console.log(b);

//          // Unix time
         
// var date = new Date();
// // date.getTime();
// console.log(date);


         // for Retreiving and Modifyng Date

        //  var date = new Date();
        //  console.log(date);

        //  console.log(date.getDay());
        //  console.log(date.getMonth());
        //  console.log(date.getFullYear());

        //  date.setFullYear(2025);
        //  console.log(date);

        //  var daysList = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
        //  var date =new Date("june 14 2022 10:45:25");
        //  var day = date.getDay();
        //  var nameOfDay = daysList[day];

                  // calculate time difference
var d1 = new Date ("June 14 2019 10:45:25");
var d2 = new Date ("June 28 2019 10:45:25");
var timeDiff = d2.getTime() - d1.getTime();
var days = timeDiff / (1000 * 60 * 60 * 24);
console.log(days);