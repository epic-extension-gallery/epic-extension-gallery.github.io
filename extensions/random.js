(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "EPICrandom",
        name: "Random Utils",
        color1: "#59c059",
        blocks: [
          {
            opcode: 'randomboolean',
            text: 'Random',
            blockType: Scratch.BlockType.BOOLEAN,
            disableMonitor: true
          },
          {
            opcode: 'randomdecimal',
            text: 'Random Decimal',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true
          }
        ]
      };
    }

    randomboolean() {
      if (Math.round(Math.random()) == 1) {
        return true
      } else {
        return false
      }
    }

    randomdecimal() {
      return Math.random()
    }


  }

  Scratch.extensions.register(new Extension());
})(Scratch);