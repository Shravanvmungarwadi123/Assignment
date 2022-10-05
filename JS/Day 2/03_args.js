let arr='';
function numArgs(){
    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
    arr = arguments;
}
numArgs(2,5,7,9);
console.log("The number of arguments passes are "+arr.length);