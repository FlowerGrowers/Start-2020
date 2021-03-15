const path = require('path');

// const random = Math.random() < 0.5 ? 'c' : 'b';
// const res = path.join(__dirname, '/', random);

// console.log(res);

// const dm = require(res);

// console.log(dm);

const fs = require('fs');
const res = path.join(__dirname, 'test.json');
const data = { name: 'cc' };
fs.writeFileSync(res, JSON.stringify(data));
console.log(require(res));
