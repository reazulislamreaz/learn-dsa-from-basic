# Learn DSA — Stack

A simple Stack implementation in JavaScript for learning data structures.

## What is a Stack?

A stack is a **LIFO** (Last In, First Out) structure — like a stack of plates. You add and remove from the top only.

## Operations

| Method      | Description               | Time |
|-------------|---------------------------|------|
| `push(x)`   | Add element to top        | O(1) |
| `pop()`     | Remove and return top     | O(1) |
| `peek()`    | View top without removing | O(1) |
| `isEmpty()` | Check if stack is empty   | O(1) |
| `size()`    | Return number of elements | O(1) |

## Run

```bash
node learn-dsa.js
```

## Example 1: Basic operations

Push 1, 2, 3 then peek, pop, and check size.

```
--- Basic operations ---
3
3
2
false
2
```

## Example 2: Valid parentheses

Stacks are useful when you need to match opening/closing pairs in order — like checking if `([{}])` is balanced.

```javascript
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
```

```
--- Valid parentheses ---
true
false
true
false
```
