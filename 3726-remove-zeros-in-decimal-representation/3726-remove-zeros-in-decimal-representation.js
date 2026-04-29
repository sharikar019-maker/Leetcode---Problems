/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
  let str = n.toString()
  let result =[]
  for(let i=0;i<str.length;i++){
    if(str[i]!=='0'){
        result.push(str[i])
    }
  }
  return Number(result.join(''))
};


