'use strict';

const NPMreq = require('request');

let Stock = {
  get(symbol, cb){
    NPMreq(`http://dev.markitondemand.com/Api/v2/Quote/json?symbol=${symbol}`, (err, res, body) => {
      if(err || res.statusCode !== 200) return cb(err || `ERROR: ${res.statusCode}`);
      return cb(null, res.statusCode, body);
    });
  }
}
module.exports = Stock;
