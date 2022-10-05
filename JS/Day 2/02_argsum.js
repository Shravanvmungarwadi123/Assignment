function sumArgs() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return console.log("Sum is " + sum);
    if (sum == 0) {
        return console.log("the sum is 0");
    }
}
sumArgs(2,3);