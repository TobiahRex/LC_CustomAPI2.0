'use strict';

let MATH = {
  square(num){
    return Math.pow(parseInt(num), 2);
  },
  cube(num){
    return Math.pow(parseInt(num), 3);
  },
  power(nums){
    return Math.pow(parseInt(nums[2]), nums[3]);
  },
  root(num){
    return Math.sqrt(parseInt(num));
  },
  sum(nums){
    return nums.split('').map(Number).reduce((tot, num) => tot + num);
  },
  subtract(nums){
    return nums[2] - nums[3];
  },
  multiply(nums){
    return nums[2]*nums[3];
  },
  div(nums){
    return nums[2]/nums[3];
  }
};

module.exports = MATH;
