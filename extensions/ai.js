(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "EPICai",
        name: "AI",
        color1: "#00cfd6ff",
        blocks: [
          {
            opcode: 'quickask',
            text: 'Quick Ask [QUERY]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              QUERY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello!'
              }
            }
          },
          {
            opcode: 'makeimage',
            text: 'Make Image [QUERY]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              QUERY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'a yellow house'
              }
            }
          },

        ]
      };
    }

    async quickask(args) {
      if (args.QUERY != null) {
        const data = await fetch("https://text.pollinations.ai/" + encodeURIComponent(args.QUERY) + "?private=true")
        const result = await data.text()
        return result
      } else {
        return ""
      }
    }

    async makeimage(args) {
      if (args.QUERY != null) {
        const data = await fetch("https://image.pollinations.ai/prompt/" + encodeURIComponent(args.QUERY) + "?private=true&safe=true&nologo=true")
        const blob = await data.blob()
        let dataUrl = await new Promise(resolve => {
          let reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
        return dataUrl
      } else {
        return ""
      }
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);