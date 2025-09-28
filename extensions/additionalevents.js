(function(Scratch) {
  'use strict';
  class Extension {
    constructor() {
      if (typeof Scratch.vm.extensionData == "undefined") {
        console.log("no epicdata");
        Scratch.vm.extensionData = {};
      }
      Scratch.vm.extensionData.EPICevents = {
        button: "_NOBUTTONCLICKED_",
        buttons: []
      };
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
            opcode: 'whenButtonClicked',
            text: 'When button with id [ID] clicked (buggy)',
            blockType: Scratch.BlockType.HAT,
            isEdgeActivated: false,
            arguments: {
              ID: {
                type: Scratch.ArgumentType.STRING,
                menu: 'buttonMenu'
              }
            }
          },
          {
            opcode: 'createButton',
            text: 'Create button with id:[ID]image:[IMG] (buggy)',
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
        ],
        menus: {
          buttonMenu: {
            acceptReporters: false,
            items: '_getButtonIDs'
          }
        }
        
      };
      
    }

    createButton(args) {
      const button = document.createElement('img');
      button.style.width = "2rem";
      button.style.height = "2rem";
      button.style.padding = "0.375rem";
      button.src = args.IMG;
      button.onclick = function() {
        callCustomButton(args.ID);
      }
      const buttoncontainter = document.getElementsByClassName("controls_controls-container_2xinB")[0];
      buttoncontainter.appendChild(button);
      Scratch.vm.extensionData.EPICevents.buttons.push(args.ID);
    }

    whenButtonClicked(args) {
        console.log(`id: ${args.ID}`);
        console.log(`button: ${Scratch.vm.extensionData.EPICevents.button}`);
        return true
    }

    _getButtonIDs() {
      if (Scratch.vm.extensionData.EPICevents.buttons.length == 0) {
        return ["no buttons"];
      } else {
        return Scratch.vm.extensionData.EPICevents.buttons || ["no buttons"];
      }
      return ["no buttons"];
    }
  }

  

  document.addEventListener('click', (e) => {
    Scratch.vm.runtime.startHats('EPICevents_whenmouseclicked');
  });

  function callCustomButton(id){
    Scratch.vm.extensionData.EPICevents.button = id;
    Scratch.vm.runtime.startHats('EPICevents_whenButtonClicked', {
      ID: id
    });
  }

  Scratch.extensions.register(new Extension());
})(Scratch);