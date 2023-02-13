/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let res = 0;

    if(0 >= low <= high >= 10 ** 9){
        console.log("constraint error")
        return 
    }
    for(var i = low; i <= high ; i++){
        if(i % 2 !== 0){
            res++;
            //console.log(i)   
        }
            
    }
    // console.log(res)
    return res;
            
};
