'use strict';

const moment = require('moment');

let Moment = {
  now(){
    return moment().format('LTS');
  },
  today(){
    return moment().format('LL');
  }
};

module.exports = Moment;
