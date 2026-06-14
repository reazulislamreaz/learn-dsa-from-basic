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


