(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "EPICpenguinapi",
        name: "PenguinAPI",
        color1: "#00B3FF",
        blocks: [
          {
            opcode: 'isViewable',
            text: 'is [USER] viewable?',
            blockType: Scratch.BlockType.BOOLEAN,
            arguments: {
              USER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "griffpatch"
              }
            }
          },
        ]
      };
    }

    async isViewable(args) {
      try {
        const request = await fetch(`https://projects.penguinmod.com/api/v1/users/profile?target=${encodeURI(args.USER)}`)
        const json = await request.json()
        if (typeof json.error === 'undefined') {
          return (!json.privateProfile)
        } else {
          return false
        }
      } catch (error) {
        return false
      }
    }


  }

  Scratch.extensions.register(new Extension());
})(Scratch);