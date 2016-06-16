'use strict';

const PORT = 8000;
const http = require('http');
const MathAPI = require('./APIservices/math.js');

const server = http.createServer((req, res) => {

  console.log(req.url);

  let params = req.url.split('/');

  // switch(params[2]){
  //   case 'sum' : res.write(`SUM = ${MathAPI.sum(params[3])}`)
  // }













});
server.listen(PORT, err => {
  console.log(err || `Server on ${PORT}`);
})
