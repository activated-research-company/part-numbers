const paSysEfc = require('./pa-sys-efc');
const paSysMfc = require('./pa-sys-mfc');
const paSysNfc = require('./pa-sys-nfc');
const paSub42d = require('./pa-sub-42d');
const paKitStd = require('./pa-kit-std');
const paCasB07 = require('./pa-cas-b07');
const paRrtPt1 = require('./pa-rrt-pt1');
const paKitP44 = require('./pa-kit-p44');
const paMfcb09 = require('./pa-mfc-b09')
const paKitFcm = require('./pa-kit-Fcm');
const paKitCom = require('./pa-kit-Com');
const paCotR31 = require('./pa-cot-r31');
const paCasA09 = require('./pa-cas-a09');

const parts = [
  paSysEfc,
  paSysMfc,
  paSysNfc,
  paSub42d,
  paKitStd,
  paRrtPt1,
  paKitP44,
  paCasB07,
  paMfcb09,
  paKitFcm,
  paKitCom,
  paCotR31,
  paCasA09,
];

module.exports = parts;
