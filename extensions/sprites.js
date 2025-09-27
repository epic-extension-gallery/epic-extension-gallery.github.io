(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "EPICsprites",
        name: "Sprites",
        color1: "#0061f3ff",
        blocks: [
          {
            opcode: 'thisSprite',
            text: 'This Sprite',
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.LEAF,
            disableMonitor: true
          },
          {
            opcode: 'moveSprite',
            text: 'Move [S] to x:[X]y:[Y]',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              S: {
                shape: Scratch.BlockShape.LEAF,
                type: Scratch.ArgumentType.LEAF
              },
              X: {
                type: Scratch.ArgumentType.NUMBER
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER
              },
            }
          },
          {
            opcode: 'turnrightSprite',
            text: 'Turn [S] right by [R]',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              S: {
                shape: Scratch.BlockShape.LEAF,
                type: Scratch.ArgumentType.LEAF
              },
              R: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'turnleftSprite',
            text: 'Turn [S] left by [R]',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              S: {
                shape: Scratch.BlockShape.LEAF,
                type: Scratch.ArgumentType.LEAF
              },
              R: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'sizeSprite',
            text: 'Set size of [S] to [SIZE]',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              S: {
                shape: Scratch.BlockShape.LEAF,
                type: Scratch.ArgumentType.LEAF
              },
              SIZE: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'rotateSprite',
            text: 'Set direction of [S] to [R]',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              S: {
                shape: Scratch.BlockShape.LEAF,
                type: Scratch.ArgumentType.LEAF
              },
              R: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'getdirectionSprite',
            text: 'Get rotation of [S]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              S: {
                shape: Scratch.BlockShape.LEAF,
                type: Scratch.ArgumentType.LEAF
              }
            }
          },
          {
            opcode: 'getxSprite',
            text: 'Get x of [S]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              S: {
                shape: Scratch.BlockShape.LEAF,
                type: Scratch.ArgumentType.LEAF
              }
            }
          },
          {
            opcode: 'getySprite',
            text: 'Get y of [S]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              S: {
                shape: Scratch.BlockShape.LEAF,
                type: Scratch.ArgumentType.LEAF
              }
            }
          },
          {
            opcode: 'getsizeSprite',
            text: 'Get size of [S]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              S: {
                shape: Scratch.BlockShape.LEAF,
                type: Scratch.ArgumentType.LEAF
              }
            }
          },
          {
            opcode: 'logSprite',
            text: 'Log [S] to console (for extension development)',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              S: {
                shape: Scratch.BlockShape.LEAF,
                type: Scratch.ArgumentType.LEAF
              }
            }
          },
        ]
      };
    }

    thisSprite(args, utils) {
      return utils.target
    }

    moveSprite(args, utils) {
      if (args.S != null) {
        args.S.setXY(args.X, args.Y);
      }
    }

    turnrightSprite(args, utils) {
      if (args.S != null) {
        args.S.setDirection(args.S.direction + args.R);
      }
    }

    turnleftSprite(args, utils) {
      if (args.S != null) {
        args.S.setDirection(args.S.direction - args.R);
      }
    }

    sizeSprite(args, utils) {
      if (args.S != null) {
        args.S.setSize(args.SIZE);
      }
    }

    rotateSprite(args, utils) {
      if (args.S != null) {
        args.S.setDirection(args.R);
      }
    }

    getdirectionSprite(args, utils) {
      if (args.S != null) {
        return args.S.direction
      }
    }

    getxSprite(args, utils) {
      if (args.S != null) {
        return args.S.x
      }
    }

    getySprite(args, utils) {
      if (args.S != null) {
        return args.S.y
      }
    }

    getsizeSprite(args, utils) {
      if (args.S != null) {
        return args.S.size
      }
    }

    logSprite(args, utils) {
      if (args.S != null) {
        console.log(args.S);
      }
    }


  }

  Scratch.extensions.register(new Extension());
})(Scratch);