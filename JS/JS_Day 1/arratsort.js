var array=[];
for(var a=0;a<5;a++){
    array[a] = prompt("Enter the array element");
}
let array =[10,20,30,40,50];
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        let temp=0;
        if(array[i]<=array[j]){
            temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }
    }
}
document.write(array);