(function(Scratch) {
  'use strict';
  class Extension {
    constructor() {
      if (typeof Scratch.vm._epicdata == "undefined") {
        console.log("no epicdata");
        Scratch.vm._epicdata = {};
      }
      Scratch.vm._epicdata.EPICevents = {};
      Scratch.vm._epicdata.EPICevents.button = "_NOBUTTONCLICKED_"
    }
    getInfo() {
      
      return {
        id: "EPICevents",
        name: "Additional Events",
        color1: "#FFBF00",
        blocks: [
          {
            opcode: 'whenmouseclicked',
            text: 'When mouse clicked anywhere',
            blockType: Scratch.BlockType.EVENT,
            isEdgeActivated: false
          },
          {
            opcode: 'whenbuttonclicked (buggy)',
            text: 'When button with id [ID] clicked',
            blockType: Scratch.BlockType.EVENT,
            isEdgeActivated: false,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING
              },
            }
          },
          {
            opcode: 'createButton (buggy)',
            text: 'Create button with id:[ID]image:[IMG]',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING
              },
              IMG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/dango.png'
              }
            }
          }
        ]
        
      };
      
    }

    createButton(args) {
      const button = document.createElement('img');
      button.style.width = "2rem";
      button.style.height = "2rem";
      button.style.padding = "0.375rem";
      button.src = args.IMG
      button.id = args.ID
      button.onclick = function() {
        callCustomButton(this.id);
        console.log("button pressed");
      }
      const buttoncontainter = document.getElementsByClassName("controls_controls-container_2xinB")[0];
      buttoncontainter.appendChild(button);
    }

    whenbuttonclicked(args) {
      if (true) { // when i try to delete it i have some random bracket so useless if
        const button = Scratch.vm._epicdata.EPICevents.button
        if (args.ID == button) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    }
  }

  

  document.addEventListener('click', (e) => {
    Scratch.vm.runtime.startHats('EPICevents_whenmouseclicked');
  });

  function callCustomButton(id){
    Scratch.vm._epicdata.EPICevents.button = id
    Scratch.vm.runtime.startHats('EPICevents_whenbuttonclicked');
  }

  Scratch.extensions.register(new Extension());
})(Scratch);