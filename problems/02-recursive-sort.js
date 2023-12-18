/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    
*/

function sort(nums, final = []) {
    // Your code here 
    if (nums.length == 0) return final;

    let largest = -Infinity;
    let indexOfLargest = 0;

    for(let i = 0; i < nums.length;i++){
        if (largest < nums[i]){
            largest = nums[i];
            indexOfLargest = i;
        }
    }

    nums.splice(indexOfLargest,1);
    final.unshift(largest);
    return sort(nums,final);
    
}

// console.log(sort([])) // prints []
// console.log(sort([9])) // prints [9]
// console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
// console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}