const midi = require("ble_midi");
midi.init();

const CHANNEL = 10;
const CONTROLLER = 80;

setWatch(function(e) {
  LED2.set();
  midi.send(CHANNEL, CONTROLLER, 127);
}, BTN, {edge:"rising", debounce:10, repeat:true});

setWatch(function(e) {
  LED2.reset();
  midi.send(CHANNEL, CONTROLLER, 0);
}, BTN, {edge:"falling", debounce:10, repeat:true});
