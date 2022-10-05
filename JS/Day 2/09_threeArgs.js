function maxArgs(arg1, arg2, arg3) {
    arg2 = arg1[1];
    arg3 = arg1[2];
    arg1 = arg1[0];
    console.log(arg3);
    if (arg1 > arg2 && arg1 > arg3) {
        return console.log("the maximum number is " + arg1);
    }
    else if (arg2 > arg1 && arg2 > arg3) {
        return console.log("the maximum number is " + arg2);
    }
    else {
        return console.log("the maximum number is " + arg3);
    }
}
const array = [1, 2, 3];
maxArgs(array);
