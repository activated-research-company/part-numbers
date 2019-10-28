const paSysEfc = require('./pa-sys-efc');
const paSysMfc = require('./pa-sys-mfc');
const paSysNfc = require('./pa-sys-nfc');
const paSub42d = require('./pa-sub-42d');
const paSub43t = require('./pa-sub-43t');
const thermoThermoPacked = require('./thermo-thermo-packed');
const paKitStd = require('./pa-kit-std');
const paRrtPt1 = require('./pa-rrt-pt1');
const paKitP44 = require('./pa-kit-p44');
const paSub42z = require('./pa-sub-42z');
const paKitInl = require('./pa-kit-inl');
const paRrtPt2 = require('./pa-rrt-pt2');
const paKitP46 = require('./pa-kit-p46');
const paCasB07 = require('./pa-cas-b07');
const paMfcB09 = require('./pa-mfc-b09');
const paKitFcm = require('./pa-kit-fcm');
const paKitThr = require('./pa-kit-thr');
const paKitCom = require('./pa-kit-com');
const paPltVlv = require('./pa-plt-vlv');
const paHtrCtr = require('./pa-htr-ctr');
const paCotR31 = require('./pa-cot-r31');
const paCasA09 = require('./pa-cas-a09');

const parts = [
  paSysEfc,
  paSysMfc,
  paSysNfc,
  paSub42d,
  paSub43t,
  thermoThermoPacked,
  paKitStd,
  paKitThr,
  paRrtPt1,
  paKitP44,
  paSub42z,
  paKitInl,
  paRrtPt2,
  paKitP46,
  paCasB07,
  paMfcB09,
  paKitFcm,
  paKitCom,
  paPltVlv,
  paHtrCtr,
  paCotR31,
  paCasA09,
];

module.exports = parts;
