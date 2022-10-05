var array=[];
for(var a=0;a<5;a++){
    array[a] = prompt("Enter the array element");
}
function factorial(arr1){
    fact_arr=[];
    for(let i=0;i<arr1.length;i++){
        fact=1;
        for(let j=arr1[i];j>0;j--){
            fact=fact*j;
        }
        fact_arr.push(fact);
    }
    console.log(fact_arr);
}
factorial(array);