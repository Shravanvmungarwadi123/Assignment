function factorial(number){
    var result = number;
    if(number === 0 || number ===1){
        return console.log("factorial is 1");
    }
    while (number>1){
        number--;
        result*=number;
    }
    return console.log("factorial is "+result);
}
factorial(5);