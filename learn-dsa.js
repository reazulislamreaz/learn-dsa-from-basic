class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return undefined;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("--- Basic operations ---");
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());

// Example 2: Check balanced parentheses using a stack
function isValidParentheses(str) {
  const stack = new Stack();
  const pairs = { ")": "(", "]": "[", "}": "{" };

  for (const char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.pop() !== pairs[char]) return false;
    }
  }

  return stack.isEmpty();
}

console.log("\n--- Valid parentheses ---");
console.log(isValidParentheses("()[]{}"));   // true
console.log(isValidParentheses("(]"));       // false
console.log(isValidParentheses("([{}])"));   // true
console.log(isValidParentheses("([)]"));     // false


class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}   

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.items);