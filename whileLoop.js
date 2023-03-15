var i = 0;
 
while(i<5){
    console.log("I = "+i);
    i++;
}

var i = 0;

do {
    console.log("I = "+i);
    i++;
}
while(i<0);


var doContinue = true;

while(doContinue){
    console.log("Hello");

    var input = prompt("Please enter Y to run again or any key to stop");
    if(input.toLowerCase() !== "y"){
        doContinue = false;
    }
}