const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('empty stack, add elements to it and find longest element', () => {
    stack.emptyStack();
    stack.push("Darth Vader");
    stack.push("Yoda");
    stack.push("Han Solo");
    stack.push("Mando");
    stack.push("Obi-Wan Kenobi");
    expect(stack.findLongestElement()).toBe("Obi-Wan Kenobi")
});