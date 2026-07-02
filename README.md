# Stack Undo/Redo in JavaScript

This project demonstrates a **Stack data structure** implemented in JavaScript, along with an **Operations Manager** that uses two stacks (`operations` and `undos`) to handle **undo** and **redo** functionality.  

It includes:
- `Stack.js` → core stack implementation (push, pop, peek, isEmpty, overflow/underflow checks).
- `OperationsManager.js` → controller that manages operations and undos using two stacks.
- `testManager.js` → Mocha/Chai tests verifying stack behavior and undo/redo logic.

---

## 🚀 Features
- **Stack operations**: push, pop, peek, isEmpty
- **Error handling**: stack overflow and underflow
- **Operations Manager**:
  - Add operations
  - Undo last operation
  - Redo last undone operation
  - Redo all undone operations

---

## 📂 Project Structure
stack-undo-redo-js/
│
├── Stack.js
├── OperationsManager.js
├── testManager.js
└── README.md

---

## 🧪 Running Tests
This project uses **Mocha** and **Chai** for testing.

1. Install dependencies:
   ```bash
   npm install mocha chai
   npx mocha

   const OperationsManager = require('./OperationsManager');

const manager = new OperationsManager();

manager.addOperation("OPERATION_1");
manager.addOperation("OPERATION_2");
manager.addOperation("OPERATION_3");

manager.undo(); // removes OPERATION_3
manager.redoAll(); // redoes all undone operations

console.log(manager.operations.peek()); // OPERATION_3



