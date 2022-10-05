var array=[];
var size = prompt("Enter the size of array");
for(var a=0;a<size;a++){
    array[a] = prompt("Enter the array element");
}

var firstNum=0;
var secondNum=0;
for(var i=0;i<array.length;i++){
    var currentNum=array[i];
    if(firstNum<currentNum){
        secondNum=firstNum;
        firstNum=currentNum;
    }
    else if(secondNum<currentNum){
        secondNum=currentNum;
    }
}
document.write("array is "+array,"</br>");
document.write("first greatest number is "+firstNum,"</br>");
document.write("second greatest number is "+secondNum,"</br>");