var n = 7312140905;
function repeatDigits(n){
    var result=0;
    var count = Array(10).fill(0);
    while(n>0){
        var rem=n%10;
        count[rem]++;
        n=Math.floor(n/10);
    }
    for(var i=0;i<10;i++){
        if(count[i]>1){
            result++;
        }
    } 
    return result;
}
document.write(repeatDigits(n));