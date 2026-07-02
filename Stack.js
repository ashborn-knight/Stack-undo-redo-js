const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
       //  this.items.push(item);
        
       // let MAX_STACK_SIZE = this.items.length;
        if(this.items.length >= MAX_STACK_SIZE ){
            
            throw new Error("Stack overflow");
        }
        this.items.push(item);
       // return this.items;
        
    }
    pop() {
       if(this.items.length === 0){
           throw new Error("Stack underflow");
       }
       return this.items.pop();
        
    }
    isEmpty() {
        
            if(this.items.length === 0){
            return "Stack is not empty;"
        }
    
    }
    peek() {
        
            if(!this.isEmpty()){
                return this.items[this.items.length - 1];
            }else{
                throw new Error("Stack is empty");
            }
        
        
    }
}

module.exports = Stack;
