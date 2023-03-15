// for ( var i=5; i>3; i-- ) {
//     console.log(i);
// }

// for(var i=1; i<=11; i++){
//     console.log(33);
// }
// var num = parseInt (prompt("Plesae Enter Your Number")); 
// for(var i=1;i <=12;i++){
//     console.log(num+"x"+i+"="+(num*i));
// }
for (var i = 0; i < 8; i++){
    if(i==5){break;}
    console.log("I = "+i);
}
for (var i=0; i <8; i++){
    if(i==10){continue}
    console.log("I = "+i);
}
var num = parseInt(prompt("Please enter number"));
var isPrime = true;

for(var i=2;i<num; i++){
    var result = num % i;
    if (result == 0){
        console.log("Number is not Prime = "+num +" I "+i);
        isPrime = false;
        break;
    }
    if (isPrime){
        console.log("Number is prime "+num);
    }
}