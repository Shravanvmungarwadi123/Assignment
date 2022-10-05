var array=[1,2,3,4,5,6,7,8,9,10];
//var size=10;
// var size = prompt("Enter the size of array");
// for(var a=0;a<10;a++){
//      array[a] = prompt("Enter the array element");
//  }
function evenSum(arr1){
    result=0;
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]%2==0){
            result=result+arr1[i];
        }
    }
    if(result==0){
        console.log("no even numbers found");
    }
    return result
}
console.log(evenSum(array));