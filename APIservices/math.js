'use strict';

let MATH = {
  sum(nums){
    return nums.split('').map(Number).reduce((tot, num) => tot + num);
  }
};

module.exports = MATH;
