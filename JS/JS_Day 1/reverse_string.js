function reverseString(str){
    let newString="";
    for(let i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    return newString;
}
let string = prompt("Enter the string to be reversed")
let res = reverseString(string);
document.write("reversed string is "+res);