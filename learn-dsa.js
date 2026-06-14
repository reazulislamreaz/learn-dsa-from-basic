class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop(element) {
        return this.items.pop(element);
    }
    peek(element) {
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack();      
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.items);