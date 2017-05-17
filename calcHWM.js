// version 0.1
'use strict';

const ReadlineSync = require('readline-sync');
const fs = require('fs');


const count = (buy, sell, count) => {
  const res = count*(sell - buy);
  return `Profit: ${res}`;
};

let data = '';
while (true) {
  data = ReadlineSync.question('Enter text: ');
  data = data.split(' ');
  console.log(count(data[0], data[1], data[2]));
}
