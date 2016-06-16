'use strict';

let MATH = {
  sum(nums){
    return nums.split('').map(Number).reduce((tot, num) => tot + num);
  },
  square(num){
    return Math.pow(parseInt(num), 2);
  },
  cube(num){
    return Math.pow(parseInt(num), 3);
  },
  root(num){
    return Math.sqrt(parseInt(num));
  }
};

module.exports = MATH;
