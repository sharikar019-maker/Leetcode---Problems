/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {

    let elementSum = 0;
    let digitSum = 0;

    for (let num of nums) {

        elementSum += num;

        let str = num.toString();

        for (let ch of str) {
            digitSum += Number(ch);
        }
    }

    return Math.abs(elementSum - digitSum);
};