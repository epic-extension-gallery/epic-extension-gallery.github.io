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
            text: 'Quick Say [QUERY]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              QUERY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello!'
              }
            }
          },
          {
            opcode: 'askwithprompt',
            text: 'Say [QUERY] With a Prompt [PROMPT] with model [MODEL]',
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              QUERY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hello!'
              },
              PROMPT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'you only speak in dog sounds'
              },
              MODEL: {
                type: Scratch.ArgumentType.STRING,
                menu: 'MODELS'
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

        ],
        menus: {
          MODELS: {
            acceptReporters: true,
            items: ['openai', 'openai-fast', 'mistral']
          }
        }
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

    async askwithprompt(args) {
      if (args.QUERY != null) {
        const data = await fetch("https://text.pollinations.ai/openai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "model": `${args.MODEL}`,
            "messages": [
              {
                "role":"system",
                "content": `${args.PROMPT}`
              },
              {
                "role":"user",
                "content": `${args.QUERY}`
              }
            ],
            "private": true
          }),
        })
        const result = await data.json()
        return result['choices'][0]['message']['content']
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