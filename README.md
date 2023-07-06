# ODIN-Linked-List

## I wrote the code with the help of Chat-GPT

I run the the following test functions and they worked

### FOR EXAMPLE:

1. I create a new LinkedList using the constructor

<code>const list = new LinkedList();</code>

2. Append some values and then show them with the console.log

<code>
list.append(10);
list.append(20);
list.append(30);
console.log(list.toString());
</code>

3. Prended

<code>
list.prepend(5);
console.log(list.toString());
</code>

// insert() example
list.insert(2, 15);
console.log(list.toString()); // (5) -> (10) -> (15) -> (20) -> (30) -> null

// removeAt() example
list.removeAt(3);
console.log(list.toString()); // (5) -> (10) -> (15) -> (30) -> null

// at() example
console.log(list.at(2)); // 15

// isEmpty() example
console.log(list.isEmpty()); // false

// size() example
console.log(list.size()); // 4

// contains() example
console.log(list.contains(20)); // false
console.log(list.contains(10)); // true

// find() example
console.log(list.find(15)); // 2
console.log(list.find(25)); // null

// pop() example
list.pop();
console.log(list.toString()); // (5) -> (10) -> (15) -> null

// toString() example
console.log(list.toString()); // (5) -> (10) -> (15) -> null




