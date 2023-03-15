// console.log("A before "+a);
//  var a =6;
//  console.log("after A "+a);



// var a = [45,5,9,2];

//  function test(val){
//     console.log(" val before = "+val);
//     val[2] = 12;
//     console.log(" val before = "+val);

//  }
//  test(a);
//  console.log("A after = "+a);

 function factorial (n){
    if (n <= 1){
        return 1;
    }
    else{
        return  n*factorial(n-1);
    }
 }
 console.log(factorial(3));
 console.log(factorial(6));