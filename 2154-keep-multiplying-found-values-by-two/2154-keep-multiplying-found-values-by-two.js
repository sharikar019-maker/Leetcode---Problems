/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    const sum  =new Set (nums)
    while(sum.has(original)){
         original = original*2
    }
   
return original
};