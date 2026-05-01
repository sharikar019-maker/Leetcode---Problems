/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {

    let root = Math.sqrt(n);

    if(!Number.isInteger(root)){
        return false;
    }

    for(let i = 2; i < root; i++){
        if(root % i === 0){
            return false;
        }
    }

    return root > 1;
};