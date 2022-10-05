function args(...a){
    sum = 0;
    for (const x of a){
        sum += x;
    }
    console.log(sum)
}
args()