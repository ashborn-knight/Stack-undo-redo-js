const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();

    }

    addOperation(operation) {
        this.operations.push(operation);

    }

    undo() {
        let remove = this.operations.pop();
        this.undos.push(remove);
        
        
    }

    redo() {
        let result = this.undos.pop();
        this.operations.push(result);
        
    }

    redoAll() {
        
          while(!this.undos.isEmpty()){
              this.redo();
          }
        
    }
}

module.exports = OperationManager;
