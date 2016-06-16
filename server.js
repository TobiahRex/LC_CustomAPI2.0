'use strict';

const PORT      = 3000;
const http      = require('http');
const fs        = require('fs');
const path      = require('path');
const MathAPI   = require('./APIservices/math.js');
const DateAPI   = require('./APIservices/date.js');
const StockAPI  = require('./APIservices/stock.js');

const server = http.createServer((req, res) => {
  res.write(fs.readFileSync(path.join(__dirname, 'APIservices/description.txt'), 'utf8'));
  let params = req.url.split('/');
  console.log(params);
  console.log(req.url);

  switch(params[1]){
    case 'square' :
    res.write(`\n\nYour request = ${req.url}\n\nSQUARE = ${MathAPI.square(params[2])}`);
    res.end();
    break;
    case 'cube'   :
    res.write(`\n\nYour request = ${req.url}\n\nCUBE = ${MathAPI.cube(params[2])}`);
    res.end();
    break;
    case 'root'   :
    res.write(`\n\nYour request = ${req.url}\n\nSQUARE ROOT = ${MathAPI.root(params[2])}`);
    res.end();
    break;
    case 'power'  :
    res.write(`\n\nYour request = ${req.url}\n\nNTH POWER = ${MathAPI.power(params)}`);
    res.end();
    break;
    case 'sum'    :
    res.write(`\n\nYour request = ${req.url}\n\nSUM = ${MathAPI.sum(params[2])}`);
    res.end();
    break;
    case 'minus'  :
    res.write(`\n\nYour request = ${req.url}\n\nDIFFERENCE = ${MathAPI.subtract(params)}`);
    res.end();
    break;
    case 'multiply':
    res.write(`\n\nYour request = ${req.url}\n\nPRODUCT = ${MathAPI.multiply(params)}`);
    res.end();
    break;
    case 'divide' :
      res.write(`\n\nYour request = ${req.url}\n\nQUOTIENT = ${MathAPI.div(params)}`);
      res.end();
      break;
    case 'now'    :
      res.write(`\n\nYour request = ${req.url}\n\nCURRENT TIME = ${DateAPI.now()}`);
      res.end();
      break;
    case 'today'  :
      res.write(`\n\nYour request = ${req.url}\n\nCURRENT DATE = ${DateAPI.today()}`);
      res.end();
      break;
    case 'quote'  :
      StockAPI.get(params[2], (err, status, info) => {
        if(err || status !== 200) {
          res.write(`ERROR: That Symbol (${params[2]}) Does Not Exist. Try Again.`);
          res.end();
        }
        res.write(`STOCK INFO: \n${info}`);
        res.end();
      });
      break;
    default       :
      res.write(`${params} : Does not Match Any Services Available.`);
      res.end();
  };

});
server.listen(PORT, err => {
  console.log(err || `Server on ${PORT}`);
})
