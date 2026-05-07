/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
    const stack = [];
    const nextGreaterMap = {};
    
    for (let num of nums2) {
      
        while (
            stack.length > 0 &&
            num > stack[stack.length - 1]
        ) {
            const smaller = stack.pop();
            nextGreaterMap[smaller] = num;
        }

        stack.push(num);
    }

        while (stack.length > 0) {
        const num = stack.pop();
        nextGreaterMap[num] = -1;
    }
        return nums1.map(num => nextGreaterMap[num]);
}