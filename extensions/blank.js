(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "extension id",
        name: "Extension Name",
        color1: "#004b2cff",
        blocks: [
          {
            opcode: 'block_id',
            text: 'block name',
            blockType: Scratch.BlockType.COMMAND
          }
        ]
      };
    }

    block_id() {
      // some code runs here
    }


  }

  Scratch.extensions.register(new Extension());
})(Scratch);