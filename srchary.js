var arr = [12,34,45,54,67,84,98,786,34];
var input = parseInt(prompt("Enter number to find"));
console.log("user input " ,input);
var found = false;

for(var i=0;i<arr.length;i++){
    // console.log(arr[i]);
    if(arr[i] === input){
        console.log("found "+input+"on index = "+i);
        found = true;
        break;
    }
    if(!found){
        console.log("Not found");
    }
}