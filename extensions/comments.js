(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "EPICcomments",
        name: "Comments",
        color1: "#ffd900ff",
        blocks: [
          {
            opcode: 'commentstatement',
            text: '//[C]',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello!'
              }
            }
          },
          {
            opcode: 'commentreporter',
            text: '//[C]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello!'
              }
            }
          },
          {
            opcode: 'commentboolean',
            text: '//[C]',
            blockType: Scratch.BlockType.BOOLEAN,
            arguments: {
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello!'
              }
            }
          },
          {
            opcode: 'commentbooleanpassthrough',
            text: '//[C][V]',
            blockType: Scratch.BlockType.BOOLEAN,
            arguments: {
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Put true or false here >'
              },
              V: {
                type: Scratch.ArgumentType.BOOLEAN
              }
            }
          },
          {
            opcode: 'commentreporterpassthrough',
            text: '//[C][V]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              C: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Put a variable with name here >'
              },
              V: {
                type: Scratch.ArgumentType.REPORTER
              }
            }
          },
        ]
      };
    }

    commentstatement() {
          
    }

    commentreporter() {
      return "";
    }

    commentboolean() {
      return false;
    }

    commentbooleanpassthrough(args) {
      return args.V
    }

    commentreporterpassthrough(args) {
      return args.V
    }


  }

  Scratch.extensions.register(new Extension());
})(Scratch);