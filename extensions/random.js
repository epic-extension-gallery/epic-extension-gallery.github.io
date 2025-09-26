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
          },
          {
            opcode: 'randomletter',
            text: 'Random Letter',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true
          },
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

    randomletter() {
      const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
      return letters[Math.round(Math.random() * 26)]
    }


  }

  Scratch.extensions.register(new Extension());
})(Scratch);