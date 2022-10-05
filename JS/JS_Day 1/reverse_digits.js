let rev = 0;
let num = prompt("Enter the number to be reversed");
let x;
while(num!=0){
    x=num%10;
    rev=rev*10+x;
    num=Math.floor(num/10);
}
document.write("reverse is "+rev);