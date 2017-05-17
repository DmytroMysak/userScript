'use strict';
const rpio = require('rpio');

rpio.init({gpiomem: false});
rpio.spiChipSelect(0);
rpio.spiSetCSPolarity(0, rpio.LOW);
rpio.spiSetClockDivider(250);

const pinButton = 31;
//rpio.open(pinButton, rpio.INPUT, rpio.PULL_DOWN);
let state  = {
  press: 0,
  isOn: 0
};
let bigBrotherWatch = () => {
  const val = rpio.read(pinButton);
  ++state.press;
  state.isOn = val;
  console.log(`state changed: press:${state.press} isOn:${state.isOn}`);
};
rpio.poll(pinButton, bigBrotherWatch);

let transferSPI = (sendData) => { // sendData --> see datasheet of mcp3008 p.19
  let tx =  new Buffer(sendData);
  let rx = new Buffer(4);
  rpio.spiBegin();
  rpio.spiSetDataMode(0);
  rpio.spiTransfer(tx, rx, tx.length);
  rpio.spiEnd();
  return rx;
};

let test = () => {
  let i = 0;
  while (i < 20) {
    let getData = transferSPI([0x1, 0x0, 0x0, 0x0]);
    console.log(getData);
    ++i;
    rpio.sleep(1);
  }
};
test();